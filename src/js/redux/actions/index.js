/**
 * Created by Denis on 18.04.2017.
 */
import { NEXT_SLIDE } from '../constants';

export const nextStep = sign => (dispatch, getState) => {
  const state = getState().Portfolio;
  let step = state.step;
  if (sign === 'add') {
    step = step >= 5 ? 0 : step + 1;
  } else if (sign === 'sub') {
    step = step >= 1 ? step - 1 : 5;
  }
  dispatch({ type: NEXT_SLIDE, payload: step });
};

export const steps = () => {};
