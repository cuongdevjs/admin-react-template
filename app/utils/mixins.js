import { notification, message, Modal } from 'antd';
const { confirm } = Modal;

export function uid() {
  return (
    Date.now().toString(36) +
    Math.random()
      .toString(36)
      .substr(2, 5)
  ).toUpperCase();
}

export function debounce(func, wait, immediate) {
  let timeout;
  // eslint-disable-next-line func-names
  return function() {
    const context = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    // eslint-disable-next-line func-names
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export const convertObjToParams = obj => {
  const arrsParams = Object.entries(obj)
    .map(([key, value]) =>
      [key, '=', value.toString().replace(/\s+/g, '')].join(''),
    )
    .join('&');
  return ['?', arrsParams].join('');
};

export const mergeTwoArrs = (arr1, arr2) =>
  arr1.concat(
    // eslint-disable-next-line no-underscore-dangle
    arr2.filter(item => arr1.findIndex(ele => ele._id === item._id) === -1),
  );

export function openNotificationWithIcon(
  type,
  messages,
  description,
  duration,
  placement,
) {
  const config = {
    message: messages || '',
    description: description || '',
  };
  notification.config({
    duration: duration && duration > 1 ? duration : 2,
    placement: placement || 'topRight',
    closeIcon: true,
  });
  notification[type](config);
}

export function openMessageWithIcon(type, content, duration) {
  message[type](content || '', duration && duration > 1 ? duration : 2);
}

export function openConfirmPopup(title, content, cbOk, cbCancel) {
  confirm({
    title,
    content,
    okText: 'Confirm',
    okType: 'danger',
    cancelText: 'Cancel',
    onOk() {
      if (typeof cbOk === 'function') cbOk();
    },
    onCancel() {
      if (typeof cbCancel === 'function') cbCancel();
    },
  });
}

export function formatAntFormToObject(form) {
  const obj = {};
  Object.entries(form).forEach(([key, value]) => {
    obj[key] = value.value;
  });
  return obj;
}

export const formatObjToFormAntd (form){
  const obj= {};
  Object.entries(form).forEach(([key, value]) => {
    obj[key] = { value };
  });
  return obj;
};

export function notiErrorFormAnt (err)  {
  err &&
    Object.values(err).forEach(errs => {
      errs.errors.forEach(err  => {
        openMessageWithIcon('error', `${err.field}: ${err.message}`, 2.5);
      });
    });
};
