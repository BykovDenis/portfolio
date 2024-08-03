import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import SlideType from '../../enums/slide-type.js';
import {getType} from "../../redux/selectors";
import './index.scss';
import {changeType} from "../../redux/reducers/portfolio-slide.ts";
import TSpa from "../../redux/types/tspa.ts";

const Toggler: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const type: SlideType = useSelector((state: TSpa) => getType(state)) || SlideType.Spa;

  const onRadioSlideChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt.target;
    dispatch(changeType(element.dataset?.type as SlideType))
  }

  return (
    <div className="toggler">
      <input
        type="radio"
        className="toggler__input"
        id="spa"
        name="toggler"
        data-type={SlideType.Spa}
        onChange={onRadioSlideChange}
        checked={type === SlideType.Spa}
      />
      <label className="toggler__label" htmlFor="spa">
        Single Page Application
      </label>
      <input
        type="radio"
        className="toggler__input"
        id="html-pages"
        name="toggler"
        data-type={SlideType.Html}
        onChange={onRadioSlideChange}
        checked={type === SlideType.Html}
      />
      <label className="toggler__label" htmlFor="html-pages">HTML pages</label>
    </div>
  );
}

export default Toggler;
