# Vulnerable Snyk Test Project

This is a simple Node.js project designed with intentionally vulnerable dependencies for testing security scanners like **Snyk**.

## Getting Started

1. Install the dependencies:
   ```bash
   npm install
   ```

2. Run Snyk tests:
   ```bash
   snyk test
   ```
   Or:
   ```bash
   snyk monitor
   ```

3. Run the application (optional):
   ```bash
   npm start
   ```

## Dependencies (Upgraded to Secure Versions)
- `lodash@^4.18.1` (Patched against Prototype Pollution, Command Injection, etc.)
- `express@^4.22.2` (Patched against body-parser, send, and path-to-regexp vulnerabilities)
- `minimist@^1.2.8` (Patched against Prototype Pollution)
- `axios@^1.17.0` (Patched against SSRF, DoS, and Prototype Pollution)
- `serialize-javascript@^7.0.5` (Patched against RCE)

## CI/CD Integration (GitHub Actions)

A GitHub Actions workflow is pre-configured at [.github/workflows/snyk.yml](file:///home/mohit/training/devsecops/new/.github/workflows/snyk.yml) to scan this project for vulnerabilities on every push or pull request.

To make it work:
1. Generate a Snyk API token from your Snyk Account Settings.
2. In your GitHub repository, go to **Settings** > **Secrets and variables** > **Actions**.
3. Add a new repository secret:
   - **Name**: `SNYK_TOKEN`
   - **Value**: *Your Snyk API Token*

