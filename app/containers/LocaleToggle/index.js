/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { FormattedMessage } from 'react-intl';
import { LocaleWrapper, LocaleItem } from './Wrapper';
import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';
import messages from './messages';

function LocaleToggle(props) {
  const formatCountry = locale => {
    switch (locale) {
      case 'en':
        return <FormattedMessage {...messages.en} />;
      case 'de':
        return <FormattedMessage {...messages.de} />;
      case 'vi':
        return <FormattedMessage {...messages.vi} />;
      default:
        return '';
    }
  };
  return (
    <LocaleWrapper className="toggleLocale">
      {appLocales.map(locale => (
        <LocaleItem
          key={locale}
          onClick={() => props.onLocaleToggle(locale)}
          active={locale === props.locale}
        >
          {formatCountry(locale)}
        </LocaleItem>
      ))}
    </LocaleWrapper>
  );
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
);

function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: locale => dispatch(changeLocale(locale)),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocaleToggle);
