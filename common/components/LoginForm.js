import React, {PropTypes} from 'react';
import Email from '../editable-fields/input/Email';

const LoginForm = ({title, email, updateEmail}) => (
  <div className="section good-width mlrauto">
    <div className="container-fluid">
      <div className="row">
        <h2>{title}</h2>
        <Email id="email" onChange={updateEmail} value={email.value} />
      </div>
    </div>
  </div>
)

LoginForm.propTypes = {
  title: PropTypes.string.isRequired
};

export default LoginForm;
