import React from 'react';

export default function Toggler() {
  const styles = require('./index.scss');
  return (
    <div className={styles.toggler}>
      <input type="radio" className={styles.toggler__input} id="spa" name="toggler" checked />
      <label className={styles.toggler__label} htmlFor="spa">Single Page Application</label>
      <input type="radio" className={styles.toggler__input} id="html-pages" name="toggler" />
      <label className={styles.toggler__label} htmlFor="html-pages">HTML pages</label>
    </div>
  );
}
