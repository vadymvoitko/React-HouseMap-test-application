import root from './axiosConfig'
import * as types from './../constants/action-types'
export function getData() {
  return function (dispatch) {
    return root.get("/properties")
      .then(res => {
        dispatch({
          type: types['DATA_LOADED'],
          payload: res.data.data
        });
      });
  };
}


export function getTemplates() {
  return function (dispatch) {
    return root.get("/templates")
      .then(res => {
        dispatch({
          type: types["TEMPLATE_LOADED"],
          payload: res.data
        });
      });
  };
}

export function setTemplateType(payload) {
  return ({
    type: types["SET_TMPL_TYPE"],
    payload: payload
  });
}