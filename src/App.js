import './App.css';
import Banner from './components/Banner/Banner';
import BannerSovet from './components/BannerSovet/BannerSovet';
import DisclaimerPopup from './components/Disclaimer/Disclaimer';
import EatingWell from './components/EatingWell/EatingWell';
import Exercise from './components/Excercise/Exercise';
import Fat from './components/Fat/Fat';
import FoodCards from './components/FoodCards/FoodCards';
import Footer from './components/Footer/Footer';
import Hydatate from './components/Hydrated/Hydratate';
import Protein from './components/Protein/Protein';
import ProteinTable from './components/ProteinTable/ProteinTable';
import QueuteBanner from './components/QuouteBanner/QuouteBanner';
import TextPart from './components/Text__Part/TextPart';
import White_Table from './components/White_Table/White_Table';
import YellowTable from './components/YellowTable/YellowTable';
import GoUpBut from './utils/GoUpBut/GoUpBut';

function App() {
  return (
    <div className='app flex flex-col justify-center items-center max-w-[100vw] min-h-[100vh] overflow-x-hidden break-words'>
        <header>
          <Banner/>
        </header>
        <main className='flex flex-col justify-center items-center'>
          <DisclaimerPopup/>
          <EatingWell/>
          <QueuteBanner/>
          <FoodCards/>
          <BannerSovet/>
          <Exercise/>
          <TextPart/>
          <YellowTable/>
          <White_Table/>
          <Protein/>
          <ProteinTable/>
          <Hydatate/>
          <Fat/>
        </main>
        <footer>
            <Footer/>
        </footer>
        <GoUpBut/>
    </div>
  );
}

export default App;
