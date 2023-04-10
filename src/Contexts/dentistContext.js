import { createContext, useContext,  useState } from 'react';

const DentistsContext = createContext();

export function useDentistsContext() {
  return useContext(DentistsContext);
}

// export const favReducer = ()=>{
//   switch(action.type){
//     case "FAV": const 
//   }
// }

export function DentistContextProvider({ children }) {
  // 
  const [data, setData] = useState([]);
  
  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setData(data);
    
  };













  
  return (
    <DentistsContext.Provider value={{ 
      data, 
      fetchData,
    }}>
      {children}
    </DentistsContext.Provider>
  );
}
