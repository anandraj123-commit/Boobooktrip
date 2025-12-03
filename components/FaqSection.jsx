"use client";
import { useState } from "react";
import styles from "../styles/FaqSection.module.css";

const leftFaqs = [
  {
    q: "What Services Do You Offer?",
    a: "We offer consulting, strategy development, market research, and tailored business solutions."
  },
  {
    q: "How Can Your Firm Help Improve Our Business?",
    a: "We help by analyzing your workflows, identifying inefficiencies, and implementing business growth strategies."
  },
  {
    q: "What Experience Do You Have In Our Industry?",
    a: "Our team has 10+ years of experience across tech, finance, manufacturing, and retail sectors."
  },
  {
    q: "What Is Your Approach Or Methodology?",
    a: "We follow a structured 4-phase model: Analyze → Strategize → Implement → Optimize."
  },
  {
    q: "Can You Provide References Or Case Studies?",
    a: "Yes, we have multiple case studies available that highlight measurable client success."
  }
];

const rightFaqs = [
  {
    q: "How Do You Determine The Cost Of Services?",
    a: "Pricing is based on project scope, complexity, and estimated duration. Quotes are transparent."
  },
  {
    q: "What Sets Your Firm Apart From Competitors?",
    a: "Our unique approach, hands-on implementation, and data-driven insights differentiate us."
  },
  {
    q: "How Long Does Consulting Engagement Last?",
    a: "Depending on needs, engagements range from 2 weeks to 6 months or more."
  },
  {
    q: "Can You Explain Your Team's Expertise?",
    a: "Our consultants are certified professionals with expertise in operations, strategy, and analytics."
  },
  {
    q: "How You Measure The Success Of Your Service?",
    a: "We track KPIs such as ROI, operational efficiency, and overall business performance."
  }
];

export default function FaqSection() {
  const [openLeft, setOpenLeft] = useState(null);
  const [openRight, setOpenRight] = useState(null);

  return (
    <section className="container py-5">
      <h2 className="fw-bold mb-5 text-center">Most Asked Question To Us</h2>

      <div className="row">
        
        {/* LEFT COLUMN */}
        <div className="col-md-6">
          {leftFaqs.map((item, index) => (
            <div key={index} className="mb-3">
              <div
                className={`${styles.faqBox} p-3 d-flex justify-content-between align-items-center`}
                onClick={() => setOpenLeft(openLeft === index ? null : index)}
              >
                <h5 className="m-0 fw-semibold">{item.q}</h5>
                <span className={styles.plusIcon}>
                  {openLeft === index ? "−" : "+"}
                </span>
              </div>

              {openLeft === index && (
                <div className={`${styles.answerBox} p-3`}>
                  <p className="m-0">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-md-6">
          {rightFaqs.map((item, index) => (
            <div key={index} className="mb-3">
              <div
                className={`${styles.faqBox} p-3 d-flex justify-content-between align-items-center`}
                onClick={() => setOpenRight(openRight === index ? null : index)}
              >
                <h5 className="m-0 fw-semibold">{item.q}</h5>
                <span className={styles.plusIcon}>
                  {openRight === index ? "−" : "+"}
                </span>
              </div>

              {openRight === index && (
                <div className={`${styles.answerBox} p-3`}>
                  <p className="m-0">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
