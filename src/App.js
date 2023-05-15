import Navbar from "./components/Navbar";
import LogIn from "./components/LogIn";


function App() {
  return (
    <div className="App flex flex-col gap-[50px]">
      <Navbar />
      <LogIn />
    </div>
  );
}

export default App;
