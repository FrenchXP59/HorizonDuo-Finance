# Overview

This is a French financial education web application called "Mes Premiers Investissements" (My First Investments). The application provides three interactive tools to help beginners take their first steps in stock market investing:

1. **Compound Interest Calculator** - Simulates capital growth over time with optional monthly savings
2. **Portfolio Simulator** - Creates personalized asset allocation through a guided questionnaire 
3. **Dividend Simulator** - Demonstrates passive income potential through dividends and reinvestment

The application is designed as a client-side educational tool with interactive calculators, charts, and visualizations to help users understand key investment concepts.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Pure HTML/CSS/JavaScript**: Single-page application with modular structure, no frameworks used
- **Theme System**: Dark/light mode toggle with CSS custom properties for theming
- **Responsive Design**: Mobile-first approach using CSS Grid and Flexbox
- **Component Structure**: Main landing page with separate calculator modules in `/modules/` directory

## Data Visualization
- **Chart.js Integration**: Client-side charting library for financial data visualization
- **Interactive Charts**: Real-time updates based on user input parameters
- **Multiple Chart Types**: Support for line charts, pie charts, and growth projections

## State Management
- **LocalStorage**: Theme preferences persistence across browser sessions
- **Client-side Calculations**: All financial calculations performed in browser
- **Form State**: Real-time input validation and calculation updates

## User Experience Design
- **Progressive Disclosure**: Questionnaire-based approach for portfolio allocation
- **Visual Feedback**: Animated transitions and hover effects
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support
- **Multi-language Support**: Currently French, with structure for internationalization

## Modular Structure
- **Tool Separation**: Each calculator is a separate HTML module with shared styling
- **Shared Assets**: Common CSS and JavaScript utilities across modules
- **Navigation System**: Consistent back navigation and tool switching

# External Dependencies

## JavaScript Libraries
- **Chart.js (v4.5.0)**: Data visualization and interactive charting
- **@kurkle/color**: Color manipulation utilities for Chart.js

## Package Management
- **npm**: Dependency management with package.json configuration
- **CDN Delivery**: Chart.js loaded via CDN for modules

## Browser APIs
- **LocalStorage**: Theme preference persistence
- **IntersectionObserver**: Scroll-based animations and lazy loading
- **CSS Custom Properties**: Dynamic theming system

## Development Dependencies
- No build tools or bundlers required
- Static file serving capability for development
- Modern browser support for ES6+ features