/*
 * Layout Messages
 *
 * This contains all the text for the Layout container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Layout';

export default defineMessages({
  menuTongQuan: {
    id: `${scope}.menuTongQuan`,
    defaultMessage: 'Tổng quan',
  },
  menuTaiNguyen: {
    id: `${scope}.menuTaiNguyen`,
    defaultMessage: 'Tài nguyên',
  },
  menuDiaDiem: {
    id: `${scope}.menuDiaDiem`,
    defaultMessage: 'Địa điểm',
  },
  menuLoaiHinh: {
    id: `${scope}.menuLoaiHinh`,
    defaultMessage: 'Loại hình địa điểm',
  },
  menuNguoiDung: {
    id: `${scope}.menuNguoiDung`,
    defaultMessage: 'Người dùng',
  },
});
