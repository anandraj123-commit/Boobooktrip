import '@/styles/about.scss';
export const metadata = {
    title: "About Us | Your Website Name",
    description: "Learn more about our company, mission, vision, and values.",
  };
  
  export default function AboutUsLayout({ children }) {
    return (
      <>
       {children}
      </>
    );
  }
  