import SiteCard from '../site-card';
import  './index.scss';
import TSlideItem from '../../redux/types/tslide-item';
import { useSelector } from 'react-redux';
import {getSiteSlides, getSiteStep} from '../../redux/selectors';
import SiteCardContainer from "../site-card-container";
import TSpa from "../../redux/types/tspa.ts";

const SiteCards: React.FunctionComponent = ()  => {
  const siteSlides: Array<TSlideItem>= useSelector((state: TSpa) => getSiteSlides(state));
  const siteStep: number = useSelector((state: TSpa) => getSiteStep(state));

  return (
    <div className="site-cards">
      <SiteCardContainer step={siteStep}>
        {siteSlides.map((siteSlideElement: TSlideItem) => <SiteCard {...siteSlideElement} key={siteSlideElement.id} />)}
      </SiteCardContainer>
    </div>
  );
}

export default SiteCards;
