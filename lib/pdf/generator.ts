'use client';

/**
 * Generate a PDF from resume content using the browser's print-to-PDF functionality
 * This is a simple, client-side solution that works across all browsers
 */
export async function generatePDF(content: string, filename: string): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      // Create a new window for the printable content
      const printWindow = window.open('', '_blank');
      
      if (!printWindow) {
        reject(new Error('Failed to open print window'));
        return;
      }

      // Build the HTML content for printing
      const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${filename}</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              background: white;
              padding: 0;
            }

            .container {
              max-width: 8.5in;
              height: 11in;
              margin: 0 auto;
              padding: 0.5in;
              background: white;
              color: #000;
            }

            h1, h2, h3, h4, h5, h6 {
              margin-top: 1em;
              margin-bottom: 0.5em;
              font-weight: 600;
              color: #000;
            }

            h1 {
              font-size: 24px;
              margin-bottom: 0.3em;
            }

            h2 {
              font-size: 16px;
              border-bottom: 2px solid #333;
              padding-bottom: 0.3em;
            }

            h3 {
              font-size: 14px;
            }

            p {
              margin-bottom: 0.5em;
            }

            ul {
              margin-left: 1.5em;
              margin-bottom: 0.5em;
            }

            li {
              margin-bottom: 0.3em;
            }

            strong {
              font-weight: 600;
            }

            .section {
              margin-bottom: 1em;
            }

            @media print {
              body {
                margin: 0;
                padding: 0;
              }
              .container {
                margin: 0;
                padding: 0.5in;
                max-width: 100%;
                height: auto;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            ${content
              .split('\n')
              .map((line) => {
                const trimmed = line.trim();
                if (!trimmed) return '<br/>';
                
                // Simple markdown-like formatting
                if (trimmed.startsWith('# ')) {
                  return `<h1>${trimmed.substring(2)}</h1>`;
                } else if (trimmed.startsWith('## ')) {
                  return `<h2>${trimmed.substring(3)}</h2>`;
                } else if (trimmed.startsWith('### ')) {
                  return `<h3>${trimmed.substring(4)}</h3>`;
                } else if (trimmed.startsWith('- ')) {
                  return `<li>${trimmed.substring(2)}</li>`;
                } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                  return `<p><strong>${trimmed.substring(2, trimmed.length - 2)}</strong></p>`;
                }
                
                return `<p>${trimmed}</p>`;
              })
              .join('\n')}
          </div>
        </body>
        </html>
      `;

      printWindow.document.write(htmlContent);
      printWindow.document.close();

      // Wait for content to load then trigger print
      printWindow.onload = () => {
        // Use setTimeout to ensure rendering is complete
        setTimeout(() => {
          printWindow.print();
          
          // Close the window after a short delay to allow printing to complete
          setTimeout(() => {
            printWindow.close();
            resolve();
          }, 1000);
        }, 100);
      };

      // Handle errors
      printWindow.onerror = () => {
        reject(new Error('Failed to generate PDF'));
      };

      // Set a timeout in case the window doesn't load
      setTimeout(() => {
        if (!printWindow.closed) {
          printWindow.close();
          reject(new Error('PDF generation timed out'));
        }
      }, 5000);
    } catch (error) {
      reject(error);
    }
  });
}
