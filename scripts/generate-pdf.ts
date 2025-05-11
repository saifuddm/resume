const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");
const express = require("express");
const { createServer } = require("http");

const outputDir = path.join(__dirname, "../pdf");
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Format date as YYYY-MM-DD
const today = new Date().toISOString().split('T')[0];

// Helper function to wait
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function generatePDF(page: any, isDarkMode: boolean) {
    const mode = isDarkMode ? 'dark' : 'light';
    const resumePdfPath = path.join(outputDir, `MurtazaSaifuddin_Resume_${today}_${mode}.pdf`);

    // Set dark mode by adding/removing the dark class
    await page.evaluate((isDark: boolean) => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, isDarkMode);

    // Wait a bit for styles to apply
    await wait(100);

    await page.pdf({
        path: resumePdfPath,
        format: "letter",
        printBackground: true,
    });

    console.log(`${mode} mode PDF saved to:`, resumePdfPath);
}

(async () => {
    console.log("Starting local server...");
    const app = express();
    const server = createServer(app);

    // Serve static files from the dist directory
    app.use(express.static(path.join(__dirname, "../dist")));

    // Start the server
    const port = 3000;
    await new Promise<void>((resolve) => {
        server.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
            resolve();
        });
    });

    console.log("Generating PDFs...");
    const browser = await puppeteer.launch({
        headless: "new",
        args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    });
    const page = await browser.newPage();

    // Use the local server URL instead of file:// protocol
    const resumeUrl = `http://localhost:${port}`;
    console.log("Opening resume URL:", resumeUrl);
    await page.goto(resumeUrl, { waitUntil: "networkidle0" });

    // Generate both dark and light mode PDFs
    await generatePDF(page, true);  // Dark mode
    await generatePDF(page, false); // Light mode

    await browser.close();

    // Shutdown the server
    server.close(() => {
        console.log("Server closed");
    });
})();
