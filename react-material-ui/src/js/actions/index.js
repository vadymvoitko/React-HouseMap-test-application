import axios from 'axios'

export function getData() {
  return function (dispatch) {
    return axios.get("http://demo4452328.mockable.io/properties")
      .then(res => {
        dispatch({
          type: "DATA_LOADED",
          payload: res.data.data
        });
      });
  };
}

export function getTemplates() {
  return function (dispatch) {
    console.log('opa')
    return axios.get("http://demo4452328.mockable.io/templates")
      .then(res => {
        dispatch({
          type: "TEMPLATE_LOADED",
          payload: res.data
        });
      });
  };
}

export function setTemplateType(payload) {
  console.log('1 ', payload)
  return ({
    type: "SET_TMPL_TYPE",
    payload: payload
  });
}