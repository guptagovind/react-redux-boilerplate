import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Base from './Base';
import NotFoundPage from './NotFoundPage';
import Messages from '../../config/lang/Messages';

export const history = createHistory();


class App extends Component {
  routes = () => (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Base} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );

  render() {
    const { lang } = this.props;
    return (
      <IntlProvider
        locale={lang}
        messages={Messages[lang]}
      >
        <div>
          {this.routes()}
        </div>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  lang: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  lang: state.Locale.lang
});

export default connect(mapStateToProps)(App);
