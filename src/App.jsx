// components
import BlocksLeft from "./components/BlocksLeft/BlocksLeft";
import BlocksRight from "./components/BlocksRight/BlocksRight";
import Creators from "./components/Creators/Creators";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

//images
import img1 from "./assets/images/blocks/1.png";
import img2 from "./assets/images/blocks/2.png";
import img3 from "./assets/images/blocks/3.png";
import img4 from "./assets/images/blocks/4.png";

import creator1 from "./assets/images/creators/1.png";
import creator2 from "./assets/images/creators/2.png";
import creator3 from "./assets/images/creators/3.png";

//styles
import "./index.scss";
import StartNow from "./components/StartNow/StartNow";
import Footer from "./components/Footer/Footer";

// data
const dataBlocks = [
  {
    id: 1,
    span: "SOUNDS",
    h2: "A catalog so deep, it’s dangerous.",
    p: "Expertly created and curated samples in any style imaginable. Start swimming in sound.",
    button: "Explore Sounds",
    img: img1,
  },
  {
    id: 2,
    span: "Connected Experience",
    h2: "A workflow that actually flows.",
    p: "Preview samples in your track’s key and tempo, drag and drop sounds into your DAW, and organize your favorite samples, MIDI and presets in one place.",
    button: null,
    img: img2,
  },
  {
    id: 3,
    span: "Gear",
    h2: "Build a drool-worthy studio, affordably.",
    p: "The industry’s top software, all in one place, on payment plans built to work for you.",
    button: "Explore Gear",
    img: img3,
  },
  {
    id: 4,
    span: "Technology",
    h2: "Crate dig without the dust.",
    p: "Our intelligent search tools help you discover sounds you would normally have to dig to find. Tech breaks the sweat, not you.",
    button: "Discover CoSo",
    img: img4,
  },
];
const dataCreators = [creator1, creator2, creator3];

// component
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <BlocksLeft
        span={dataBlocks[0].span}
        h2={dataBlocks[0].h2}
        p={dataBlocks[0].p}
        button={dataBlocks[0].button}
        img={dataBlocks[0].img}
      />
      <BlocksRight
        span={dataBlocks[0].span}
        h2={dataBlocks[1].h2}
        p={dataBlocks[1].p}
        img={dataBlocks[1].img}
      />
      <BlocksLeft
        span={dataBlocks[2].span}
        h2={dataBlocks[2].h2}
        p={dataBlocks[2].p}
        button={dataBlocks[2].button}
        img={dataBlocks[2].img}
      />
      <BlocksRight
        span={dataBlocks[3].span}
        h2={dataBlocks[3].h2}
        p={dataBlocks[3].p}
        button={dataBlocks[3].button}
        img={dataBlocks[3].img}
      />
      <Creators dataCreators={dataCreators} />
      <StartNow />
      <Footer />
    </div>
  );
}

export default App;
