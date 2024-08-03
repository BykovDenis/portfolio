import React from 'react';
import classNames from 'classnames';
import './index.scss';
import {useDispatch} from "react-redux";
import Direction from "../../enums/direction.ts";
import {changeSiteStep, changeSPAStep} from '../../redux/reducers/portfolio-slide.ts';

type TButtonNavigation = {
  isDirection?: boolean,
  isSPASlide: boolean
}

const ButtonNavigation: React.FunctionComponent<TButtonNavigation> = (props: TButtonNavigation) => {
  const dispatch = useDispatch();
  const styles = classNames({
    'button-navigation': true,
    'button-navigation--next': props.isDirection,
  });
  const onSlideChange = () => {
    if (props.isSPASlide) {
      dispatch(changeSPAStep(props.isDirection ? Direction.Sub : Direction.Add));
    } else {
      dispatch(changeSiteStep(props.isDirection ? Direction.Sub : Direction.Add));
    }

  }
  return (
    <button type="button" onClick={onSlideChange} className={styles} />
  );
}

export default ButtonNavigation;

