# VOCAL Africa

Hi! I built the **VOCAL Africa** platform to support the Vocal Africa Foundation's mission. My goal was to create a modern, high-performance web application that effectively communicates their story, showcases their publications, and provides a seamless donation experience for supporters.

I designed this project to be not just functional, but also visually engaging and accessible, ensuring that the foundation's message reaches as many people as possible.

## �️ My Tech Stack Choices

I carefully selected these technologies to ensure the project is scalable, maintainable, and fast:

- **[React](https://react.dev/)**: I used React for its component-based architecture, which allowed me to build reusable UI elements like the donation cards and story blocks.
- **[TypeScript](https://www.typescriptlang.org/)**: To keep my code clean and bug-free, I used TypeScript. It helps me catch errors early and makes refactoring much closer to a breeze.
- **[Vite](https://vitejs.dev/)**: I chose Vite over Create React App because it's incredibly fast. The instant server start and hot module replacement make my development workflow much smoother.
- **[Tailwind CSS](https://tailwindcss.com/)**: For styling, I went with Tailwind. It allowed me to rapidly build a custom design system without leaving my JSX, and it ensures the bundle size stays small.
- **[Framer Motion](https://www.framer.com/motion/)**: I implemented Framer Motion to add life to the application. You'll see smooth page transitions and interactive elements that make the site feel more premium.
- **[Radix UI](https://www.radix-ui.com/)**: I didn't want to reinvent the wheel for complex accessible components (like dialogs and tabs), so I used Radix UI primitives as a solid foundation.

## 🏁 How to Run My Project

If you'd like to explore the code or run it on your local machine, here is how you can get started:

### 1. Clone the Repo

First, clone the repository to your computer:

```bash
git clone https://github.com/vocal-africa/vocal-africa.git
cd vocal_africa
```

### 2. Install Dependencies

I use `npm` to manage dependencies. Run this command to install everything listed in `package.json`:

```bash
npm install
```

### 3. Start the Dev Server

To see the app in action, run the development server:

```bash
npm run dev
```

Then, open your browser to the URL shown (usually `http://localhost:5173`).

## 📂 How I Organized the Code

I structured the project to be intuitive. Here's a map of where everything lives:

```
vocal_africa/
├── src/
│   ├── app/
│   │   ├── components/       # This is where the magic happens. All my UI components.
│   │   │   ├── ui/           # I keep my reusable atoms here (Buttons, Inputs, etc.)
│   │   │   ├── DonatePage.tsx       # The layout for the donation flow
│   │   │   ├── HomePage.tsx         # The main landing page implementation
│   │   │   └── ...
│   │   └── App.tsx           # My main routing and layout setup
│   ├── assets/               # Static assets like images and logos
│   ├── data/                 # I separated text content here to keep components clean
│   ├── styles/               # Global styles and Tailwind configuration
│   └── main.tsx              # The entry point where I mount the React app
├── .gitignore                # Standard git ignore rules
├── package.json              # My dependency list and scripts
└── vite.config.ts            # Vite build configuration
```

## 🌟 Features I'm Proud Of

- **Seamless Donation Flow**: I built a custom donation interface that supports multiple currencies and payment methods, making it as easy as possible for users to contribute.
- **Dynamic Storytelling**: I created a "Featured Stories" component that uses rich media to highlight the impact of the foundation's work.
- **Responsive & Accessible**: I spent time ensuring the site works perfectly on mobile devices and adheres to accessibility standards.

## 🤝 Contributing

This is a living project, and I'm always open to improvements. If you notice a bug or have an idea for a feature:

1.  Fork the repo.
2.  Create your feature branch.
3.  Submit a Pull Request!

---

Check out the code and let me know what you think!
