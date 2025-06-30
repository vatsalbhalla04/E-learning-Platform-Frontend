import Header from "../components/UI/Header/Header";
import CompanyBanner from "../components/UI/HeroSection/CompanyBanner";
import HeroSection from "../components/UI/HeroSection/HeroSection";

export default function Landing() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <HeroSection />
      </div>
      <div className="flex justify-center mt-[4%]">
        <CompanyBanner/>
      </div>
    </div>
  );
}
