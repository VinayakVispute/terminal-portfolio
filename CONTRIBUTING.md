# Contributing to Terminal Portfolio

Thank you for considering contributing to the Terminal Portfolio! This document provides guidelines and steps for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Pull Requests](#pull-requests)
- [Development Guidelines](#development-guidelines)
  - [Code Style](#code-style)
  - [Commit Messages](#commit-messages)
  - [Testing](#testing)
- [Project Structure](#project-structure)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [vinayakvispute4@gmail.com](mailto:vinayakvispute4@gmail.com).

## Getting Started

Contributions are made to this repo via Issues and Pull Requests (PRs). A few general guidelines:

- Search for existing Issues and PRs before creating your own.
- If you've never contributed before, see [First Contributions](https://github.com/firstcontributions/first-contributions) for helpful information.

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/terminal-portfolio.git
   ```
3. Install dependencies:
   ```bash
   cd terminal-portfolio
   npm install
   ```
4. Create a branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
5. Make your changes
6. Test your changes locally:
   ```bash
   npm run dev
   ```

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers understand your report, reproduce the issue, and fix it.

Before creating bug reports, please check [this list](https://github.com/VinayakVispute/terminal-portfolio/issues) to see if the problem has already been reported. When you create a bug report, include as many details as possible:

**How to Submit a Bug Report**

- Use a clear and descriptive title
- Describe the exact steps to reproduce the problem
- Provide specific examples to demonstrate the steps
- Describe the behavior you observed after following the steps
- Explain which behavior you expected to see instead and why
- Include screenshots or animated GIFs if possible
- Include details about your browser and operating system

### Suggesting Features

This section guides you through submitting a feature suggestion, including completely new features and minor improvements to existing functionality.

**How to Submit a Feature Suggestion**

- Use a clear and descriptive title
- Provide a detailed description of the suggested enhancement
- Explain why this enhancement would be useful to most users
- Include mockups or examples of how it might work
- If possible, list some other applications where this feature exists

### Pull Requests

- Fill in the required template
- Do not include issue numbers in the PR title
- Include screenshots and animated GIFs in your pull request whenever possible
- Follow the [code style guidelines](#code-style)
- Document new code
- End all files with a newline
- Avoid platform-dependent code

## Development Guidelines

### Code Style

This project uses ESLint and Prettier for code formatting. Before submitting a PR, ensure your code follows the style guidelines by running:

```bash
npm run lint
npm run format
```

### Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
- Consider starting the commit message with an applicable emoji:
  - ✨ `:sparkles:` when adding a new feature
  - 🐛 `:bug:` when fixing a bug
  - 📚 `:books:` when adding or updating documentation
  - 🎨 `:art:` when improving the format/structure of the code
  - ⚡️ `:zap:` when improving performance
  - 🔥 `:fire:` when removing code or files

### Testing

- Include tests for new features
- Update tests for bug fixes
- Make sure all tests pass before submitting a PR

## Project Structure

The main components and directories of this project are:

- `/app`: Next.js application pages
- `/components`: React components
  - `/components/effects`: Visual effects like Matrix rain and CRT
  - `/components/shared`: Shared components like commands
- `/public`: Static assets
- `/styles`: Global CSS styles

When adding new features, try to follow the existing pattern and structure.

---

Thank you for taking the time to contribute to the Terminal Portfolio! Your contributions make the open-source community a better place.
