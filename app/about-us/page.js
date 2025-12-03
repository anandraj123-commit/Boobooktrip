import AboutHero from "../../components/AboutHero";
import AboutUsSection from "../../components/AboutUsSection";
import AboutWelcomeSection from '../../components/About-Welocme-Section.js';
import TravelCondition from '@/components/TravelCondition.js';
import AboutTestimonialsSection from "../../components/AboutTestimonialsSection.js";
import Partners from "../../components/Partners.js";
export default function AboutUsPage() {
    return (
        <>
        <AboutHero/>
        <AboutWelcomeSection/>
        <AboutUsSection/>
        <TravelCondition/>
        <AboutTestimonialsSection/>
        <Partners/>
        </>
    )
  }
  