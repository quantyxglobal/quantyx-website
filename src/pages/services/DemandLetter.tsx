import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Download, CheckCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const DemandLetter = () => {
    const features = [
        "Professional legal drafting",
        "Medical findings integration",
        "Compelling damage presentation",
        "Supporting documentation",
        "Legal compliance assurance",
        "Persuasive narrative structure",
        "Settlement negotiation support",
        "Expert medical backing"
    ];

    return (
        <div className="min-h-screen">
            <SEO
                title="Demand Letter Services | Professional Legal Drafting - Quantyx Global"
                description="Professionally crafted demand letters that effectively communicate medical findings and damages. Expert medical support, compelling presentation, and legal compliance for insurance negotiations."
                keywords="demand letter, legal demand letter, insurance demand, settlement demand, medical demand letter, personal injury demand, legal drafting"
                canonical="https://www.quantyxg.com/services"
                ogTitle="Professional Demand Letter Services for Personal Injury Cases"
                ogDescription="Compelling demand letters backed by expert medical analysis. Strengthen your settlement negotiations."
                noindex={true}
            />
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-20 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl animate-pulse" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto text-white shadow-lg" style={{ background: 'var(--gradient-primary)' }}>
                                <Heart className="w-10 h-10" />
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                                    Demand Letter
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                                Professionally crafted demand letters that effectively communicate medical findings and damages for successful settlements.
                            </p>

                            {/* Image Placeholder */}
                            <div className="max-w-4xl mx-auto mb-8">
                                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                                    <div className="bg-muted/50 rounded-xl h-64 flex items-center justify-center">
                                        <div className="text-center">
                                            <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
                                            <p className="text-muted-foreground font-semibold">Professional Demand Letter</p>
                                            <p className="text-sm text-muted-foreground mt-2">[Placeholder for demand letter document sample]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/consultation">
                                    <Button size="xl" className="shadow-lg">
                                        Get Started
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                                <Button variant="outline" size="xl">
                                    <Download className="w-5 h-5 mr-2" />
                                    Sample Letter
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-4xl font-bold mb-6">Persuasive Demand Letters</h2>
                                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                        Our demand letter service combines legal expertise with medical knowledge
                                        to create compelling documents that effectively communicate your client's
                                        damages and support successful settlement negotiations.
                                    </p>

                                    <ul className="space-y-4">
                                        {features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Card className="border-primary/20 bg-card/80 backdrop-blur-sm shadow-xl">
                                    <CardHeader>
                                        <CardTitle className="text-2xl flex items-center">
                                            <FileText className="w-6 h-6 text-primary mr-3" />
                                            Service Details
                                        </CardTitle>
                                        <CardDescription>Professional demand letter drafting</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-4xl font-bold text-primary mb-4">$750<span className="text-lg text-muted-foreground">+</span></div>
                                        <p className="text-sm text-muted-foreground mb-6">Starting price for standard cases</p>
                                        <ul className="space-y-3 mb-6">
                                            <li className="flex items-center text-sm">
                                                <CheckCircle className="w-4 h-4 text-primary mr-3" />
                                                3-5 business day turnaround
                                            </li>
                                            <li className="flex items-center text-sm">
                                                <CheckCircle className="w-4 h-4 text-primary mr-3" />
                                                Legal and medical review
                                            </li>
                                            <li className="flex items-center text-sm">
                                                <CheckCircle className="w-4 h-4 text-primary mr-3" />
                                                Supporting documentation
                                            </li>
                                            <li className="flex items-center text-sm">
                                                <CheckCircle className="w-4 h-4 text-primary mr-3" />
                                                Revision support
                                            </li>
                                        </ul>
                                        <Link to="/consultation">
                                            <Button className="w-full">Get Custom Quote</Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready for Compelling Demand Letters?</h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Let our experts craft persuasive demand letters that maximize your settlement potential.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/consultation">
                                <Button size="xl" className="shadow-lg">
                                    Schedule Consultation
                                </Button>
                            </Link>
                            <Link to="/case-upload">
                                <Button variant="outline" size="xl">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default DemandLetter;