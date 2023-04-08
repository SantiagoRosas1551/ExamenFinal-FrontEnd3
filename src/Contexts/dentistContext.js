import { createContext, useContext, useReducer, useState } from 'react';

const DentistsContext = createContext();

const initialState = {
  data: [],
  filteredData: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'FILTER_BY_ID':
      const filteredData = state.data.filter(dentist => dentist.id === action.payload);
      return { ...state, filteredData };
    case 'ADD_TO_FAVORITES':
      const dentistToAdd = state.data.find(dentist => dentist.id === action.payload);
      const updatedFavorites = [...state.favorites, dentistToAdd];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return { ...state, favorites: updatedFavorites };
    default:
      return state;
  }
};


export function useDentistsContext() {
  return useContext(DentistsContext);
}

export function DentistContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setData(data);
    dispatch({ type: "SET_DATA", payload: data });
  };

  const filterById = (id) => {
    const numericId = parseInt(id);
    const filteredData = state.data.filter(dentist => dentist.id === numericId);
    dispatch({ type: "FILTER_BY_ID", payload: filteredData });
  }
  const addToFavorites = ()=>{
    
    
  }
  
  return (
    <DentistsContext.Provider value={{ 
      data, 
      fetchData, 
      filterById,
      filteredData:{},
      addToFavorites: (id) => dispatch({ type: 'ADD_TO_FAVORITES', payload: id })
    }}>
      {children}
    </DentistsContext.Provider>
  );
}
