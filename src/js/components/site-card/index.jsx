import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

function SiteCard(props) {
  const data = props.data;
  return (
    <a className={styles['site-card']} href={data.href} target="_blank" rel="noreferrer noopener">
      <h3 className={styles['site-card__title']}>{data.name}</h3>
      <div className={styles['site-card__container']}>
        <img className={styles['site-card__img']} src={data.src} width={data.width} height={data.height} alt={data.name} />
      </div>
    </a>
  );
}

SiteCard.propTypes = {
  data: PropTypes.shape.isRequired,
};

export default SiteCard;
