# Structured React.js Project Roadmap

This document outlines a progressive, hands-on learning roadmap for practicing React.js fundamentals without using advanced state management libraries or patterns (e.g., Context API, Redux, custom hooks).

---

## 1. Simple Counter & Goal Tracker
* **Difficulty:** Basic
* **Description:** A daily habit or goal-counter dashboard where users can track numerical goals (e.g., cups of water, study pomodoros) with visual status indicators.
* **Main Features:**
  * Increment, decrement, and reset buttons for individual goal counters.
  * Conditional visual indicators when a target goal is achieved (e.g., color shift or achievement badge).
  * Styled cleanly using Tailwind CSS utility classes.
* **React Topics Practiced:** Vite setup, JSX, Components & Props, `useState`, Conditional Rendering, Tailwind CSS.

---

## 2. Task Manager (To-Do List with Filters)
* **Difficulty:** Basic
* **Description:** A structured task dashboard that lets users add, complete, delete, and filter items based on their status.
* **Main Features:**
  * Add new tasks using controlled text inputs and form submission.
  * Toggle completion status or delete existing tasks.
  * Filter visible tasks using state tabs ("All", "Active", "Completed").
  * Render dynamic arrays cleanly with unique keys and empty-state placeholders.
* **React Topics Practiced:** Controlled Input Forms, `useState` (managing arrays/objects), Lists & Keys, Conditional Rendering, Tailwind CSS.

---

## 3. Interactive Quiz Dashboard
* **Difficulty:** Basic to Intermediate
* **Description:** A step-by-step quiz application that handles question navigation, user selection, score calculation, and immediate feedback.
* **Main Features:**
  * Display one question at a time with a progress indicator.
  * Select options with immediate visual feedback (correct/incorrect state styling).
  * Calculate final score and display a performance summary upon completion.
  * Option to restart the quiz and reset states.
* **React Topics Practiced:** JSX logic, Components & Props, `useState`, Conditional Rendering, Lists & Keys, Tailwind CSS.

---

## 4. Dynamic Product Catalog with Search & Filter
* **Difficulty:** Intermediate
* **Description:** A mock e-commerce product gallery with real-time text searching, category filtering, and sorting parameters.
* **Main Features:**
  * Render product cards dynamically from local JSON or structured array data.
  * Real-time search bar using controlled input to filter products by title.
  * Filter products by category dropdowns and sort by price or rating.
  * Conditional layout for "No products found" states.
* **React Topics Practiced:** Controlled Input Forms, Lists & Keys, `useState` (derived state vs storage state), Conditional Rendering, Tailwind CSS, ESLint/Prettier code structure.

---

## 5. Weather App with Live Data Fetching
* **Difficulty:** Intermediate
* **Description:** An interactive weather query tool that fetches live atmospheric data for any requested city using external APIs.
* **Main Features:**
  * Search bar form to submit a target city query.
  * Trigger side effects (`useEffect` / Axios / Fetch) to request remote weather metrics on form submission.
  * Explicit UI state handling for Loading, Error (e.g., city not found), and Success screens.
  * Dynamic rendering of temperature, humidity, wind speeds, and atmospheric condition icons.
* **React Topics Practiced:** `useEffect` and lifecycle synchronization, Data fetching (Axios or Fetch API), Controlled Inputs, `useState` (for loading/error/data states), Conditional Rendering, Tailwind CSS.
* **Suggested API:** OpenWeatherMap API (`https://api.openweathermap.org`)

---

## 6. GitHub Profile Search & Repository Explorer
* **Difficulty:** Intermediate
* **Description:** A search tool that fetches GitHub user details, statistics, and top public repositories directly from the public GitHub REST API.
* **Main Features:**
  * Search input to query any public GitHub username.
  * Render user profile details (avatar, bio, followers, public repos).
  * Fetch and display a list of top repositories with star counts, primary languages, and direct links.
  * Graceful handling of non-existent usernames and network request failures.
* **React Topics Practiced:** `useEffect` dependency management, Data fetching with Axios or Fetch, Components & Props, Controlled Forms, Lists & Keys, Tailwind CSS.
* **Suggested API:** GitHub REST API (`https://api.github.com/users/{username}`)

---

## 7. Cryptocurrency / Stock Watchlist Dashboard
* **Difficulty:** Intermediate
* **Description:** A financial market monitor featuring automated data refresh intervals, currency toggles, and itemized watchlist favorites.
* **Main Features:**
  * Fetch and render top market assets with current prices, 24h market changes, and images.
  * Automatic periodic re-fetching (or polling setup using `useEffect` cleanup) to keep prices updated.
  * Local state toggling to add or remove assets from a prioritized "Favorites" view.
  * Search bar to quickly filter long lists of market assets.
* **React Topics Practiced:** `useEffect` cleanup timers/subscriptions, Data fetching with Axios/Fetch, State management across lists, Controlled Inputs, Conditional Rendering, Tailwind CSS.
* **Suggested API:** CoinGecko API (`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`)
