import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Memoize PDF fonts to prevent reloading
const pdfFonts = new Map()

export async function generatePDF(elementId: string, filename: string = "document.pdf") {
  try {
    const element = document.getElementById(elementId)
    if (!element) {
      console.error(`Element with id "${elementId}" not found`)
      return
    }
    
    // Performance optimization for html2canvas
    const scale = window.devicePixelRatio || 1
    const options = {
      scale,
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: null,
    }

    // Create PDF with professional business format
    const pdf = new jsPDF('p', 'pt', 'letter')
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    const margin = 50
    let currentY = margin

    // Add header
    const addHeader = () => {
      // Company logo area - circular purple background with lightning
      pdf.setFillColor(128, 0, 128); // Purple for ZapWeb.App
      pdf.circle(margin + 20, currentY + 20, 18, 'F');
      
      // Add "Z" text as logo
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(18);
      pdf.setFont("helvetica", "bold");
      pdf.text("Z", margin + 15, currentY + 25);
      
      // Company name and title - exact format from template
      pdf.setTextColor(70, 130, 180); // Steel blue like in template
      pdf.setFontSize(18);
      pdf.setFont("helvetica", "bold");
      pdf.text("ZapWeb.App – Web App Development", margin + 60, currentY + 18);
      pdf.text("Proposal", margin + 60, currentY + 36);
      
      currentY += 70;
      
      // Horizontal line
      pdf.setDrawColor(0, 0, 0);
      pdf.setLineWidth(1);
      pdf.line(margin, currentY, pageWidth - margin, currentY);
      currentY += 20;
      
      // Contact information
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "bold");
      pdf.text("ZAPWEB.APP", margin, currentY);
      currentY += 15;
      
      pdf.setFont("helvetica", "normal");
      pdf.text("Phone: 0915-891-8530", margin, currentY);
      currentY += 12;
      pdf.text("Website: www.zapweb.app", margin, currentY);
      currentY += 12;
      pdf.text("Motto: \"Zap into action, build fast, Win BIG\"", margin, currentY);
      currentY += 25;
      
      // Proposal details
      pdf.setFont("helvetica", "bold");
      pdf.text("Web Application Development Proposal", margin, currentY);
      currentY += 15;
      
      pdf.setFont("helvetica", "normal");
      pdf.text("Prepared for: [Client Name / Business Name]", margin, currentY);
      currentY += 12;
      pdf.text("Prepared by: ZapWeb.App", margin, currentY);
      currentY += 12;
      pdf.text("Date: [Insert Date]", margin, currentY);
      currentY += 30;
      
      // Another horizontal line
      pdf.line(margin, currentY, pageWidth - margin, currentY);
      currentY += 25;
    };

    // Add section header
    const addSectionHeader = (number: string, title: string) => {
      if (currentY > pageHeight - 100) {
        pdf.addPage();
        currentY = margin + 20;
      }
      
      pdf.setFontSize(14);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(70, 130, 180); // Steel blue like template
      pdf.text(`${number}. ${title}`, margin, currentY);
      currentY += 25;
      
      pdf.setTextColor(0, 0, 0);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(11);
    };

    // Add body text
    const addBodyText = (text: string, isIndented: boolean = false) => {
      const lines = pdf.splitTextToSize(text, pageWidth - margin * 2 - (isIndented ? 20 : 0));
      const startX = margin + (isIndented ? 20 : 0);
      
      lines.forEach((line: string) => {
        if (currentY > pageHeight - 50) {
          pdf.addPage();
          currentY = margin + 20;
        }
        pdf.text(line, startX, currentY);
        currentY += 14;
      });
      currentY += 5;
    };

    // Add checkbox item
    const addCheckboxItem = (text: string) => {
      if (currentY > pageHeight - 50) {
        pdf.addPage();
        currentY = margin + 20;
      }
      
      // Draw checkbox
      pdf.setDrawColor(0, 0, 0);
      pdf.setLineWidth(0.5);
      pdf.rect(margin, currentY - 8, 8, 8);
      
      // Add checkmark
      pdf.setDrawColor(0, 150, 0);
      pdf.setLineWidth(1.5);
      pdf.line(margin + 2, currentY - 4, margin + 4, currentY - 2);
      pdf.line(margin + 4, currentY - 2, margin + 6, currentY - 6);
      
      // Add text
      pdf.setDrawColor(0, 0, 0);
      pdf.setTextColor(0, 0, 0);
      pdf.text(text, margin + 15, currentY - 2);
      currentY += 16;
    };

    // Add bullet point
    const addBulletPoint = (text: string) => {
      if (currentY > pageHeight - 50) {
        pdf.addPage();
        currentY = margin + 20;
      }
      
      pdf.text("*", margin + 10, currentY);
      pdf.text(text, margin + 25, currentY);
      currentY += 14;
    };

    // Add pricing table
    const addPricingTable = () => {
      if (currentY > pageHeight - 200) {
        pdf.addPage();
        currentY = margin + 20;
      }
      
      const tableY = currentY;
      const colWidths = [120, 280, 130];
      const rowHeight = 30;
      
      // Table headers with professional styling
      pdf.setFillColor(230, 230, 230);
      pdf.rect(margin, tableY, colWidths[0] + colWidths[1] + colWidths[2], rowHeight, 'F');
      
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(11);
      pdf.text("Package", margin + 8, tableY + 18);
      pdf.text("Features", margin + colWidths[0] + 8, tableY + 18);
      pdf.text("Estimated Cost (PHP)", margin + colWidths[0] + colWidths[1] + 8, tableY + 18);
      
      // Table borders
      pdf.setDrawColor(0, 0, 0);
      pdf.setLineWidth(0.5);
      
      // Draw table structure
      const tableData = [
        ["Basic", "Simple web app with core modules", "30,000 - 50,000"],
        ["Standard", "Includes inventory, purchasing, invoicing, reporting", "60,000 - 100,000"],
        ["Advanced", "Includes manufacturing, CRM, accounting integration, APIs", "110,000 - 200,000+"]
      ];
      
      let rowY = tableY + rowHeight;
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      
      tableData.forEach((row, index) => {
        // Alternate row colors for better readability
        if (index % 2 === 1) {
          pdf.setFillColor(248, 248, 248);
          pdf.rect(margin, rowY, colWidths[0] + colWidths[1] + colWidths[2], rowHeight, 'F');
        }
        
        // Package name in bold
        pdf.setFont("helvetica", "bold");
        pdf.text(row[0], margin + 8, rowY + 18);
        
        // Features text (normal weight)
        pdf.setFont("helvetica", "normal");
        const featureLines = pdf.splitTextToSize(row[1], colWidths[1] - 16);
        featureLines.forEach((line: string, lineIndex: number) => {
          pdf.text(line, margin + colWidths[0] + 8, rowY + 15 + (lineIndex * 10));
        });
        
        // Cost in bold
        pdf.setFont("helvetica", "bold");
        pdf.text(row[2], margin + colWidths[0] + colWidths[1] + 8, rowY + 18);
        rowY += rowHeight;
      });
      
      // Draw table borders
      for (let i = 0; i <= tableData.length + 1; i++) {
        pdf.line(margin, tableY + (i * rowHeight), margin + colWidths[0] + colWidths[1] + colWidths[2], tableY + (i * rowHeight));
      }
      
      let x = margin;
      for (let i = 0; i <= colWidths.length; i++) {
        pdf.line(x, tableY, x, rowY);
        if (i < colWidths.length) x += colWidths[i];
      }
      
      currentY = rowY + 20;
    };

    // Generate the professional PDF
    addHeader();
    
    addSectionHeader("1", "INTRODUCTION");
    addBodyText("In today's dynamic and competitive environment, digital solutions are critical to streamlining operations, enhancing customer experience, and enabling business growth. At ZapWeb.App, we specialize in crafting customized web applications that align with your business goals and workflows.");
    addBodyText("We are pleased to present this proposal for the design, development, and implementation of a web application tailored to your requirements.");
    
    addSectionHeader("2", "PROJECT SCOPE");
    addCheckboxItem("Design, development, and deployment of a responsive web application");
    addCheckboxItem("User access control and authentication");
    addCheckboxItem("Integration with your existing workflows and third-party systems (as needed)");
    addCheckboxItem("User training and post-deployment support");
    
    addSectionHeader("3", "PROPOSED SYSTEM FEATURES");
    
    pdf.setFont("helvetica", "bold");
    pdf.text("Basic Package (For Micro/Small Businesses)", margin, currentY);
    currentY += 20;
    pdf.setFont("helvetica", "normal");
    
    addBulletPoint("Dashboard with essential metrics");
    addBulletPoint("User registration & management");
    addBulletPoint("Product/service catalog management");
    addBulletPoint("Simple sales/orders module");
    currentY += 15;
    
    addSectionHeader("5", "PRICING TIERS");
    addPricingTable();
    
    // Add Monthly Hosting section matching template
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(70, 130, 180);
    pdf.text("Monthly Hosting & Support Fees", margin, currentY);
    currentY += 20;
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(0, 0, 0);
    
    addBulletPoint("Basic & Standard: Php 500 / month");
    addBulletPoint("Advanced: Php 1,000 - 5,000 / month (depending on server resources and support scope)");
    currentY += 15;
    
    addSectionHeader("6", "PAYMENT TERMS");
    addBulletPoint("30% Down payment upon project commencement");
    addBulletPoint("30% Midway milestone payment (after initial development)");
    addBulletPoint("40% Upon project completion and deployment");
    addBodyText("Additional travel, accommodation, and onsite visit costs apply if required outside Metro Davao.", true);
    
    addSectionHeader("7", "AFTER SUPPORT");
    addBulletPoint("Online / Call Support: FREE (within agreed SLA)");
    addBulletPoint("Onsite Visit: Php 5,000 + travel & accommodation (if required)");
    
    addSectionHeader("8", "ADD-ONS & UPGRADE TIERS");
    addBulletPoint("SMS/Email Notifications Integration: +Php 10,000 - 30,000");
    addBulletPoint("CRM Module Upgrade: +Php 30,000 - 60,000");
    addBulletPoint("Accounting System Integration: +Php 50,000 - 120,000");
    addBulletPoint("AI Analytics / Chatbot Integration: +Php 30,000 - 100,000");
    addBulletPoint("API Integrations (e.g. QuickBooks, ERPNext): +Php 50,000 - 150,000");
    addBulletPoint("Additional Branch/Location Rollout: +Php 3,500 / branch");
    
    // Add professional footer
    if (currentY > pageHeight - 80) {
      pdf.addPage();
      currentY = pageHeight - 60;
    } else {
      currentY = pageHeight - 60;
    }
    
    pdf.setDrawColor(0, 0, 0);
    pdf.line(margin, currentY, pageWidth - margin, currentY);
    currentY += 15;
    
    pdf.setFontSize(9);
    pdf.setFont("helvetica", "italic");
    pdf.setTextColor(100, 100, 100);
    pdf.text("ZapWeb.App – Professional Web Application Development Services", margin, currentY);
    pdf.text("Contact: 0915-891-8530 | www.zapweb.app", pageWidth - margin - 200, currentY);
    
    // Save the PDF
    pdf.save(filename);
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}
