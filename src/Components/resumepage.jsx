import React from "react";
import jsPDF from "jspdf";
import "./ResumePage.css";

function ResumePage() {
  // Option 1: Print as PDF using browser
  const handlePrint = () => {
    window.print();
  };

  // Option 2: Generate downloadable PDF using jsPDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Prajwal Sathawane", 20, 20);
    doc.text("Email: prajwal@example.com", 20, 30);
    doc.text("Skills: React, Tailwind CSS, Node.js, MongoDB", 20, 40);
    doc.save("Prajwal_Resume.pdf");
  };

  return (
    <section className="resume-section">
      <h2>Save My Resume</h2>

      <div className="download-buttons">
        <button onClick={handlePrint} className="print-btn">
          🖨️ Print / Save as PDF (Browser)
        </button>

        <button onClick={generatePDF} className="print-btn">
          📄 Generate & Download PDF
        </button>
      </div>

      {/* Printable content */}
      <div id="print-area" style={{ display: "none" }}>
        <h1>Prajwal Sathawane</h1>
        <p>Email: prajwal@example.com</p>
        <p>Skills: React, Tailwind CSS, Node.js, MongoDB</p>
      </div>
    </section>
  );
}

export default ResumePage;
