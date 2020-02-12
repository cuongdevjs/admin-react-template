import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from '../messages';
import { TitleWrapper } from './Title.css';

const Title = () => (
  <TitleWrapper>
    <FormattedMessage {...messages.title} />
  </TitleWrapper>
);

export default Title;
