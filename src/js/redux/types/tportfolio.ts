import TSlideItem from "./tslide-item.ts";
import SlideType from "../../enums/slide-type.ts";

type TPortfolio = {
	siteStep: number,
	spaStep: number,
	type: SlideType,
	spaSlides: Array<TSlideItem>,
	siteSlides: Array<TSlideItem>,
}

export default TPortfolio;
