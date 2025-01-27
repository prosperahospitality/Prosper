import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

async function generatePdf(rowCount, htmlContent, outputPath) {
    try {
        // const outputPath = 'C:\/Users\/Admin\/Downloads\/invoice.pdf'
        const filePath = path.isAbsolute(outputPath)
            ? outputPath
            : path.join(process.cwd(), outputPath);

        console.log(`Attempting to save PDF to: ${filePath}`);

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

        await page.addStyleTag({
            url: 'http://localhost:3000/css/styles.css'
          });

        await page.pdf({
            path: filePath,
            format: 'A4',
            printBackground: true,
            displayHeaderFooter: false,
            pageRanges: rowCount > 3 ? '1-2' : '1',
            landscape: false,
            margin: { top: 0, left: 0, bottom: 0, right: 0 }
        });

        await browser.close();

        if (fs.existsSync(filePath)) {
            console.log(`PDF generated successfully at: ${filePath}`);
        } else {
            console.error('PDF generation failed. File not found at:', filePath);
        }
    } catch (error) {
        console.error('Error generating PDF:', error);
        throw error;
    }
}

async function generateMultiplePdfs(pdfRequests) {
    try {
        const tasks = pdfRequests.map(({ rowCount, htmlContent, outputPath }) =>
            generatePdf(rowCount, htmlContent, outputPath)
        );

        await Promise.all(tasks);
        console.log('All PDFs generated successfully!');
    } catch (error) {
        console.error('Error generating multiple PDFs:', error);
    }
}

export default generateMultiplePdfs;
