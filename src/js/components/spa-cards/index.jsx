import React from 'react';
import PropTypes from 'prop-types';
import SPACard from '../spa-card';
import styles from './index.scss';

export default function SPACards(props) {
  const cards = props.slides.map(elem => <SPACard data={elem} key={`${Math.random()}${elem.name}`} />);
  const stylesContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    transform: `translateX(${props.step * 553 * -1}px)`,
    transition: 'transform 1s ease-in-out',
  };
  return (
    <div className={styles['spa-cards']}>
      <div style={stylesContainer} >
        {cards}
      </div>
    </div>
  );
}

SPACards.defaultProps = {
  step: 0,
};

SPACards.propTypes = {
  slides: PropTypes.shape.isRequired,
  step: PropTypes.number.isRequired,
};
