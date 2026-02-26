# CareDent React Website Setup

This project is a single-file React application (`DentalApp.jsx`) that contains all the logic, styling, and assets needed for a production-ready dental clinic website.

## Prerequisites

- **Node.js** (v16 or higher)
- **NPM** or **Yarn**

## Running Locally (Recommended: Vite)

Since the application is self-contained, you can quickly run it using Vite:

1. **Initialize Project**:
   ```powershell
   npm create vite@latest caredent-website -- --template react
   cd caredent-website
   ```

2. **Replace Code**:
   - Copy the contents of `DentalApp.jsx` from this directory.
   - Replace the entire content of `src/App.jsx` in your new project with that code.

3. **Start Development Server**:
   ```powershell
   npm install
   npm run dev
   ```

4. **View**: Open the URL provided in the terminal (usually `http://localhost:5173`).

## Running in the Browser (No Installation)

You can also run this immediately without installing anything:

1. Go to [CodeSandbox React Template](https://codesandbox.io/s/new?template=react).
2. Create a new file or use `App.js`.
3. Paste the contents of `DentalApp.jsx` into the editor.
4. The preview will update automatically.

## Design Highlights
- **Mobile First**: Fully responsive layout.
- **Glassmorphism**: Modern frosted glass effects.
- **SVG Icons**: No external image dependencies.
- **Form Validation**: Real-time client-side checks for the booking form.
