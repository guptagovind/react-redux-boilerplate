import React from 'react';
import ReactDom from 'react-dom';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './store/configureStore';
import { LocaleSet } from './actions/Actions';
import './styles/styles.scss';

addLocaleData(en);
addLocaleData(ru);
const store = configureStore();

if (localStorage.lang) {
  store.dispatch(LocaleSet(localStorage.lang));
}

const root = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDom.render(root, document.getElementById('app'));
