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

## Vulnerable Dependencies Included
- `lodash@4.17.4`: Prototype Pollution (CVE-2018-16487, CVE-2019-10744)
- `express@4.16.0`: Multiple vulnerabilities (CVE-2018-3717, CVE-2022-24999, etc.)
- `minimist@1.2.0`: Prototype Pollution (CVE-2020-7598)
- `axios@0.18.0`: Server-Side Request Forgery (SSRF) (CVE-2020-28168)
- `serialize-javascript@2.1.1`: Remote Code Execution (RCE) (CVE-2020-7660)

## CI/CD Integration (GitHub Actions)

A GitHub Actions workflow is pre-configured at [.github/workflows/snyk.yml](file:///home/mohit/training/devsecops/new/.github/workflows/snyk.yml) to scan this project for vulnerabilities on every push or pull request.

To make it work:
1. Generate a Snyk API token from your Snyk Account Settings.
2. In your GitHub repository, go to **Settings** > **Secrets and variables** > **Actions**.
3. Add a new repository secret:
   - **Name**: `SNYK_TOKEN`
   - **Value**: *Your Snyk API Token*

