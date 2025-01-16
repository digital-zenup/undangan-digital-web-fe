# Zen.UP - Online Digital Invitations

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node](https://nodejs.org/) (v20 or later)
- [Bun](https://bun.sh/) (latest version)

Optional, but recommended:

- [Git](https://git-scm.com/) for version control
- [VS Code](https://code.visualstudio.com/) or any modern IDE with Vue.js support

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/digital-zenup/undangan-digital-web-fe.git
cd undangan-digital-web-fe
```

2. **Install the dependencies using pnpm**

```bash
bun install
```

## Deps Installation

1. **Update Deps**

```bash
bun deps:major
bun deps:major-up
```

## Development

1. **Start the development server**:

```bash
bun dev
```

2. **Access the application**

    Open your browser and navigate to http://localhost:8000.

## Commit

To make a commit, use the following command:

```bash
git add <your-file>
bun commit
git push origin
```

## Linting and Formatting

To maintain code quality, run linting and formatting commands:

```bash
bun lint
bun lint:fix
```

## Project Structure

The project structure is as follows:

```
project-root/
|--- assets/                    # Static assets such as images used in the application (Styles, Icon).
|--- components/          # Vue components that can be reused across the application.
    |--- base/                  # Base components are generic components that are used across the application. They are typically not specific to a particular page or feature.
    |--- modules/           # Partial components that are used on specific pages or features. Modules are typically more complex than base components and may contain multiple components. and act as partials on pages section
|--- constants/              # Files containing constant values like configurations, action names, or API endpoints.
|--- layouts/                 # Vue components that define the layout of a page
|--- pages/                   # Vue components that define routes and route parameters
|--- public/                  # Directory for static files accessible by users, like robots.txt or favicon.ico
|--- server/                  # Contains server-side logic, APIs, and backend configurations
|--- types/                   # Directory for storing type definitions for the application.
|--- utils/                    # Utility functions, helpers, and tooling for the application
```
