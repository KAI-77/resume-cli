// ui-helpers.js
const chalk = require("chalk");

// Define the color theme in one place
const theme = {
  heading: chalk.cyan.bold, // ASCII header color
  subheading: chalk.white.bold, // Role Title underneath name
  sectionTitle: chalk.green.bold, // "Skills", "Experience", etc.
  label: chalk.white, // "Email:", "Location:" icons/labels
  text: chalk.gray, // Standard text values
  bullet: chalk.green("•"), // The bullet point style
};

// Helper: Adds a newline
const newline = () => console.log("");

// Helper: Prints a formatted section title
const printSectionTitle = (title) => {
  newline();
  console.log(theme.sectionTitle(title.toUpperCase()));
};

// Helper: Prints a contact line (icon/label + value)
// Ensures consistent spacing
const printContactLine = (contactItem) => {
  const labelWithPad = `${contactItem.label}:`.padEnd(14, " ");
  console.log(`${theme.label(labelWithPad)} ${theme.text(contactItem.value)}`);
};

// Helper: Prints standard bullet points from an array
const printSimpleList = (items) => {
  items.forEach((item) => {
    console.log(` ${theme.bullet} ${theme.text(item)}`);
  });
};

module.exports = {
  theme,
  newline,
  printSectionTitle,
  printContactLine,
  printSimpleList,
};
