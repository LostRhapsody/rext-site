# AGENTS.md - Development Guidelines

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