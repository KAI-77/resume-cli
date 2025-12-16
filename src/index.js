#!/usr/bin/env node
// ^ This "shebang" line is crucial. It tells the system to run this file using Node.js.

const boxen = require("boxen");
const chalk = require("chalk");
const figlet = require("figlet");

const data = require("./resume-data");
const ui = require("./ui-helpers");

/**
 * The main function that orchestrates the rendering
 */
const renderResume = () => {
  console.info("Script started");
  // --- 1. Generate ASCII Header ---
  const headerText = figlet.textSync(data.header.name, {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default",
  });

  console.log(ui.theme.heading(headerText));

  // We capture console output temporarily to put it inside the box
  let contentBuffer = "";

  // Overwrite console.log temporarily to capture output to our buffer
  const originalConsoleLog = console.log;
  console.log = (...args) => {
    contentBuffer += args.join(" ") + "\n";
  };

  // Role / Subheading
  console.log(chalk.white.bold.cyan(data.header.title));
  ui.newline();

  // Contact Info
  Object.values(data.contact).forEach((item) => ui.printContactLine(item));

  // Skills Section
  ui.printSectionTitle("Skills");
  ui.printSimpleList(data.skills);

  // Experience Section
  ui.printSectionTitle("Experience");
  data.experience.forEach((job) => {
    console.log(` ${ui.theme.bullet} ${chalk.white.bold(job.role)}`);
    // Render job bullet points with slightly more indentation
    job.points.forEach((point) => {
      console.log(`   - ${ui.theme.text(point)}`);
    });
  });

  // Projects Section
  ui.printSectionTitle("Projects");
  data.projects.forEach((project) => {
    console.log(` ${ui.theme.bullet} ${chalk.white.bold(project.name)}`);
    console.log(`   ${ui.theme.text(project.description)}`);
  });

  // Education Section
  ui.printSectionTitle("Education");
  console.log(` ${ui.theme.bullet} ${chalk.white.bold(data.education.degree)}`);
  console.log(`   ${ui.theme.text(data.education.details)}`);

  // Footer Contact Section
  if (data.footerContact) {
    ui.printSectionTitle("Contact");
    if (data.footerContact.email)
      console.log(` ✉️  Email:  ${ui.theme.text(data.footerContact.email)}`);
  }

  // Restore original console.log
  console.log = originalConsoleLog;

  const boxOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#101010",
  };

  console.log(boxen(contentBuffer, boxOptions));
};

// Run the function
renderResume();
