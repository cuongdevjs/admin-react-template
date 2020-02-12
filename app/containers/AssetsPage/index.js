/**
 *
 * AssetsPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAssetsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function AssetsPage() {
  useInjectReducer({ key: 'assetsPage', reducer });
  useInjectSaga({ key: 'assetsPage', saga });

  return (
    <div>
      <Helmet>
        <title>AssetsPage</title>
        <meta name="description" content="Description of AssetsPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AssetsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  assetsPage: makeSelectAssetsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AssetsPage);
