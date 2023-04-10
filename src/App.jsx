import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import { DentistContextProvider } from "./Contexts/dentistContext";
import { ThemeContext, ThemeProvider } from "./Contexts/themeContext";
import { useContext } from "react";
function App() {
  
  const {state, toggleTheme} =useContext(ThemeContext)
  
  return (
    <>
  
    
      <div className={`app ${state.theme}`}>

        <Navbar />
        <main >
          <Outlet />
        </main>
        <Footer />
      </div>
       
    
    </>
  );
}

export default App;
