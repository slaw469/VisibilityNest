# Contributing to Steven Web AI Automations

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Review Process](#review-process)

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) before contributing.

## Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 or **pnpm** >= 8.0.0
- **Git** >= 2.30.0
- A code editor (VS Code recommended)

### Recommended VS Code Extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

## Development Setup

1. **Fork the repository** on GitHub

2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/web-funnel-1.git
   cd web-funnel-1
   ```

3. **Add upstream remote:**
   ```bash
   git remote add upstream https://github.com/slaw469/web-funnel-1.git
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Start development server:**
   ```bash
   npm run dev
   ```

6. **Verify setup:**
   - Open http://localhost:5173
   - Check that hot reload works
   - Run `npm run lint` to verify linting setup

## How to Contribute

### Reporting Bugs

Use the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md) when creating issues for bugs. Include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots or error messages
- Your environment (OS, browser, Node version)

### Suggesting Features

Use the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md). Explain:

- The problem you're trying to solve
- Your proposed solution
- Alternative approaches you've considered

### Submitting Changes

1. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

2. **Make your changes:**
   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic
   - Update documentation if needed

3. **Test your changes:**
   ```bash
   npm run lint        # Check for linting errors
   npm run build       # Ensure production build works
   npx tsc --noEmit    # Verify TypeScript types
   ```

4. **Commit your changes** (see [Commit Guidelines](#commit-guidelines))

5. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** (see [Pull Request Process](#pull-request-process))

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define explicit types; avoid `any`
- Use interfaces for object shapes
- Leverage type inference where appropriate

**Example:**
```typescript
// Good
interface Service {
  title: string;
  value: string;
  bullets: string[];
}

// Avoid
const service: any = { ... };
```

### React Components

- Use functional components with hooks
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use meaningful component and prop names

**Example:**
```typescript
// Good
interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  // component logic
}
```

### Styling

- Use Tailwind utility classes
- Extract repeated patterns into config theme
- Avoid inline styles unless absolutely necessary
- Ensure responsive design (mobile-first)

**Example:**
```tsx
// Good
<button className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition">
  Click me
</button>

// Avoid inline styles
<button style={{ padding: '12px 24px', backgroundColor: '#ecab13' }}>
  Click me
</button>
```

### Accessibility

- Use semantic HTML elements
- Include ARIA attributes where needed
- Ensure keyboard navigation works
- Provide alt text for images
- Maintain sufficient color contrast

### File Organization

- One component per file
- Co-locate related files
- Use clear, descriptive file names
- Follow existing directory structure

## Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/) for clear, structured commit history.

### Commit Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, semicolons, etc.)
- `refactor:` - Code refactoring (no feature changes)
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks (dependencies, config, etc.)
- `ci:` - CI/CD changes

### Examples

```bash
feat(hero): add animated background gradient
fix(navigation): resolve mobile menu close issue
docs: update installation instructions
refactor(components): extract common button styles
chore(deps): update vite to version 5.4.2
```

### Commit Message Rules

- Use imperative mood ("add" not "added")
- Keep subject line under 72 characters
- Capitalize first letter of subject
- No period at the end of subject
- Separate subject from body with blank line
- Use body to explain what and why, not how

## Pull Request Process

### Before Creating a PR

✅ **Checklist:**
- [ ] Code follows project coding standards
- [ ] Linting passes: `npm run lint`
- [ ] TypeScript compiles: `npx tsc --noEmit`
- [ ] Production build succeeds: `npm run build`
- [ ] Manual testing completed
- [ ] Documentation updated (if applicable)
- [ ] No console errors or warnings

### Creating the PR

1. Use a clear, descriptive title following Conventional Commits
2. Fill out the PR template completely
3. Link related issues using keywords: "Fixes #123" or "Closes #456"
4. Add screenshots/GIFs for UI changes
5. Mark as draft if work is in progress

### PR Title Format

```
<type>(<scope>): <description>
```

**Examples:**
```
feat(services): add pricing section
fix(footer): correct social media links
docs: add deployment guide
```

### PR Description

Include:
- Summary of changes
- Motivation and context
- Related issue numbers
- Screenshots (for UI changes)
- Breaking changes (if any)
- Testing approach

## Review Process

### What We Look For

- **Code Quality:**
  - Readable, maintainable code
  - Proper error handling
  - No unused code or variables
  - Consistent with existing patterns

- **Functionality:**
  - Features work as described
  - No regressions introduced
  - Edge cases handled

- **Performance:**
  - No unnecessary re-renders
  - Optimized bundle size
  - Efficient algorithms

- **Accessibility:**
  - Keyboard navigation
  - Screen reader support
  - ARIA attributes where needed

- **Documentation:**
  - Code comments for complex logic
  - Updated README if needed
  - Changelog entry (for releases)

### Review Timeline

- Initial review: Within 48 hours
- Follow-up reviews: Within 24 hours
- Merging: After approval and passing CI

### Addressing Feedback

- Respond to all review comments
- Push additional commits to address feedback
- Mark conversations as resolved when fixed
- Request re-review when ready

## Development Tips

### Hot Module Replacement (HMR)

Vite provides fast HMR. If HMR breaks:
```bash
# Stop dev server and clear cache
rm -rf node_modules/.vite
npm run dev
```

### TypeScript Errors

Check types without running the app:
```bash
npx tsc --noEmit --watch
```

### Debugging

Use browser DevTools and React DevTools. Add debug statements:
```typescript
console.log('[ComponentName]:', data);
```

Remove debug logs before committing.

### Testing Changes

1. Test on multiple screen sizes (mobile, tablet, desktop)
2. Test on different browsers (Chrome, Firefox, Safari)
3. Test keyboard navigation
4. Test with screen reader (NVDA, JAWS, VoiceOver)

## Questions?

- **General questions:** Open a [Discussion](https://github.com/slaw469/web-funnel-1/discussions)
- **Bug reports:** Use the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md)
- **Feature ideas:** Use the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md)
- **Security issues:** See [SECURITY.md](./SECURITY.md)

---

Thank you for contributing! Your efforts help make this project better for everyone.

