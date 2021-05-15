// import logo from './logo.svg';
import './App.css';
import dripLogo from './drip-logo.svg';
// import stackLogo from './stack-logo.svg';



import bgMobile from './lp-mobile.svg';
// import bgMd from './lp-md.svg';
import bgLg from './lp-lg.svg';


console.log(bgLg)

function App() {
  return (
    <div className="App" class="w-screen h-screen overflow-hidden flex items-center justify-center">
      
      {/* <div id="logo" class="max-w-7xl"> */}

      {/* </div> */}
      {/* <div id="bg fixed z-20"> */}

        <img src={dripLogo} class="z-20 max-h-full p-20 fixed"></img>

      {/* </div> */}

      <div id="bg fixed z-10">
        <img src={bgLg} class="hidden sm:block w-screen h-screen bg-contain"></img>
        <img src={bgMobile} class="sm:hidden"></img>
      </div>




    </div>
  );
}

export default App;
