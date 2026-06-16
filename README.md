# 🎬 MovieVault — Movie Watchlist App

A dark, IMDb-style movie search and watchlist app built with React, Vite, React Router, and Tailwind CSS. Search any movie, view full details, and save it to your personal watchlist — saved across sessions with localStorage.

## 🔗 Live Demo


---

## ✨ Features

- Search movies by name using the OMDB API
- Movie detail page — plot, cast, director, genre, IMDb rating, awards, box office
- Add movies to a personal watchlist
- Mark movies as watched / unwatched
- Remove movies from watchlist
- Watchlist persists across refreshes and browser tabs via localStorage
- Dark, IMDb-inspired UI
- Handles missing posters gracefully
- Fully responsive — mobile + desktop
- Loading and error states throughout

---

## 🛠️ Tech Stack

- React 18
- Vite
- React Router v6
- Tailwind CSS
- OMDB API

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/saideep2556/movie-watchlist.git
cd movie-watchlist
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables

Get a free API key at [omdbapi.com](https://www.omdbapi.com/apikey.aspx)

Create a `.env` file in the project root:
```
VITE_MOVIE_API_KEY=your_api_key_here
```

### 4. Run the app
```bash
npm run dev
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── SearchBar.jsx
│   ├── SearchResult.jsx
│   ├── MovieDetail.jsx
│   └── WatchList.jsx
├── layout/
│   ├── Header.jsx
│   └── MainLayout.jsx
├── App.jsx
├── App.css
└── main.jsx
```

---

## 📄 Pages

| Route | Page | Description |
|---|---|---|
| `/` | Search | Search movies, view results |
| `/:imdbID` | Movie Detail | Full movie info + Add to Watchlist |
| `/watchlist` | Watchlist | Saved movies, mark watched, remove |

---

## 🧠 Concepts Practiced

- React Router v6 — `createBrowserRouter`, `Route`, `Outlet`, `useParams`
- `useEffect` — fetch on mount vs fetch on user action
- Lifting state up across routes
- `localStorage` persistence with lazy state initialization
- Immutable state updates — `.map()`, `.filter()`
- Tailwind CSS — dark themed, responsive UI
- Conditional rendering — loading, error, empty states

---