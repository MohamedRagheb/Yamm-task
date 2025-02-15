# Yamm Task

## Overview
Yamm Task is a React application built with TypeScript, designed for modern web development with a structured and scalable architecture.

## Features
- TypeScript for static typing
- Modular and reusable component structure
- State management with Context API
- API integration with mock JSON Server
- Linting and formatting with ESLint & Prettier

## Folder Structure
```
root/
│── src/                # Main application source code
│   ├── assets/         # Static assets (images, icons, etc.)
│   ├── components/     # Reusable UI components
│   ├── hooks/          # Custom hooks
│   ├── contexts/       # Context API providers
│   ├── pages/          # Application pages
│   ├── services/       # API services & integrations
│   ├── utils/          # Helper functions & utilities
│   ├── types/          # TypeScript types & interfaces
│── public/             # Static public assets
│── package.json        # Project dependencies & scripts
│── tsconfig.json       # TypeScript configuration
│── README.md           # Documentation
```

## Installation
### Prerequisites
- Node.js (>= 20)
- Yarn (recommended)

### Steps
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```sh
   yarn install
   ```
3. Create a `.env` file and configure environment variables.
4. Start the development server:
   ```sh
   yarn dev
   ```

## Running the App
- **Development:** `yarn dev`
- **Build for Production:** `yarn build`
- **Start Production Server:** `yarn start`
- **Run JSON Server:** `yarn server`

## JSON Server
This project includes `json-server` for API mocking. Ensure `db.json` is present in the public directory.

### Start JSON Server:
```sh
yarn server
```
Default endpoint: `http://localhost:8000`

## License
This project is licensed under the MIT License.

