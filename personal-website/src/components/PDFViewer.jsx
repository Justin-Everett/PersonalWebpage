import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useState } from "react";

//explicitly tell react where to find worker script
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

function PDFViewer() {
  const [numPages, setNumPages] = useState(null); //keep track of the number of pages in the pdf, provide a method to update number of pages

  const [width, setWidth] = useState(1200);

  //update the state to hold the number of pages in pdf
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const pageBreakStyle = {
    border: "none",
    borderTop: "2px #aaa",
    margin: "0.5rem 0",
    width: "80%",
  };

  //return pdf component
  return (
    <Document
      file={import.meta.env.BASE_URL + "CV.pdf"}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {numPages &&
        Array.from(new Array(numPages), (el, index) => (
          <div key={`page_container_${index}`}>
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={width}
              renderTextLayer={true}
            />
            {index < numPages - 1 && <hr style={pageBreakStyle} />}
          </div>
        ))}
    </Document>
  );
}

export default PDFViewer;
