import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import { DentistContextProvider } from "./Contexts/dentistContext";
import { ThemeProvider } from "./Contexts/themeContext";

function App() {

 
  return (
    <>
  
    <ThemeProvider> 
        <DentistContextProvider>
      <div className={`app light}`}>

        <Navbar />
        <main >
          <Outlet />
        </main>
        <Footer />
      </div>
        </DentistContextProvider>
    </ThemeProvider>
    
    </>
  );
}

export default App;
