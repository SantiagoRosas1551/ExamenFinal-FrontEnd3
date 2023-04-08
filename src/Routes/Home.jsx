import { useEffect } from "react";
import Card from "../Components/Card";
import { useContext } from "react";
import { useDentistsContext } from "../Contexts/dentistContext";
import { ThemeContext } from "../Contexts/themeContext";

const Home = () => {
 

    const { data, fetchData, } = useDentistsContext();
    const {state, toggleTheme} =useContext(ThemeContext)

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className={`card-grid container ${state.theme}`}>
      {data.length 
       ? data.map(dentist => (<Card key={dentist.id} data={dentist}  name={dentist.name}/>))
       : null
    }
      </div>
    </>
  );
};

export default Home;
