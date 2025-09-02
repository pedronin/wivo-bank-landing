import { ScrollToHash } from "@/components/ScrollToHash";
import { Header } from "@/components/Header";
import { IntroSection } from "@/components/IntroSection";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/Card";
import { AppInfo } from "@/components/AppInfo";
import { Customize } from "@/components/Customize";
import { PartnersTicker } from "@/components/PartnersTicker";

function App() {
  return (
    <div className="App">
      <Header />

      <IntroSection />
      <PartnersTicker />
      <Card />
      <AppInfo />
      <Customize />
      <Faq />

      <Footer />

      <ScrollToHash />
    </div>
  );
}

export default App;
