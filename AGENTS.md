# AGENTS.md - Development Guidelines

## Goal of the website
This is a landing page website for a new Full stack web framework built on Rust with modern front-end tooling and framework support.

Rext addresses the growing need for a cohesive, batteries-included full-stack framework in the Rust ecosystem. While Rust has excellent individual web components like Axum, Actix-web, and emerging frameworks like Loco, there's a significant gap for a framework that provides the same level of integrated developer experience as Next.js, Nuxt, or SvelteKit but with Rust's performance benefits.

The framework aims to bridge the gap between Rust's powerful backend capabilities and modern frontend development practices, offering opinionated defaults while maintaining the flexibility that developers expect from both ecosystems.

## Build/Test/Lint Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run lint` - Run ESLint checks
- `npm run start` - Start production server
- No test framework configured - check with user before adding tests

## Code Style Guidelines
- **TypeScript**: Strict mode enabled, use proper types for all functions/components
- **Imports**: Use `@/` alias for src imports, group external imports first
- **Components**: Use default exports, PascalCase naming, functional components with TypeScript
- **Complex Components**: If you ever need a pre-built, complex component, like buttons, date pickers, cards, etc, use Shadcn/ui
- **Styling**: Tailwind CSS classes, responsive design patterns
- **Formatting**: 2-space indentation, semicolons, double quotes for strings
- **File Structure**: Components in `src/components/`, pages in `src/app/`
- **Naming**: camelCase for variables/functions, PascalCase for components/types
- **Error Handling**: Use proper TypeScript error types, handle async operations safely

## Framework Details
- Next.js 15.4.1 with App Router
- React 19.1.0 with TypeScript 5
- Tailwind CSS 4 for styling
- ESLint with Next.js config for code quality