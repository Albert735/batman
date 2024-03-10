import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Subscribe from "./Components/Subscribe";
import Facts from "./Section/Facts";
import Hero from "./Section/Hero";
import Movie from "./Section/Movie";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Movie />
      <Facts />
      <Footer/>
      <Subscribe/>
    </div>
  );
}

export default App;
