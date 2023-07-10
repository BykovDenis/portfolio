import React from 'react';
import ToggleDisplay from 'react-toggle-display';
import Toggler from '../components/toggler';
import SiteCards from '../components/site-cards';
import SPACards from '../components/spa-cards';
import ButtonNavigation from '../components/button-navigation';
import './portfolio.scss';
import SlideType from "../enums/slide-type.ts";
import {useSelector} from "react-redux";
import {getType} from "../redux/selectors";
import TSpa from "../redux/types/tspa.ts";

const Portfolio: React.FunctionComponent = () => {
  const type: SlideType = useSelector((state: TSpa) => getType(state));
  return (
    <div className="portfolio">
      <Toggler />
      <div className="portfolio__container">
        <ToggleDisplay if={type === SlideType.Html}>
          <div className="portfolio__slides">
            <ButtonNavigation isDirection={true} isSPASlide={false} />
            <SiteCards />
            <ButtonNavigation isSPASlide={false} />
          </div>
        </ToggleDisplay>
        <ToggleDisplay if={type === SlideType.Spa}>
          <div className="portfolio__slides">
            <ButtonNavigation isDirection={true} isSPASlide={true} />
            <SPACards />
            <ButtonNavigation isSPASlide={true} />
          </div>
        </ToggleDisplay>
      </div>
    </div>
  );
}

export default Portfolio;
