# VOCAL Africa — Website Redesign Showcase

## Purpose
A frontend design and UX showcase created to demonstrate a proposed website revamp for the Vocal Africa Foundation.(Dummy content only)

The project focuses on content structure, accessibility, and usability, rather than production data or backend systems.

- **Production note:** The intended production build would pair this UI with a CMS (e.g., WordPress) to support non-technical publishing and automated content feeds.



## Context
The foundation required a modernized web presence that:
- **Clearly communicates its mission and impact**
- **Presents publications in a structured, readable way**
- **Provides a simple and trustworthy donation experience**

This project was my attempt to demonstrate how those needs can be addressed.


## Data & Integrations
- All content and transactions use dummy data only
- No live payment gateways or external services
- No real user or organizational data involved

This constraint is intentional and appropriate for a design showcase, pre-approval.


## Scope
Public-facing informational pages
Donation flow UI (visual and interaction design only)
Responsive and accessible layout
Frontend-only implementation


## Key Features
Clear content hierarchy for storytelling and impact sections
Reusable UI components for consistent layout and interactions
Accessible dialogs and navigation patterns
Responsive design across devices


## UI Decisions
Component reuse over page-specific logic to support iteration
Radix UI primitives for accessibility and keyboard support
Tailwind CSS for consistent styling with minimal CSS complexity
Motion used selectively to guide attention without distraction
Content separated from presentation to simplify redesign cycles


## Technology
1.Frontend
- **[React](https://react.dev/)**: I used React for its component-based architecture, which allowed me to build reusable UI elements like the donation cards and story blocks.
- **[TypeScript](https://www.typescriptlang.org/)**: To keep my code clean and bug-free, I used TypeScript. It helps me catch errors early and makes refactoring much closer to a breeze.
- **[Tailwind CSS](https://tailwindcss.com/)**: For styling, I went with Tailwind. It allowed me to rapidly build a custom design system without leaving my JSX, and it ensures the bundle size stays small.
- **[Vite](https://vitejs.dev/)**: I chose Vite over Create React App because it's incredibly fast. The instant server start and hot module replacement make my development workflow much smoother.

2.UI & Interaction
- **[Framer Motion](https://www.framer.com/motion/)**: I implemented Framer Motion to add life to the application. You'll see smooth page transitions and interactive elements that make the site feel more premium.
- **[Radix UI](https://www.radix-ui.com/)**: I didn't want to reinvent the wheel for complex accessible components (like dialogs and tabs), so I used Radix UI primitives as a solid foundation.


3.Tooling
- **[Git](https://git-scm.com/)** / GitHub


## How to Run My Project
To explore the code or run it on your local machine, here is how you can get started:
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


## How I Organized the Code
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

The structure supports fast iteration and feedback during a redesign process.

## Limitations
- Dummy data only
- No backend or CMS
- No real payment processing
- No analytics or tracking

These limitations were intentional and aligned with the project’s purpose.

## Future Extensions
- CMS-backed content management
- Live payment gateway integration
- Analytics and performance monitoring
- Localization and multi-language support

The project is currently a static frontend showcase, but it can be extended with backend integration, dynamic content, and more features as and when needed.

