import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getData from '../actions/Actions';

class Base extends React.Component {
  getTest = () => {
    this.props.getData();
  };

  render() {
    return (
      <div>
        Hello,
        Webpack 4!! How are you?
        <div className="test-image">
          {this.getTest()}
          myName:
          { this.props.myName }
        </div>
      </div>
    );
  }
}

Base.propTypes = {
  myName: PropTypes.string,
  getData: PropTypes.func.isRequired
};


Base.defaultProps = {
  myName: ''
};

const mapStateToProps = state => ({
  myName: state.Sample1.data.myName
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Base);
