import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import * as pdfjsLib from "pdfjs-dist";

// Configure PDF.js worker - use local worker from public directory
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

interface PDFViewerProps {
  pdfUrl: string;
  onClose: () => void;
}

export const PDFViewer = ({ pdfUrl, onClose }: PDFViewerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const pdfDocRef = useRef<any>(null);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        setLoading(true);
        setError(null);

        // Load the PDF document with CORS settings
        const loadingTask = pdfjsLib.getDocument({
          url: pdfUrl,
          cMapUrl: `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/cmaps/`,
          cMapPacked: true,
        });
        
        const pdf = await loadingTask.promise;
        pdfDocRef.current = pdf;
        setTotalPages(pdf.numPages);

        // Render the first page
        await renderPage(1, pdf);
        setLoading(false);
      } catch (err: any) {
        console.error("Error loading PDF:", err);
        setError(err?.message || "Unable to load PDF document. Please try again.");
        setLoading(false);
      }
    };

    loadPDF();

    return () => {
      if (pdfDocRef.current) {
        pdfDocRef.current.destroy();
      }
    };
  }, [pdfUrl]);

  const renderPage = async (pageNum: number, pdf?: any) => {
    const pdfDoc = pdf || pdfDocRef.current;
    if (!pdfDoc || !canvasRef.current) return;

    try {
      const page = await pdfDoc.getPage(pageNum);
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (!context) return;

      // Calculate scale to fit the viewport
      const viewport = page.getViewport({ scale: 1 });
      const maxWidth = window.innerWidth * 0.8;
      const maxHeight = window.innerHeight * 0.8;
      const scale = Math.min(maxWidth / viewport.width, maxHeight / viewport.height, 2);

      const scaledViewport = page.getViewport({ scale });

      canvas.width = scaledViewport.width;
      canvas.height = scaledViewport.height;

      // Render the page
      await page.render({
        canvasContext: context,
        viewport: scaledViewport,
      }).promise;
    } catch (err) {
      console.error("Error rendering page:", err);
      setError("Unable to render page");
    }
  };

  const goToNextPage = async () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      await renderPage(nextPage);
    }
  };

  const goToPrevPage = async () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      await renderPage(prevPage);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full flex flex-col items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close PDF viewer"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        {/* PDF Canvas */}
        <div className="flex-1 flex items-center justify-center overflow-auto">
          {loading && (
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p>Loading document...</p>
            </div>
          )}

          {error && (
            <div className="text-white text-center max-w-md">
              <p className="text-red-400 mb-4">{error}</p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          )}

          {!loading && !error && (
            <canvas
              ref={canvasRef}
              className="max-w-full max-h-full shadow-2xl"
              style={{ display: "block" }}
            />
          )}
        </div>

        {/* Navigation Controls */}
        {!loading && !error && totalPages > 1 && (
          <div className="mt-4 flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-lg px-6 py-3">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <span className="text-white font-medium">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
