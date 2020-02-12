/*
 * Header Messages
 *
 * This contains all the text for the Header container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Header';

export default defineMessages({
  settingTextConfig: {
    id: `${scope}.settingTextConfig`,
    defaultMessage: 'Cấu hình',
  },
  settingTextLogout: {
    id: `${scope}.settingTextLogout`,
    defaultMessage: 'Đăng xuất',
  },
});
