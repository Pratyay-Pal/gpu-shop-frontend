import "./App.css";
import Shopping from "./content/Shopping/Shopping";

function App() {
  return (
    <>
      <p
        style={{
          backgroundColor: "white",
          margin: "0",
          display: "flex",
          justifyContent: "center",
          fontWeight: "600",
        }}
      >
        THIS PAGE IS NOT RESPONSIVE AND CAN BREAK ON OTHER DISPLAYS. IT IS TAILORED TO 2560x1440 PIXELS, 27INCH
        DISPLAY.
      </p>
      <Shopping />
    </>
  );
}

export default App;
