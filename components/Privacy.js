export default function PrivacyPolicy() {
    return (
        <>
            {/* Banner Section */}
            <section
                className="privacy-banner d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "300px",
                    color: "#fff",
                }}
            >
                <h1 className="fw-bold display-5 text-shadow">Privacy Policy</h1>
            </section>

            {/* Content Section */}
            <section className="container py-5">
                <h2 className="fw-bold mb-3">Boobooktrip Privacy Policy</h2>
                <p className="text-muted">
                    Boobooktrip is committed to ensuring that all your information is
                    protected. If we ask you to provide certain details by which you can
                    be identified while using our official website www.Boobook.in,
                    then you can be assured that your details will only be used as per our
                    privacy statement.
                </p>

                <p className="text-muted">
                    Boobooktrip may change its privacy policy from time to time by
                    updating this page. You are requested to check it regularly to ensure
                    that you are aware of the changes.
                </p>

                <hr className="my-4" />

                <h4 className="fw-semibold">Information We Collect</h4>
                <p className="text-muted">
                    We may collect your name, contact information, email address, or other
                    details relevant to customer surveys or offers.
                </p>

                <h4 className="fw-semibold mt-4">How We Use Your Information</h4>
                <p className="text-muted">
                    We collect your information to understand your needs and provide a
                    better service, including internal record keeping and improving our
                    products and services.
                </p>

                <h4 className="fw-semibold mt-4">Security</h4>
                <p className="text-muted">
                    We are committed to ensuring that your information is secure. In order
                    to prevent unauthorized access, we have put in place suitable physical,
                    electronic, and managerial procedures.
                </p>

                <h4 className="fw-semibold mt-4">Links to Other Websites</h4>
                <p className="text-muted">
                    Our website may contain links to other sites. Once you click these
                    links, we do not have any control over that external website.
                </p>

                <h4 className="fw-semibold mt-4">Contact Us</h4>
                <p className="text-muted">
                    If you have any questions regarding this privacy policy, feel free to
                    contact us at support@boobook.in.
                </p>

                <div className="privacy-section">
                    <h2 className="section-title">What We Collect</h2>
                    <p className="text-muted">
                        Boobooktrip may collect certain information including the following:
                    </p>

                    <ul className="privacy-list">
                        <li><i className="fas fa-chevron-right"></i> Your Name</li>
                        <li><i className="fas fa-chevron-right"></i> Contact Details such as Contact Number and Email ID</li>
                        <li><i className="fas fa-chevron-right"></i> Demographical Information like Postcode, Interests, and Preferences</li>
                        <li><i className="fas fa-chevron-right"></i> Other Information Needed for Customer Surveys</li>
                        <li><i className="fas fa-chevron-right"></i> Public Profile</li>
                    </ul>

                    <h2 className="section-title mt-5">What We Do with the Details Collected</h2>
                    <p className="text-muted">
                        We need these details to comprehend your precise needs and ensuring better services along with the following reasons:
                    </p>

                    <ul className="privacy-list">
                        <li><i className="fas fa-chevron-right"></i> Internal record maintenance</li>
                        <li><i className="fas fa-chevron-right"></i> Improving the quality of our services and products</li>
                        <li><i className="fas fa-chevron-right"></i> To share details about our new services, products, special deals, etc.</li>
                        <li><i className="fas fa-chevron-right"></i> For market research to understand your interest and customize our website accordingly</li>
                    </ul>

                    <h2 className="section-title mt-5">Security and Confidentiality</h2>
                    <p className="text-muted">
                        We are committed to ensuring that all the details provided by you are secured and protected.
                        To prevent unauthorized access, we have implemented electronic, physical, and managerial procedures
                        to safeguard the information collected by us online.
                    </p>
                </div>
            </section>
        </>
    );
}

