# tech-test-soller-spa

This is a Single Page Application (SPA) project developed for Buzzvel. The application aims to offer products related to solar energy. The website features a light theme and includes animations to enhance the user experience.

## Table of Contents
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)

## Demo
The application is deployed and accessible at [tech-test-soller-spa on Vercel](https://tech-test-soller-spa.vercel.app/).

## Tech Stack
The project is built using the following technologies:

- **Next.js** 14.2.15: React framework for server-side rendering and building static web applications.
- **React** 18: JavaScript library for building user interfaces.
- **Styled-Components** 6.1.13: For component-level styling with a CSS-in-JS approach.
- **Framer Motion** 11.11.9: Library for animations and transitions in React.
- **Swiper** 11.1.14: Carousel slider library.
- **TailwindCSS** 3.4.1: Utility-first CSS framework.
- **TypeScript** 5: Provides type safety for the project.
- **ESLint** 8 and **Prettier** 3.3.3: For maintaining code style and formatting consistency.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/tech-test-soller-spa.git
    ```
2. Navigate into the project directory:
    ```bash
    cd tech-test-soller-spa
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. To run the project locally in development mode:
    ```bash
    npm run dev
    Visit 'http://localhost:3000' in your browser to view the application.
    ```

2.  build the project for production:
    ```bash
    npm run build
    ```

3. To start the production server:
    ```bash
    npm start
    ```


## Available Scripts
The following scripts are available for this project:

- **npm run dev:** Starts the application in development mode.
- **npm run build:** Builds the application for production.
- **npm start:** Runs the built application in production mode.
- **npm run lint:** Checks the code for linting errors.
- **npm run lint:fix:** Fixes linting issues automatically.
- **npm run format:** Formats the code using Prettier.

## Project Structure
The main folders and files in the project are organized as follows:
1. architecture of main files
    ```bash
    app/
    ├── public/            # Static files (e.g., images, icons)
    ├── src/
    │   ├── components/    # Reusable components
    │   ├── pages/         # Next.js pages
    │   ├── styles/        # Styled-components and global styles
    │   ├── assets/        # Additional assets like images or fonts
    │   ├── data/          # JSON or other data files for app content
    │   └── lib/           # Helper functions and library utilities
    ├── .eslintrc.js       # ESLint configuration
    ├── .prettierrc        # Prettier configuration
    ├── next.config.js     # Next.js configuration
    └── README.md          # Project README
    ```