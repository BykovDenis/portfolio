import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

export default function SPACard(props) {
  const data = props.data;
  return (
    <a className={styles['spa-card']} href={data.href} target="_blank" rel="noreferrer noopener">
      <h3 className={styles['spa-card__title']}>{data.name}</h3>
      <div className={styles['spa-card__container']}>
        <img className={styles['spa-card__img']} src={data.src} width={data.width} height={data.height} alt={data.name} />
      </div>
    </a>
  );
}

SPACard.propTypes = {
  data: PropTypes.shape.isRequired,
};
