import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useState } from "react";

//explicitly tell react where to find worker script
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

function PDFViewer() {
  const [numPages, setNumPages] = useState(null); //keep track of the number of pages in the pdf, provide a method to update number of pages

  //update the state to hold the number of pages in pdf
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  //return pdf component
  return (
    <Document file="/CV.pdf" onLoadSuccess={onDocumentLoadSuccess}>
      {numPages &&
        Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderTextLayer={false} //TextLayer rendering leads to a giant whitespace under each page, so it is disabled
          />
        ))}
    </Document>
  );
}

export default PDFViewer;
