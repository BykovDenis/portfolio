/**
 * Created by Denis on 18.04.2017.
 */
import handleActions from 'redux-actions/lib/handleActions';
import initialState from '../initialState';
import { NEXT_SLIDE } from '../constants';


export default handleActions({
  [NEXT_SLIDE]: (state, action) => ({
    ...state,
    step: action.payload,
  })
}, initialState);
