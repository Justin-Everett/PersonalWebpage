import BackButton from "../components/BackButton";
import PDFViewer from "../components/PDFViewer";

//export pdfviewer section as a page
function FYP_Report() {
  return (
    <div>
      <PDFViewer pdfFilePath={"JUSTIN_EVERETT_FYP_FINAL_REPORT.pdf"} />
      <BackButton location={"/2048_agent"} />
    </div>
  );
}

export default FYP_Report;
