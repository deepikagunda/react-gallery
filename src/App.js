import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  // slides,onNext,onPrev,title,showDots
  const onNext = () => {
    //call any callbacks when next is clicked.
  };
  const onPrev = () => {
    //call any callbacks when prev is clicked.
  };
  return (
    <div className="App">
      <Gallery
        slides={[
          { src: "1.png", show: true, thumbnail: "1_tn.png" },
          { src: "2.png", show: true, thumbnail: "2_tn.png" },
          { src: "3.png", show: true, thumbnail: "3_tn.png" },
          { src: "4.png", show: true, thumbnail: "4_tn.png" },
          { src: "5.png", show: true, thumbnail: "5_tn.png" },
        ]}
        onNext={onNext}
        onPrev={onPrev}
        showDots={true}
        title={"flowers"}
      ></Gallery>
    </div>
  );
}

export default App;
