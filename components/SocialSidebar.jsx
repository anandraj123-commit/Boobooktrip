"use client";
import '../styles/SocialSidebar.scss';
export default function SocialSidebar() {
  return (
    <div className="social-sidebar">
      {/* Facebook */}
      <a className="fb" href="hhttps://www.facebook.com/tripboobook" target="_blank">
        <i className="fab fa-facebook-f"></i>
      </a>

      {/* Twitter */}
      <a className="tw" href="https://x.com/BoobookTrip" target="_blank">
        <i className="fab fa-twitter"></i>
      </a>

      {/* LinkedIn */}
      <a className="ln" href="https://www.linkedin.com/company/boobook-trip/posts/?feedView=all" target="_blank">
        <i className="fab fa-linkedin-in"></i>
      </a>

      {/* Instagram */}
      <a className="ig" href="https://www.instagram.com/boobooktrip" target="_blank">
        <i className="fab fa-instagram"></i>
      </a>

      {/* WhatsApp */}
      <a className="wa" href="https://wa.me/917484052727" target="_blank">
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Email */}
      {/* <a className="em" href="mailto:info@example.com">
        <i className="fas fa-envelope"></i>
      </a> */}

      <style jsx>{`
        .social-sidebar {
          position: fixed;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 14px 10px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 0 12px 12px 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          z-index: 9999;
          animation: slideIn 0.8s ease forwards;
          opacity: 0;
        }

        .social-sidebar a {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 20px;
          transition: 0.3s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
        }

        /* Facebook */
        .fb {
          background: #1877f2;
        }

        /* Twitter */
        .tw {
          background: #1da1f2;
        }

        /* LinkedIn */
        .ln {
          background: #0a66c2;
        }

        /* Instagram gradient */
        .ig {
          background: linear-gradient(
            45deg,
            #feda75,
            #fa7e1e,
            #d62976,
            #962fbf,
            #4f5bd5
          );
        }

        /* WhatsApp */
        .wa {
          background: #25d366;
        }

        /* Email (Gmail red) */
        .em {
          background: #ea4335;
        }

        /* Hover effect */
        .social-sidebar a:hover {
          transform: scale(1.2) rotate(8deg);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
        }

        /* Slide-in animation */
        @keyframes slideIn {
          0% {
            transform: translate(-40px, -50%);
            opacity: 0;
          }
          100% {
            transform: translate(0, -50%);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
