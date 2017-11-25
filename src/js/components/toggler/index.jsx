import React from 'react';
import PropTypes from 'prop-types';

export default function Toggler(props) {
  const styles = require('./index.scss');
  return (
    <div className={styles.toggler}>
      <input
        type="radio"
        className={styles.toggler__input}
        id="spa"
        name="toggler"
        onChange={() => props.changeType('SPA')}
        checked={props.type === 'SPA'}
      />
      <label className={styles.toggler__label} htmlFor="spa">
        Single Page Application
      </label>
      <input
        type="radio"
        className={styles.toggler__input}
        id="html-pages"
        name="toggler"
        onChange={() => props.changeType('html')}
        checked={props.type === 'html'}
      />
      <label className={styles.toggler__label} htmlFor="html-pages">HTML pages</label>
    </div>
  );
}

Toggler.defaultProps = {
  changeType: () => {},
  type: 'SPA'
};

Toggler.propTypes = {
  changeType: PropTypes.func.isRequired,
  type: PropTypes.bool.isRequired,
};
