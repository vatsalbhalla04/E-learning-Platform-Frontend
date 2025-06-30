import Navbar from "./Navbar/Navbar";
import Banner from "./Top_Banner/Banner";

export default function Header() {
  return (
    <div>
        <div>
            <Banner/>
        </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}
