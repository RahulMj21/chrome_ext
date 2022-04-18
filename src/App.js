import Intro from "./pages/Intro";
import Main from "./pages/Main";

function App() {
  return (
    <div
      className="app"
      style={{
        background: `url(/images/default_bg.jpg) center
    center/cover no-repeat`,
      }}
    >
      {/* <Intro /> */}
      <Main />
    </div>
  );
}

export default App;
