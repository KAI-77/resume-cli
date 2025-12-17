# 💻 Kai's CLI Resume (`kai-resume`)

A creative, terminal-based resume built with **Node.js**, demonstrating proficiency in command-line application development, package management, and JavaScript.

[![npm version](https://img.shields.io/npm/v/kai-resume)](https://www.npmjs.com/package/kai-resume)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

---

## 📚 Table of Contents

- [🚀 Getting Started](#-getting-started)
- [✨ Usage (Run the Resume)](#-usage-run-the-resume)
- [🛠️ Development & Contribution](#-development--contribution)
- [📁 Project Architecture](#-project-architecture)
- [🔗 Connect with Me](#-connect-with-me)

---

## 🚀 Getting Started

This package is designed to be run directly via `npx` (Node Package Execute), which downloads and executes the package without installing it globally.

### Prerequisites

- **Node.js:** Must be installed (version 12 or higher recommended).
- **Package Manager:** Any of `npm`, `yarn`, or `pnpm`.

## ✨ Usage (Run the Resume)

You do not need to clone or install this package. Simply run the command using your preferred Node package manager:

| Package Manager       | Command               |
| :-------------------- | :-------------------- |
| **NPX (Recommended)** | `npx kai-resume`      |
| **Yarn**              | `yarn dlx kai-resume` |
| **PNPM**              | `pnpm dlx kai-resume` |

_(Note: `npm install -g kai-resume` is also possible, but not recommended for this type of ephemeral tool.)_

## 🛠️ Development & Contribution

If you want to view the source code, fork the project, or contribute, follow these steps:

### Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/KAI-77/resume-cli.git](https://github.com/KAI-77/resume-cli.git)
    cd resume-cli
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Local Testing

To test the resume display locally while developing, use the `node` command directly:

```bash
node src/index.js

## ✨ Technologies Used

* **Node.js:** Core runtime environment.
* **Chalk:** For terminal text styling and colors.
* **Boxen:** For creating the professional box outline.
* **Figlet:** For generating the ASCII art header.

## 📁 Project Architecture

This project is built following **SOLID** and **DRY** (Don't Repeat Yourself) principles to ensure clean separation of concerns and maintainability.

* `src/index.js`: The main entry point and rendering orchestration (Controller). It imports the data and UI helpers to build the final output.
* `src/resume-data.js`: The **Data Layer** (Model). Holds all personal and professional information.
* `src/ui-helpers.js`: The **Presentation Layer** (View). Contains reusable functions for styling, spacing, and printing standardized resume sections.

## 💡 Future Enhancements (To-Do)

* [ ] Add an interactive menu for section navigation (using `inquirer`).
* [ ] Implement a feature to export contact information as a vCard (`.vcf` file).

## 🔗 Connect with Me

* **GitHub Repository:** [https://github.com/KAI-77](https://github.com/KAI-77)

```
