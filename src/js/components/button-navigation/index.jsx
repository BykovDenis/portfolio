import React from 'react';
import ProptTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

export default function ButtonNavigation(props) {
  const className = classNames({
    'button-navigation': true,
    'button-navigation--next': props.direction,
  });
  const handleChange = () => props.nextStep(props.direction ? 'sub' : 'add');
  return (
    <button type="button" onClick={handleChange} className={className} />
  );
}

ButtonNavigation.defaultProps = {
  direction: false,
  nextStep: () => {},
};

ButtonNavigation.ProptTypes = {
  direction: ProptTypes.bool.isRequired,
  nextStep: ProptTypes.func.isRequired,
};
