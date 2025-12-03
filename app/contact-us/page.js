import ContactSection from "@/components/ContactSection";
import '@/styles/contact-us.scss';
import AndamanMap from "@/components/AndamanMap";
export default function ContactPage() {
    return (
        <>
            <section className="contact-hero d-flex align-items-center justify-content-center">
                <div className="text-center hero-content">
                    <h1 className="hero-title">Contact Us</h1>

                    <p className="breadcrumb-text">
                        Home <span>/</span> Pages <span>/</span> <span className="active">Contact</span>
                    </p>
                </div>
            </section>
            <ContactSection />
            <AndamanMap/>
        </>

    );
}
