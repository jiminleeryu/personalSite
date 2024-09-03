import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const Resume = () => {
    return (
        <div className="resume-container">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js">
                <Viewer fileUrl="/resume.pdf" />
            </Worker>
        </div>
    );
}

export default Resume;