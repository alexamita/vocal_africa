# VOCAL Africa

Welcome to the **VOCAL Africa** project! This is a modern, responsive web application built for the Vocal Africa Foundation. The platform serves to share the foundation's mission, showcase stories and publications, and facilitate donations to support their cause.

This project is built using modern web technologies to ensure a fast, accessible, and visually engaging experience.

## 🚀 Tech Stack

We use a modern stack to build a robust and maintainable application:

- **[React](https://react.dev/)**: The core library for building the user interface.
- **[TypeScript](https://www.typescriptlang.org/)**: Adds type safety to JavaScript, making code easier to understand and less prone to errors.
- **[Vite](https://vitejs.dev/)**: A super-fast build tool and development server.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid and beautiful styling.
- **[Framer Motion](https://www.framer.com/motion/)**: Powerful animation library for React to create smooth transitions and effects.
- **[Radix UI](https://www.radix-ui.com/)**: Unstyled, accessible UI primitives for building high-quality design systems (used for dialogs, tabs, etc.).
- **[Lucide React](https://lucide.dev/)**: A clean and consistent icon set.

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your computer:

- **[Node.js](https://nodejs.org/)** (Version 16 or higher recommended): This enables you to run the JavaScript environment outside the browser.
- **npm** (Node Package Manager): Usually comes installed with Node.js.

## 🏁 Getting Started

Follow these simple steps to set up the project locally:

### 1. Clone the Repository

Open your terminal and clone the repository to your local machine:

```bash
git clone https://github.com/vocal-africa/vocal-africa.git
cd vocal_africa
```

### 2. Install Dependencies

Install all the necessary libraries and tools defined in `package.json`:

```bash
npm install
```

### 3. Run the Development Server

Start the project in development mode. This will start a local web server (usually at `http://localhost:5173`):

```bash
npm run dev
```

Open your browser and navigate to the link shown in the terminal to see the app running!

## 📂 Project Structure

Here is a quick overview of the main folders and what they contain to help you navigate the codebase:

```
vocal_africa/
├── src/
│   ├── app/
│   │   ├── components/       # All UI components live here
│   │   │   ├── ui/           # Reusable generic components (buttons, inputs, cards)
│   │   │   ├── DonatePage.tsx       # The donation page
│   │   │   ├── HomePage.tsx         # The main landing page
│   │   │   ├── FeaturedStories.tsx  # Component for showing stories
│   │   │   └── ...
│   │   └── App.tsx           # The main component that sets up routing and layout
│   ├── assets/               # Images, fonts, and static files
│   ├── data/                 # Static data files (text content, configuration)
│   ├── styles/               # Global CSS files (Tailwind imports, custom themes)
│   └── main.tsx              # The entry point of the React application
├── .gitignore                # Files to ignore in Git (node_modules, build artifacts)
├── package.json              # Project configuration and list of dependencies
├── README.md                 # This file!
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite configuration
```

## 🌟 Key Features

- **Donation Page**: A seamless flow for users to donate using various currencies and methods (Card, Mobile Money, Bank Transfer).
- **Interactive Stories**: A rich media experience to share the impact of the foundation's work.
- **News & Publications**: A section to read reports, articles, and updates.
- **Responsive Design**: Looks great on mobile, tablet, and desktop screens.

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Checks the code for style and potential errors.

## 🤝 Contributing

We welcome contributions! If you're new to open source, here's how you can help:

1.  **Fork** the repository.
2.  Create a new **branch** (`git checkout -b feature/AmazingFeature`).
3.  Make your changes and **commit** them (`git commit -m 'Add some AmazingFeature'`).
4.  **Push** to the branch (`git push origin feature/AmazingFeature`).
5.  Open a **Pull Request**.

---

Built with ❤️ for Vocal Africa.
