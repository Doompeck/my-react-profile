import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";
import myResume from "../../assets/images/Web-dev-resume-2022.pdf";

const styles = {
    spacer: {
        marginTop: 30
    }

}

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="Contact" style={styles.spacer}>
    <Grid container direction="column" alignItems="center">
      <h3>My Resume</h3>
      <Button href={myResume} download>Download</Button>
      {numPages > 1 && (
        <Grid container justifyContent="center">
          <Button
            onClick={() => {
              if (pageNumber > 1) {
                setPageNumber(pageNumber - 1);
              }
            }}
          >
            Previous
          </Button>

          <p>
            Page {pageNumber} of {numPages}
          </p>
          <Button
            onClick={() => {
              if (pageNumber < numPages) {
                setPageNumber(pageNumber + 1);
              }
            }}
          >
            Next
          </Button>
        </Grid>
      )}
      <Document file={myResume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>

    </Grid>
    </div>
  );
}
