import React from 'react';
import './index.scss';
import TSlideItem from "../../redux/types/tslide-item.ts";

type TSiteCard = TSlideItem;

const SPACard: React.FunctionComponent<TSiteCard> = (props: TSiteCard) => (
    <a className="spa-card" href={props.href} target="_blank" rel="noreferrer noopener">
      <h3 className="spa-card__title">{props.name}</h3>
      <div className="spa-card__container">
        <img className="spa-card__img" src={props.src} width={props.width} height={props.height} alt={props.name} />
      </div>
    </a>
  );

export default SPACard;
