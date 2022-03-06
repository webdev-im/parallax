import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import WrappedComponent from "./components/WrappedComponent";

function App() {
  // const parallax = useParallax<HTMLDivElement>({
  //   rotate: [0, 360],
  //   scale: [0.5, 1, "easeInQuad"],
  // });
  return (
    <div
      className="_App"
      style={{
        background: "grey",
        width: "300vw",
        height: "100vh",
        overflowX: "scroll",
        overflowY: "hidden",
      }}
    >
      <ParallaxProvider scrollAxis="horizontal">
        <WrappedComponent />
      </ParallaxProvider>
    </div>
  );
}

export default App;
