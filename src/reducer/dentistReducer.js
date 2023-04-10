export const initialState = { 
  dentists: [],
  filteredById: [],
  error: null,
};

const dentistReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        dentists: action.payload,
        filteredById: null,
        error: null,
      };
      case 'FILTER_BY_ID':
        const filteredById = state.dentists.filter(dentist => dentist.id === parseInt(action.payload));
        return {
          ...state,
          filteredById: filteredById
        };
    case 'FETCH_FAILURE':
      return {
        dentists: [],
        filteredById: null,
        error: action.payload,
      };
    default:
      return state;
  }
};


const highlightDentist = (dentist) =>
localStorage.setItem("dentist", JSON.stringify(dentist));

const getHighlighted = () => {
  const localData = localStorage.getItem("dentist");
  return localData ? JSON.parse(localData) : [];
  };
export default dentistReducer;
