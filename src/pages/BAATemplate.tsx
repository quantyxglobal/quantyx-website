"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { FileText, Shield, X, ChevronLeft, ChevronRight } from "lucide-react";
import * as pdfjsLib from 'pdfjs-dist';

// Set up the worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const BAATemplate = () => {
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const openPDF = async (pdfUrl: string) => {
    setSelectedPDF(pdfUrl);
    setCurrentPage(1);
    setLoading(true);
    try {
      const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
      setPdfDoc(pdf);
      setTotalPages(pdf.numPages);
    } catch (error) {
      console.error('Error loading PDF:', error);
    }
    setLoading(false);
  };

  const closePDF = () => {
    setSelectedPDF(null);
    setPdfDoc(null);
    setCurrentPage(1);
    setTotalPages(0);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Business Associate Agreement (BAA) Template | Quantyx Global"
        description="View our HIPAA-compliant Business Associate Agreement template, Non-Disclosure Agreement, and Service Level Agreement for medico-legal services."
        keywords="BAA template, business associate agreement, HIPAA compliance, NDA, SLA, medico-legal agreements"
        canonical="https://www.quantyxg.com/baa-template"
        ogTitle="Business Associate Agreement Template | Quantyx Global"
        ogDescription="View our HIPAA-compliant legal agreements for medico-legal services"
        noindex={false}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white shadow-lg mb-6" style={{ background: "var(--gradient-primary)" }}>
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
                Legal Agreements & Templates
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              View our Business Associate Agreement (BAA), Non-Disclosure Agreement (NDA), and Service Level Agreement (SLA) templates. These documents are available for review only.
            </p>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* BAA Document */}
              <div className="rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-sm shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: "var(--gradient-primary)" }}>
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">Business Associate Agreement (BAA)</h2>
                      <p className="text-muted-foreground mb-4">
                        Our HIPAA-compliant Business Associate Agreement template for US law firms. This agreement is required before any protected health information (PHI) is shared with us.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-xl p-6 border border-border">
                    <div className="bg-white rounded-lg shadow-inner p-8 text-center">
                      <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Business Associate Agreement</h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        Click below to view the BAA document
                      </p>
                      <button
                        onClick={() => openPDF("/Business%20Associate%20Agreement%20(BAA).pdf")}
                        className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        View BAA Document
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* NDA Document */}
              <div className="rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-sm shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: "var(--gradient-accent)" }}>
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">Non-Disclosure Agreement (NDA)</h2>
                      <p className="text-muted-foreground mb-4">
                        Our standard Non-Disclosure Agreement signed by all staff members before accessing any client records. This ensures confidentiality and data protection.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-xl p-6 border border-border">
                    <div className="bg-white rounded-lg shadow-inner p-8 text-center">
                      <FileText className="w-16 h-16 text-accent mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Non-Disclosure Agreement</h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        Click below to view the NDA document
                      </p>
                      <button
                        onClick={() => openPDF("/Non-Disclosure%20Agreement%20(NDA).pdf")}
                        className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                      >
                        View NDA Document
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLA Document */}
              <div className="rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-sm shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: "var(--gradient-primary)" }}>
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">Service Level Agreement (SLA)</h2>
                      <p className="text-muted-foreground mb-4">
                        Our Service Level Agreement outlining turnaround times, quality standards, revision policies, and service commitments for all medico-legal services.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-xl p-6 border border-border">
                    <div className="bg-white rounded-lg shadow-inner p-8 text-center">
                      <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Service Level Agreement</h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        Click below to view the SLA document
                      </p>
                      <button
                        onClick={() => openPDF("/Service%20Level%20Agreement%20(SLA).pdf")}
                        className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        View SLA Document
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 text-white" style={{ background: "var(--gradient-primary)" }}>
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Need a Signed Agreement?
              </h2>
              <p className="text-white/80 mb-6">
                Contact us to receive executed copies of our BAA, NDA, or SLA for your records.
              </p>
              <a
                href="mailto:contact@quantyxg.com?subject=Request for Signed Agreements"
                className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-muted/40 border-t border-border">
          <div className="container mx-auto px-6">
            <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              These documents are provided for informational purposes only. Actual agreements may vary based on specific client requirements and jurisdictional needs. For executed agreements or customized terms, please contact Quantyx Global directly.
            </p>
          </div>
        </section>

        {/* PDF Viewer Modal */}
        {selectedPDF && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closePDF}
          >
            <div 
              className="relative w-full h-full max-w-7xl max-h-[95vh] m-4 bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Close Button and Page Navigation */}
              <div className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <button
                    onClick={goToPreviousPage}
                    disabled={currentPage <= 1}
                    className="p-2 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-sm font-medium">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={goToNextPage}
                    disabled={currentPage >= totalPages}
                    className="p-2 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
                    aria-label="Next page"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                <button
                  onClick={closePDF}
                  className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close PDF viewer"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* PDF Content */}
              <div className="flex-1 overflow-auto flex items-center justify-center bg-gray-50 p-4">
                {loading ? (
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading PDF...</p>
                  </div>
                ) : pdfDoc ? (
                  <PDFPage pdfDoc={pdfDoc} pageNumber={currentPage} />
                ) : (
                  <div className="text-center">
                    <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Unable to load PDF</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
};

// PDF Page Renderer Component
function PDFPage({ pdfDoc, pageNumber }: { pdfDoc: any; pageNumber: number }) {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const renderPage = async () => {
      if (!pdfDoc) return;
      
      const page = await pdfDoc.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 1.5 });
      
      const canvasElement = document.createElement('canvas');
      const context = canvasElement.getContext('2d');
      
      canvasElement.width = viewport.width;
      canvasElement.height = viewport.height;
      
      await page.render({
        canvasContext: context!,
        viewport: viewport,
      }).promise;
      
      setCanvas(canvasElement);
    };

    renderPage();
  }, [pdfDoc, pageNumber]);

  if (!canvas) {
    return <div className="text-muted-foreground">Rendering page...</div>;
  }

  return (
    <img
      src={canvas.toDataURL()}
      alt={`PDF page ${pageNumber}`}
      className="max-w-full max-h-full object-contain"
    />
  );
}

export default BAATemplate;
