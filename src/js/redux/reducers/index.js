/**
 * Created by Denis on 18.04.2017.
 */
import handleActions from 'redux-actions/lib/handleActions';
import initialState from '../initialState';
import {
  NEXT_SITE_SLIDE,
  TYPE_PORTFOLIO,
  NEXT_SPA_SLIDE
} from '../constants';


export default handleActions({
  [TYPE_PORTFOLIO]: (state, action) => ({
    ...state,
    type: action.payload,
  }),
  [NEXT_SITE_SLIDE]: (state, action) => ({
    ...state,
    siteStep: action.payload,
  }),
  [NEXT_SPA_SLIDE]: (state, action) => ({
    ...state,
    spaStep: action.payload,
  })
}, initialState);
