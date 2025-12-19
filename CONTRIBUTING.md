# Contributing to BitByFerd

Thanks for your interest! Here's how to contribute.

## Development Setup
```bash
git clone https://github.com/ferdcami/bitbyferd.git
cd bitbyferd
npm install
npm run dev
```

## Making Changes

1. Create a feature branch
2. Make your changes
3. Run tests: `npm test`
4. Run linter: `npm run lint -- --fix`
5. Test build: `npm run build`
6. Commit with clear messages
7. Push and open PR

## Code Style

- Use TypeScript
- Follow ESLint rules
- Use meaningful variable names
- Add comments for complex logic
- Write tests for utilities

## Testing

Add tests in `src/lib/__tests__/` for new utilities.
```bash
npm test
```

## PR Guidelines

- Clear title and description
- Reference any issues
- Keep PRs focused (one feature per PR)
- Ensure all checks pass
- Request review

---