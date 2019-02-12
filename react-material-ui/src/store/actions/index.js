import root from './axiosConfig'
import {DATA_LOADED, SET_TMPL_TYPE, TEMPLATE_LOADED} from './../constants/action-types'
export const getHouses = () => dispatch => (
    root.get("/properties")
      .then(res => {
        dispatch({
          type: DATA_LOADED,
          payload: res.data.data
        });
      })
);



export const getTemplates = () => dispatch => (
    root.get("/templates")
      .then(res => {
        dispatch({
          type: TEMPLATE_LOADED,
          payload: res.data
        });
      })
);

export const setTemplateType = payload => ({
    type: SET_TMPL_TYPE,
    payload: payload
  });
