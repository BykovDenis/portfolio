import React from 'react';
import SPACard from '../spa-card';
import './index.scss';
import SpaCardContainer from './spa-card-container.js';
import TSlideItem from '../../redux/types/tslide-item.js';
import { useSelector } from 'react-redux';
import { getSpaSlides, getSpaStep} from '../../redux/selectors/index';
import TSpa from "../../redux/types/tspa.ts";

const SPACards: React.FunctionComponent = () => {
  const spaSlides: Array<TSlideItem>= useSelector((state: TSpa) => getSpaSlides(state));
  const spaStep: number = useSelector((state: TSpa) => getSpaStep(state));

  return (
    <div className="spa-cards">
      <SpaCardContainer step={spaStep}>
        {spaSlides.map((spaSlideElement: TSlideItem)  => <SPACard {...spaSlideElement}  key={spaSlideElement.id} />)}
      </SpaCardContainer>
    </div>
  );
}

export default SPACards;
