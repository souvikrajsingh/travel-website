import Navbar from "./components/Navbar"
import MuiButton from "./components/MuiButton"

export default function App() {
  return (
    <>
    <Navbar/>
    <div>
      <div className="flex" >

        <div className="pt-12 mt-12 pl-12 pr-12" >
          <h4 className="font-bold text-4xl ">
          Find Your Trail Companion: Connecting Hikers with Guides
          </h4>
          <h2 className="text-xl pt-6 ">
          Forge lasting connections with experienced guides who will turn your hiking dreams into reality. Your next adventure starts here.
          </h2>
          <br />
          <MuiButton ></MuiButton>
        </div>

        <div className="pt-12 mt-12 pr-12">
        <img src="src\assets\images\manali.jpg" alt="" width="600" height="600" className="pb-4"/>
        <img src="src\assets\images\sandakpu.jpg" alt="" width="600" height="600" />
        </div>

      </div>
    </div>
    </>
  )
}

