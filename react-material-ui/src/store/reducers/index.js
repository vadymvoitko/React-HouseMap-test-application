const initialState = {
  items: [],
  templates: [],
  currentTemplate: {
    index: 0,
    template: [{
        component: "IMAGE",
        field: "images"
      },
      {
        component: "ADDRESS",
        field: "full_address"
      },
      {
        component: "PRICE",
        field: "price"
      },
      {
        component: "AREA",
        field: "area"
      }
    ]
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DATA_LOADED':
      return {
        ...state,
        items: action.payload
      }
    case 'TEMPLATE_LOADED':
      return {
        ...state,
        templates: action.payload
      }
    case 'SET_TMPL_TYPE':
      return {
        ...state,
        currentTemplate: {
          index: action.payload.index,
          template: [...action.payload.template]
        }
      }
    default:
      return state;
  }
}

export default rootReducer;