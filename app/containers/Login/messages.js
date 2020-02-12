/*
 * Login Messages
 *
 * This contains all the text for the Login container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Login';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Bản đồ du lịch Đà Nẵng',
  },
  textBtnLogin: {
    id: `${scope}.textBtnLogin`,
    defaultMessage: 'Đăng nhập',
  },
  fieldEmail: {
    id: `${scope}.fieldEmail`,
    defaultMessage: 'Trường bắt buộc nhập!',
  },
  fieldPassword: {
    id: `${scope}.fieldPassword`,
    defaultMessage: 'Trường bắt buộc nhập!',
  },
});
