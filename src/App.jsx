import Navbar from "./components/Navbar"
import MuiButton from "./components/MuiButton"
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      {Display()}
      <Footer />
    </>
  );
}

function Display() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 justify-center" >

        <div className="pt-12 mt-12 pl-12" >
          <h4 className="font-bold text-4xl ">
            Find Your Trail Companion: Connecting Hikers with Guides
          </h4>
          <h2 className="text-xl pt-6 ">
            Forge lasting connections with experienced guides who will turn your hiking dreams into reality. Your next adventure starts here.
          </h2>
          <br />
          <MuiButton ></MuiButton>
        </div>

        <div className="pt-8 m-4 grid grid-cols-2 gap-4">
          <img src="src\assets\images\mussorie.jpg" alt="" className="rounded-lg " width="350" height="350" />
          <img src="src\assets\images\manali.jpg" alt="" className="rounded-lg  " width="350" height="350" />
          <img src="src\assets\images\sandakpu.jpg" alt="" className="rounded-lg " width="350" height="350" />
        </div>

      </div>
    </div>

  );
}

export default App;