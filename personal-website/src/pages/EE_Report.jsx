import BackButton from "../components/BackButton";
import PDFViewer from "../components/PDFViewer";

//export pdfviewer section as a page
function FYP_Report() {
  return (
    <div>
      <PDFViewer pdfFilePath={"Transistor Heat Modelling.pdf"} />
      <BackButton location={"/extendedessay"} />
    </div>
  );
}

export default FYP_Report;
