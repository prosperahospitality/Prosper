import puppeteer from "puppeteer-core";
import chromium from "chrome-aws-lambda";

async function generatePdf(htmlContent) {
    try {
        const browser = await puppeteer.launch({
            args: chromium.args,
            executablePath: await chromium.executablePath,
            headless: chromium.headless,
        });

        const page = await browser.newPage();

        // Set the HTML content
        await page.setContent(htmlContent, { waitUntil: "networkidle0" });

        // Optional: Add external CSS
        await page.addStyleTag({
            url: "https://www.prosperaahospitality.com/css/styles.css",
        });

        // Generate the PDF as a buffer
        const pdfBuffer = await page.pdf({
            format: "A4",
            printBackground: true,
            displayHeaderFooter: false,
            pageRanges: "1",
            landscape: false,
            margin: { top: 0, left: 0, bottom: 0, right: 0 },
        });

        await browser.close();

        // Return the PDF buffer
        return pdfBuffer;
    } catch (error) {
        console.error("Error generating PDF:", error);
        throw error;
    }
}

async function generateMultiplePdfs(pdfRequests) {
    try {
        const results = await Promise.all(
            pdfRequests.map(async ({ htmlContent }) => {
                const pdfBuffer = await generatePdf(htmlContent);
                return pdfBuffer.toString("base64");
            })
        );

        console.log("All PDFs generated successfully!");
        return results;
    } catch (error) {
        console.error("Error generating multiple PDFs:", error);
        throw error;
    }
}


export default generateMultiplePdfs;