# 🍔 FoodDash — Swiggy-Inspired Food Delivery App

A production-style food delivery web application built with **React 18 + Vite + Tailwind CSS**, inspired by Swiggy. Browse live restaurant listings, explore menus, search and filter — all powered by real API data.

---

---

## ✨ Features

- **Live Restaurant Listings** — Fetches real-time data from the Swiggy public API
- **Restaurant Menu Pages** — Dynamic nested routing per restaurant
- **Search & Filter** — Search by name, filter by top ratings (4.5+)
- **Shimmer UI** — Skeleton loading placeholders while data fetches
- **Lazy Loading** — Grocery page loaded on-demand via React `lazy()` + `Suspense`
- **Custom Hooks** — `useResMenu`, `useOnlineStatus` for clean separation of concerns
- **Online Status Indicator** — Real-time detection using browser events
- **Responsive Design** — Built with Tailwind utility classes

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI library |
| Vite | Build tool & dev server |
| React Router DOM v6 | Client-side routing |
| Tailwind CSS | Utility-first styling |
| Swiggy Public API | Restaurant & menu data |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx        # Navbar with login toggle & online status
│   ├── Body.jsx          # Home — restaurant listing + search/filter
│   ├── ResCard.jsx       # Individual restaurant card
│   ├── ResMenu.jsx       # Restaurant menu page
│   ├── Shimmer.jsx       # Loading skeleton UI
│   ├── Cart.jsx          # Cart page (UI placeholder)
│   ├── About.jsx         # About page
│   ├── Contact.jsx       # Contact page
│   ├── Grocery.jsx       # Lazily loaded grocery page
│   └── Error.jsx         # Error boundary page
├── utils/
│   ├── router.jsx        # createBrowserRouter config
│   ├── constants.jsx     # CDN_URL, MENU_API
│   ├── useResMenu.jsx    # Custom hook — fetch restaurant menu
│   └── useOnlineStatus.jsx # Custom hook — detect network status
├── App.jsx               # Root layout with Header + Outlet
└── main.jsx              # Entry point
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔌 API

This app uses the **Swiggy public API** for restaurant data:

- **Listings:** `https://www.swiggy.com/dapi/restaurants/list/v5`
- **Menu:** `https://www.swiggy.com/dapi/menu/pl`

> ⚠️ The Swiggy API is unofficial and may require a CORS proxy or browser extension to work locally. Consider using a mock data file for production deployment.

---

## 📸 Pages

| Route | Component | Description |
|---|---|---|
| `/` | `Body` | Home — restaurant grid |
| `/restaurants/:resId` | `ResMenu` | Restaurant menu |
| `/grocery` | `Grocery` | Lazily loaded grocery section |
| `/cart` | `Cart` | Cart page |
| `/about` | `About` | About page |
| `/contact` | `Contact` | Contact page |

---

## 🧠 Concepts Demonstrated

- React functional components & hooks (`useState`, `useEffect`)
- Custom hooks for reusable data-fetching logic
- React Router v6 — nested routes, dynamic segments, `Outlet`
- Code splitting with `React.lazy()` + `Suspense`
- Conditional rendering & shimmer/skeleton loading pattern
- Tailwind CSS utility-first styling
- Real-world API integration

---

## 📄 License

This project is for educational purposes. Restaurant data belongs to Swiggy.

---

_Built by [Dharshan S]([https://github.com/your-username](https://github.com/Dacchu2004))_
