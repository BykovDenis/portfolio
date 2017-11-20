import React from 'react';
import PropTypes from 'prop-types';
import SiteCard from '../site-card';
import styles from './index.scss';

export default function SiteCards(props) {
  const cards = props.slides.map(elem => <SiteCard data={elem} key={`${Math.random()}${elem.name}`} />);
  const stylesContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    transform: `translateX(${props.step * 378 * -1}px)`,
    transition: 'transform 1s ease-in-out',
  };
  return (
    <div className={styles['site-cards']}>
      <div style={stylesContainer} >
        {cards}
      </div>
    </div>
  );
}

SiteCards.defaultProps = {
  step: 0,
};

SiteCards.propTypes = {
  slides: PropTypes.shape.isRequired,
  step: PropTypes.number.isRequired,
};
