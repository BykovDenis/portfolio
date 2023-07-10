import React from 'react';
import './index.scss';
import TSlideItem from "../../redux/types/tslide-item.ts";

type TSiteCard = TSlideItem;

const SiteCard: React.FunctionComponent<TSiteCard> = (props: TSiteCard) => (
  <a className="site-card" href={props.href} target="_blank" rel="noreferrer noopener">
    <h3 className="site-card__title">{props.name}</h3>
    <div className="site-card__container">
      <img className="site-card__img" src={props.src} width={props.width} height={props.height} alt={props.name} />
    </div>
  </a>
);

export default SiteCard;
