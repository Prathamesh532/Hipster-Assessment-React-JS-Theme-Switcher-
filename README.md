# MultiTheme Store

A dynamic React TypeScript application showcasing theme switching capabilities with responsive design. This project demonstrates modern frontend development practices including theme management, responsive layouts, and animated UI components.

![MultiTheme Store Screenshot](image-1.png)
![MultiTheme Store Screenshot](image-2.png)
![MultiTheme Store Screenshot](image-3.png)

## Features

- **Dynamic Theme Switching**: Switch between multiple themes (Default, Dark, Colorful) with smooth transitions
- **Responsive Layouts**: Different layout options (default, sidebar, grid) that adapt to various screen sizes
- **Mobile-Friendly Navigation**: Hamburger menu with animated sidebar for mobile devices
- **Modern UI Components**: Built with Tailwind CSS and Framer Motion for beautiful animations
- **Type Safety**: Fully typed with TypeScript for better developer experience
- **Product Showcase**: Integration with fake store API to display products

## Tech Stack

- **React 18**: For building the user interface
- **TypeScript**: For type safety and better developer experience
- **Vite**: For fast development and optimized builds
- **Tailwind CSS**: For utility-first styling
- **Framer Motion**: For smooth animations and transitions
- **React Router**: For client-side routing
- **Lucide React**: For beautiful icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone <repository-url>
   cd project
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/       # Reusable UI components
├── config/           # Configuration files including themes
├── context/          # React context providers
├── hooks/            # Custom React hooks
├── pages/            # Page components
├── types/            # TypeScript type definitions
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

## Available Themes

- **Default**: Clean, light theme with blue accents
- **Dark**: Dark theme with yellow accents and sidebar layout
- **Colorful**: Vibrant theme with pink and purple accents and grid layout

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues

## Responsive Design

The application is fully responsive and adapts to different screen sizes:

- **Desktop**: Full sidebar navigation when using sidebar layout
- **Mobile**: Hamburger menu that opens a sliding sidebar

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
