# saasforge
l build a complete SaaS starter kit with sensible defaults since 

> Production-ready Next.js SaaS starter kit with authentication, billing, team management, and modern developer experience.

## 🚀 Features

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Database**: PostgreSQL + Prisma ORM
- **Authentication**: NextAuth v5 (Credentials, GitHub, Google)
- **Payments**: Stripe Subscriptions + Customer Portal
- **State Management**: TanStack Query + Zustand
- **Forms**: React Hook Form + Zod validation
- **Testing**: Vitest + React Testing Library + Playwright
- **CI/CD**: GitHub Actions + Vercel deployment
- **Accessibility**: WCAG 2.1 AA compliant
- **Dark Mode**: System + manual toggle

## 📦 Quick Start

### Prerequisites

- Node.js 20+
- pnpm 9+
- PostgreSQL database (local or Neon)
- Stripe account (for payments)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/saasforge.git
cd saasforge

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Set up database
pnpm db:generate
pnpm db:push
pnpm db:seed

# Start development server
pnpm dev
