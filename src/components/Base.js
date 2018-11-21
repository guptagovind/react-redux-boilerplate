import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { getData, setLocale } from '../actions/Actions';

class Base extends React.Component {
  getTest = () => {
    this.props.getData();
  };

  render() {
    return (
      <div>
        Hello,
        <FormattedMessage
          id='Base.dashboard'
          defaultMessage="Dashboard"
        />
        <div className="test-image">
          {this.getTest()}
          <FormattedMessage
            id='Base.myName'
            defaultMessage='myName'
          />
          {/* myName: */}
          {this.props.myName}
        </div>
        <div role='presentation' onClick={() => this.props.setLocale('en')}>EN</div>
        |
        <div role='presentation' onClick={() => this.props.setLocale('ru')}>RU</div>
      </div>
    );
  }
}

Base.propTypes = {
  myName: PropTypes.string,
  getData: PropTypes.func.isRequired,
  setLocale: PropTypes.func.isRequired
};


Base.defaultProps = {
  myName: ''
};

const mapStateToProps = state => ({
  myName: state.Sample1.data.myName
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
  setLocale: lang => dispatch(setLocale(lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Base);
