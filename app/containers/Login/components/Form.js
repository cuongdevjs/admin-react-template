import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Icon } from 'antd';
import { FormattedMessage } from 'react-intl';

import messages from '../messages';
import { FormWrapper } from './Form.css';
import Title from './Title';

// eslint-disable-next-line no-unused-vars
const FormContent = forwardRef((props, ref) => {
  const { getFieldDecorator, validateFields } = props.form;
  return (
    <FormWrapper ref={ref}>
      <Title />
      <Form
        onSubmit={e => {
          e.preventDefault();
          validateFields((err, value) => {
            if (!err) props.handleSubmit(value);
          });
        }}
      >
        <Form.Item hasFeedback>
          {getFieldDecorator('email', {
            rules: [
              {
                required: true,
                message: <FormattedMessage {...messages.fieldEmail} />,
              },
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.5)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: <FormattedMessage {...messages.fieldPassword} />,
              },
            ],
          })(
            <Input.Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">
            <FormattedMessage {...messages.textBtnLogin} />
          </Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
});

FormContent.propTypes = {
  form: PropTypes.object,
  email: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const FormContainer = Form.create({
  name: 'Form',
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      email: Form.createFormField({
        ...props.email,
        value: props.email.value,
      }),
      password: Form.createFormField({
        ...props.password,
        value: props.password.value,
      }),
    };
  },
})(FormContent);

export default FormContainer;
