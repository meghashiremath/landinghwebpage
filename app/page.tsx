import Navbar from "./navbar/page";
import FirstSection from "./first-section/page";
import SecondSection from "./second-section/page";
import ThirdSection from "./third-section/page";
import FourthSection from "./fourth-section/page";
import FifthSection from "./fifth-section/page";
import SixthSection from "./sixth-section/page";
export default function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div><FirstSection /></div>
      <div><SecondSection /></div>
      <div><ThirdSection /></div>
      <div><FourthSection /></div>
      <div><FifthSection /></div>
      <div><SixthSection/></div>
    </div>
  )
};
