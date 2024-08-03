import SlideType from "../../enums/slide-type.ts";
import TSlideItem from "../types/tslide-item.ts";
import TSpa from "../types/tspa.ts";

export const getSiteStep = (state: TSpa): number => state.portfolio.siteStep;
export const getSpaStep = (state: TSpa): number => state.portfolio.spaStep;
export const getType = (state: TSpa): SlideType => state.portfolio.type;

export const getSiteSlides = (state: TSpa): Array<TSlideItem> => state.portfolio.siteSlides;
export const getSpaSlides = (state: TSpa): Array<TSlideItem> => state.portfolio.spaSlides;
