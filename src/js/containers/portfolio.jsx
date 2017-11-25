import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ToggleDisplay from 'react-toggle-display';
import * as actionCreators from '../redux/actions';
import Toggler from '../components/toggler';
import SiteCards from '../components/site-cards';
import SPACards from '../components/spa-cards';
import ButtonNavigation from '../components/button-navigation';
import styles from './portfolio.scss';

function Portfolio(props) {
  return (
    <div className={styles.portfolio}>
      <Toggler changeType={props.changeType} type={props.type} />
      <div className={styles.portfolio__container}>
        <ToggleDisplay if={props.type === 'html'}>
          <div className={styles.portfolio__slides}>
            <ButtonNavigation direction={true} nextStep={props.nextSiteStep} />
            <SiteCards slides={props.siteSlides} step={props.siteStep} />
            <ButtonNavigation nextStep={props.nextSiteStep} />
          </div>
        </ToggleDisplay>
        <ToggleDisplay if={props.type === 'SPA'}>
          <div className={styles.portfolio__slides}>
            <ButtonNavigation direction={true} nextStep={props.nextSPAStep} />
            <SPACards slides={props.SPASlides} step={props.spaStep} />
            <ButtonNavigation nextStep={props.nextSPAStep} />
          </div>
        </ToggleDisplay>
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
