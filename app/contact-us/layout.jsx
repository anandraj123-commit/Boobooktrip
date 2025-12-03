export const metadata = {
    title: "Contact Us - Apurva Software Solutions",
    description: "Get in touch with us for enquiries, projects, or support.",
  };
  
  export default function ContactLayout({ children }) {
    return (
      <section style={{ padding: "40px 0", minHeight: "100vh", background: "#f8fafc" }}>
        {children}
      </section>
    );
  }  