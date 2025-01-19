import Papa from 'papaparse'

function parseCsvFile(file) {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      transformHeader: (h) => h.replace(/\uFEFF/g, ''),
      skipEmptyLines: true,
      delimiter: ',',
      dynamicTyping: true,
      complete: (results) => {
        if (results.errors && results.errors.length > 0) {
          reject(results.errors)
        } else {
          resolve(results.data)
        }
      },
      error: (err) => {
        reject(err)
      },
    })
  })
}

function isWithinDays(dateStr, timeStr, days) {
  const dt = makeDateTime(dateStr, timeStr)
  if (!dt) return false
  const now = new Date()
  const diffMs = now.getTime() - dt.getTime()
  const diffDays = diffMs / (1000 * 60 * 60 * 24)
  return diffDays <= days
}

function makeDateTime(dateStr, timeStr) {
  if (!dateStr) return null
  // dateStr: "YYYY-MM-DD"
  const parts = dateStr.split('-')
  if (parts.length !== 3) return null
  let year = parseInt(parts[0], 10)
  let month = parseInt(parts[1], 10) - 1 // zero-based
  let day = parseInt(parts[2], 10)
  // timeStr might be 319 => "0319"
  const timeStrPadded = String(timeStr).padStart(4, '0')
  const hour = parseInt(timeStrPadded.substring(0, 2), 10)
  const min = parseInt(timeStrPadded.substring(2, 4), 10)
  return new Date(year, month, day, hour, min)
}

export async function getHydrants() {
  const satFile = await (await fetch('https://localhost:5173/hydrants_query.csv')).blob()

  const hydrantsData = await parseCsvFile(satFile)

  return hydrantsData
}

export async function buildHeatmapLayer(map) {
  // If an old heatmap exists, remove it
  //   if (heatmap) {
  //     heatmap.setMap(null)
  //     heatmap = null
  //   }
  const satFile = await (await fetch('https://localhost:5173/fire.csv')).blob()
  const usrFile = await (await fetch('https://localhost:5173/user.csv')).blob()

  const satelliteData = await parseCsvFile(satFile)
  const userData = await parseCsvFile(usrFile)

  const allCsvData = satelliteData.concat(userData)
  // Read the user’s "days back" input
  const daysBack = 10
  // Filter data based on "daysBack"
  const filteredData = allCsvData.filter((row) => {
    return isWithinDays(row.acq_date, row.acq_time, daysBack)
  })

  // Convert each row -> WeightedLocation
  const heatmapPoints = filteredData.map((row) => {
    const lat = parseFloat(row.latitude)
    const lng = parseFloat(row.longitude)
    // Brightness as weight
    let weight = parseFloat(row.brightness) || 1
    if (row.userRating) {
      weight = 50 * parseFloat(row.userRating) + 200
    }
    return { location: new google.maps.LatLng(lat, lng), weight: weight }
  })
  console.log('Heatmap data size (last 7 days):', heatmapPoints.length)
  const fireGradient = [
    'rgba(255,255,0,0)', // transparent yellow
    'rgba(255,255,0,1)', // yellow
    'rgba(255,165,0,1)', // orange
    'rgba(255,0,0,1)', // red
  ]
  // Create the Heatmap

  const heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapPoints,
    map: map,
    gradient: fireGradient,
  })

  console.log(map)

  return heatmap
}
