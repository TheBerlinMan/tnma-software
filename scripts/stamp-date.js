const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "index.html");
const html = fs.readFileSync(filePath, "utf8");

const now = new Date();
const iso = now.toISOString().slice(0, 10);
const formatted = now.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

const stamped = html.replace(
  /<time datetime="[^"]*">[^<]*<\/time>/,
  `<time datetime="${iso}">${formatted}</time>`
);

fs.writeFileSync(filePath, stamped);
console.log(`Stamped last-updated date: ${formatted}`);
