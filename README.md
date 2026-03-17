# 🌳 Pathtata — Learning Path Tracker

A visual, interactive skill-tree app that guides developers through personalized programming learning paths — from fundamentals all the way to advanced architecture and full-stack development.

---

## ✨ What is Pathtata?

Pathtata is a web app where users can visualize and track their programming learning journey through an **interactive skill tree**. Each node in the tree represents a topic or module (e.g. *Algorithms*, *OOP*, *Frontend Development*). As users complete resources within each module, the tree updates in real time, unlocking new branches and reflecting their progress.

The learning path can be chosen manually or guided by an **AI-powered assistant** (the "Sorting Hat") that asks questions and recommends the best path based on the user's goals and experience level.

---

## 🖼️ Core Features

### 🗺️ Interactive Skill Tree
The main view is a **pannable, zoomable node graph** rendered on an infinite canvas. Users can:
- Drag to navigate the tree in any direction
- Zoom in/out with the mouse wheel (or buttons on mobile)
- Click any node to open its detail panel

Each node displays:
- A topic icon and title
- The learning stage (e.g. *Nivel Básico*, *Nivel Avanzado*)
- A circular progress indicator for in-progress modules
- A status badge: **Locked**, **Available**, **In Progress**, or **Completed**

Node states and their visual meaning:

| Status | Color | Meaning |
|---|---|---|
| 🔒 Locked | Gray | Prerequisites not yet completed |
| 🔵 Available | Blue | Ready to start |
| 🟣 In Progress | Purple | Currently being studied |
| 🟢 Completed | Green | All resources finished |

---

### 📋 Node Detail Panel
Clicking a node slides open a panel (from the right on desktop, from the bottom on mobile) showing:

- Module title, description, and learning stage
- A **progress bar** showing percentage of resources completed
- An expandable list of **learning resources**, each containing sub-resources of types: `video`, `documentation`, `article`, or `exercise`
- A **checkbox per sub-resource** — checking one updates the progress bar in real time
- Action buttons depending on the node's state:
  - *"Comenzar este módulo"* — for available nodes
  - *"Marcar como completado"* — for in-progress nodes
  - A locked/completed indicator for the other states

---

### 🪄 Sorting Hat (AI Path Recommender)
A dedicated page (`/sorting-hat`) where an AI guides the user through a series of questions about their background and goals, then recommends the most suitable learning path to follow in the skill tree.

---

### 🔐 Authentication
The app includes a full auth flow:
- `/login` — Log in page
- `/signUp` — Registration page
- `/profile` — Protected profile page (requires login via `PrivateRoute`)
- `/dashboard` — The main skill tree view
- Routes are protected using a `PrivateRoute` component

---

## 🧱 Tech Stack

| Technology | Role |
|---|---|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Motion (Framer Motion) | Animations and transitions |
| Tailwind CSS | Styling |
| Lucide React | Icons |
| React Router v6 | Client-side routing |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+
- A running backend API at `http://localhost:3001` (the dashboard fetches from `/api/paths/:pathId/tree/:userId`)

### Install & run

```bash
# Clone the repo
git clone https://github.com/ramses-ayala/pathtata.git
cd pathtata

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Build for production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
pathtata/
├── public/
└── src/
    ├── components/
    │   ├── Dashboard/
    │   │   └── Dashboard.jsx        # Main view — loads tree data, manages state
    │   ├── learning-tree/
    │   │   ├── LearningTree.jsx     # Infinite canvas with pan/zoom logic
    │   │   ├── TreeNode.jsx         # Individual node circle with progress ring
    │   │   └── NodePanel.jsx        # Slide-in detail panel with resources
    │   ├── LogIn/
    │   ├── SignUp/
    │   ├── Profile/
    │   └── PrivateRoute/
    ├── pages/
    │   └── SortingHat/
    │       └── SortingHat.jsx       # AI-guided path recommendation flow
    ├── index.css
    └── App.jsx                      # Router with all route definitions
```

---

## 🔌 API Integration

The dashboard fetches the skill tree from a local backend:

```
GET http://localhost:3001/api/paths/:pathId/tree/:userId
```

The response is expected to be an array of node objects. While the backend is unavailable, the app falls back to hardcoded sample data covering 9 topics across 4 levels:

1. **Level 0** — Programming Fundamentals
2. **Level 1** — Data Structures · Basic Algorithms
3. **Level 2** — OOP · Advanced Algorithms · Frontend Development
4. **Level 3** — Design Patterns · Software Architecture · Full Stack Apps

Each node includes its dependencies (which nodes must be completed first), position coordinates for the canvas, and a full list of learning resources with sub-resources.

---

## 📱 Responsive Design

The app is fully responsive:
- **Desktop** — Side panel slides in from the right; zoom via mouse wheel
- **Mobile** — Panel slides up from the bottom with drag-to-dismiss; zoom via +/− buttons; tree uses a smaller initial scale

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you'd like to change.

---

> This project is not affiliated with any official learning platform. All learning content data is illustrative 
