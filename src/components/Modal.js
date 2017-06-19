import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  static propTypes = {
    title: PropTypes.string,
    continueText: PropTypes.string,
    continueEnabled: PropTypes.bool,
    onCancel: PropTypes.func,
    onContinue: PropTypes.func
  };

  selectButton() {
    let style;
    if(this.props.continueEnabled) {
      style = Styles.selectButtonEnabled;
    } else {
      style = Styles.selectButtonDisabled;
    }

    return (<div className={css(Styles.finishButton, Styles.selectButton, style)}
                 onClick={this.props.onContinue}>
              <p>{this.props.continueText || 'Continue'}</p>
            </div>);
  }

  render() {
    return (<div className={css(Styles.root)}>
              <div className={css(Styles.bg)}></div>
              <div className={css(Styles.box)}>
                <p className={css(Styles.title)}>{this.props.title}</p>
                {this.props.children}
                <div className={css(Styles.select)}>
                  {this.selectButton()}
                  <div className={css(Styles.finishButton, Styles.cancelButton)}>
                    <p onClick={this.props.onCancel}>Cancel</p>
                  </div>
                </div>
              </div>
            </div>);
  }
};

const Styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 9,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    opacity: 0.75
  },
  box: {
      position: 'absolute',
      left: '50%',
      translate: 'translate(-50%, 0)',
      zIndex: 10,
      backgroundColor: 'white',
      borderRadius: '4px',
      border: '1px solid #000',
      boxShadow: '1px 1px 1px #000',
      padding: 20
  },
  finishButton: {
    borderRadius: 5,
    height: 40,
    width: 80,
    cursor: 'pointer'
  },
  selectButton: {
    backgroundColor: 'rgb(77,144,254)'
  },
  selectButtonDisabled: {
    cursor: 'default',
    opacity: 0.5
  }
});