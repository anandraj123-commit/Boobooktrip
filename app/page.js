import '../styles/home.scss';
import HeroSection from '../components/HeroSection';
import TopDestinations from '../components/TopDestinations';
import TravelCondition from '../components/TravelCondition';
import TourPackage from '../components/TourPackage';
import GetInTouch from '../components/GetInTouch';
import BudgetPackages from '../components/BudgetPackages';
import TopSightSeeing from '../components/TopSightSeeing';
import Partners from '../components/Partners';
export default function Home() {
  return (
   <main>
      <HeroSection/>
      <TourPackage/>
      <TopDestinations/>
      <GetInTouch/>
      <BudgetPackages/>
      <TravelCondition/>
      <TopSightSeeing/>
      <Partners/>
   </main>
  );
}
