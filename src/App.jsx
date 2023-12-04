
import { useState, } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import GridLoader from "react-spinners/GridLoader"; 
 const [loading, setLoading] = useState(true);
 import ProfilePage from "./Components/profilepage";

 function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">

        {/* <div className="item">
          <GridLoader
          loading={loading}
          size={13}
          color="blue"
          />
        </div> */}

        <ProfilePage />
    </div>
  );
}

export default App;
