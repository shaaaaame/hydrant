
# Hydrant

**Forest fire emergency aid with data visualization to help stop fires**

Hydrant is a project designed to help visualize fire data (both satellite and user‐reported) on an interactive Google Map. It includes a robust backend built with **NestJS**, **MySQL**, and **Docker**, alongside a **React**-based frontend.

Key features:
- **Map visualization** using the Google Maps JavaScript API.
- **Data layers**: satellite heatmaps, user-reported markers, and fire prediction heatmaps.
- **Backend integration** for user data storage and video attachments.
- **CSV ingestion** for fire and user data.
- **SQL Database** for structured data management and efficient queries.

---

## Table of Contents

- [Motivation & Features](#motivation--features)
- [Project Structure](#project-structure)
- [Technologies & Libraries](#technologies--libraries)
- [Installation & Setup](#installation--setup)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Usage](#usage)
  - [Running Locally](#running-locally)
  - [Loading CSV Files](#loading-csv-files)
- [Map Visualization Details](#map-visualization-details)
  - [Heatmap Layer](#heatmap-layer)
  - [Marker Layer](#marker-layer)
  - [User Videos](#user-videos)
- [Environment Variables](#environment-variables)
- [Database Design](#database-design)
- [Contributing](#contributing)

---

## Motivation & Features

Hydrant aims to provide an intuitive tool to assist firefighting teams, agencies, and volunteers by leveraging advanced technologies like **geospatial visualization**, **predictive analytics**, and **structured data storage**.

Key features:
1. **Live satellite data** heatmap with CSV parsing.
2. **User-reported markers** with video attachments.
3. **Fire prediction** heatmap for forecasting spread.
4. **SQL database** integration to store and manage user-reported and system-generated data.
5. **Backend API** for secure and efficient data transactions.

---

## Project Structure

```
hydrant/
  ├── backend/                # NestJS backend
  │    ├── src/
  │    │    ├── controllers/  # API endpoints
  │    │    ├── services/     # Core business logic
  │    │    ├── entities/     # TypeORM entities for SQL models
  │    │    ├── database/     # MySQL configuration and migrations
  │    └── ...
  │
  ├── frontend/               # React frontend
  │    ├── public/            # Static assets
  │    ├── src/
  │    │    ├── components/   # React components
  │    │    ├── pages/        # Page components
  │    │    ├── map/          # Google Maps-related code
  │    └── ...
  │
  ├── docker-compose.yml      # Docker setup for MySQL and backend
  ├── .env                    # Environment configuration
  ├── package.json            # Dependencies and scripts
  └── README.md               # This file
```

## Technologies & Libraries

### Frontend
- **React** – for building the UI.
- **Vite** – fast development server and bundler.
- **Google Maps API** – for map visualization.
- **Chakra UI** – for design components.
- **Papa Parse** – for easy CSV parsing.

### Backend
- **NestJS** – for creating scalable and maintainable server-side applications.
- **MySQL** – as the primary SQL database for structured data storage.
- **TypeORM** – for managing database schema and queries.
- **Docker** – for containerized development and deployment.

---

## Installation & Setup

### Frontend

1. Clone the repository:
   ```bash
   git clone https://github.com/YourUser/hydrant.git
   cd hydrant/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd hydrant/backend
   ```

2. Configure your `.env` file (see [Environment Variables](#environment-variables)).

3. Build and start the backend with Docker:
   ```bash
   docker-compose up --build
   ```

4. Verify the server is running at:
   ```
   http://localhost:3000
   ```

---

## Usage

### Running Locally

Start both the frontend and backend servers:
1. Run `npm run dev` in the `frontend` directory.
2. Run `docker-compose up` in the `backend` directory.

Open your browser and navigate to the frontend (usually `http://localhost:5173`).

### Loading CSV Files

Use the **Map** page to upload:
- **Satellite CSV** for fire brightness heatmap.
- **User CSV** for user-reported markers.

---

## Map Visualization Details

### Heatmap Layer
- Derived from satellite CSV data.
- Red/orange gradient for fire intensity and blue gradient for predictions.

### Marker Layer
- Displays user-reported fires with video attachments.
- Clicking a marker fetches the video from the backend API.

### User Videos
- Video data is fetched dynamically from the backend.

---

## Environment Variables

### Frontend
Create a `.env` file in the `frontend` directory:
```env
VITE_GOOGLE_MAPS_API_KEY=<YourGoogleMapsAPIKey>
```

### Backend
Create a `.env` file in the `backend` directory:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=password
DB_NAME=hydrant
```

---

## Database Design

The database uses **MySQL** to store:
- User-reported fire data.
- Satellite data ingestion logs.
- Metadata for videos and predictions.

### Example Table Schema
#### `fires`
| Column      | Type          | Description                     |
|-------------|---------------|---------------------------------|
| `id`        | INT           | Primary key.                   |
| `latitude`  | FLOAT         | Fire latitude.                 |
| `longitude` | FLOAT         | Fire longitude.                |
| `intensity` | FLOAT         | Fire brightness/intensity.     |
| `source`    | ENUM          | `SATELLITE` or `USER_REPORTED` |
| `createdAt` | TIMESTAMP     | Timestamp for fire data.       |

---

## Contributing

1. **Fork** this repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes and push:
   ```bash
   git commit -m "Add your changes here"
   git push origin feature/your-feature
   ```
4. Open a pull request with a detailed description of your changes.

We welcome contributions for:
- Advanced fire prediction algorithms.
- UI/UX improvements.
- Additional data layers or analytics.

---
```
