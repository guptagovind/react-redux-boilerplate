const data = {
  myName: 'Govind'
};

export const getData = () => ({
  type: 'GET_DATA',
  data
});

export const LocaleSet = lang => ({
  type: 'SET_LANG',
  lang
});

export const setLocale = lang => (dispatch) => {
  localStorage.lang = lang;
  dispatch(LocaleSet(lang))
};
