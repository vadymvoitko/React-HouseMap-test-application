const initialState = {
  items: [],
  templates: [],
  currentTemplate: [
    { component: "IMAGE",
     field: "images" },
    { component: "ADDRESS",
     field: "full_address" },
    { component: "PRICE",
     field: "price" },
    { component: "AREA",
     field: "area" }
  ]
};
// DONT CREATE ANY LOGIC AND VARIABLES HERE
function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'DATA_LOADED': return {
        ...state,
        items: action.payload
      }
      case 'TEMPLATE_LOADED': return {
        ...state,
        templates: action.payload
      }
      case 'SET_TMPL_TYPE' : return {
        ...state,
        currentTemplate: [...action.payload]
      }
      default: return state;
    }
}

export default rootReducer;