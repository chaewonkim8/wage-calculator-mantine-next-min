// PrintPDF.tsx
import React from 'react';
import jsPDF from 'jspdf';
import { Button } from '@mantine/core';
// import and initialize ReactGA for user event tracking
import ReactGA from "react-ga4";
ReactGA.initialize("G-1LE47Z6NV9");

interface PrintPDFProps {
  yearsOfService: number;
  annualLeaves: number;
  startDate: Date | null;
  endDate: Date | null;
}

const PrintPDF: React.FC<PrintPDFProps> = ({ annualLeaves, yearsOfService, startDate, endDate }) => {
  const printPDF = () => {
    const doc = new jsPDF();
    const text = `
      Annual Leaves = ${annualLeaves} days

      Years of Service = ${yearsOfService.toFixed(2)} years
      Start Working Date = ${startDate ? startDate.toLocaleDateString() : null}
      End Working Date = ${endDate ? endDate.toLocaleDateString() : null}
    `;
    doc.text(text, 10, 10);
    doc.save('Calculations_AnnualLeaves.pdf');
     //use ReactGA to track the user event
    ReactGA.event({
      category: "annual_leaves",
      action: "click_save_pdf",
    });
  };

  return (
        <Button 
        fullWidth
        m="auto"
        size="md"
        radius="md"
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan' }}
        onClick={printPDF}
        >
          Save the result as a PDF file
        </Button>
  );
};

export default PrintPDF;
