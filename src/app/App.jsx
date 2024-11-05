'use client'
import React from "react";

const PdfViewer = ({ pdfUrl }) => {
  return (
    <div className=".pdf-viewer">
      <iframe
        src={pdfUrl}
        allowFullScreen
        title="PDF Viewer"
      ></iframe>
    </div>
  );
};

const App = () => {
  return (
    <>
      <div className='fixed z-50 w-full h-16 bg-red-600'/>
      <div className="h-screen">
        <PdfViewer pdfUrl={'/preventivo_buro.pdf'} />
      </div>
    </>
  );
};

export default App;
