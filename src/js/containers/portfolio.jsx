import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions';
import Toggler from '../components/toggler';
import SiteCards from '../components/site-cards';
import ButtonNavigation from '../components/button-navigation';
import styles from './portfolio.scss';

function Portfolio(props) {
  return (
    <div>
      <Toggler />
      <div className={styles.portfolio__container}>
        <ButtonNavigation direction={true} nextStep={props.nextStep} />
        <SiteCards slides={props.slides} step={props.step} />
        <ButtonNavigation nextStep={props.nextStep} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return state.Portfolio;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
