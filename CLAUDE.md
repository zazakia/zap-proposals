# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Next.js linting
- `pnpm type-check` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier
- `pnpm clean` - Clean build artifacts
- `pnpm analyze` - Build with bundle analyzer

### Database
- `scripts/create-tables.sql` - SQL script for database table creation

## Architecture

This is a **ZapProposals** application - a professional proposal builder for agencies and freelancers built with Next.js 15, React 19, and TypeScript.

### Core Structure
- **App Router**: Uses Next.js 15 app directory structure
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **Styling**: Custom CSS in `app/globals.css` and `styles/globals.css`
- **State Management**: React hooks and local state
- **Forms**: React Hook Form with Zod validation
- **PDF Generation**: jsPDF with html2canvas for proposal exports

### Key Directories
- `app/` - Next.js app router pages and layouts
  - `auth/` - Authentication pages
  - `dashboard/` - Main dashboard and new proposal creation
  - `proposal/[id]/` - Dynamic proposal viewing with client/static components
- `components/` - Reusable UI components (shadcn/ui based)
- `lib/` - Utilities and sample data
- `hooks/` - Custom React hooks
- `public/` - Static assets and images
- `pages/` - Legacy pages (404, _app, _document)

### Data Management
- Sample data structure in `lib/sample-data.ts` shows proposal schema
- Proposals include: client info, pricing data, terms/conditions, status tracking
- Database schema available in `scripts/create-tables.sql`

### Deployment
- Configured for Netlify deployment (`netlify.toml`)
- Uses pnpm for package management
- TypeScript strict mode enabled for development flexibility

### Key Features
- Proposal creation and management
- Client dashboard with view tracking
- PDF export functionality
- Responsive design with mobile support
- Theme support via next-themes