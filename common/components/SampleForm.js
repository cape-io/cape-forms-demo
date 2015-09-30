import React, { Component, PropTypes } from 'react';

import EditableField from '../editable-fields'

class Sampleform extends Component {

  render() {
    const {form, updateField} = this.props;
    const {values, fields, editing, help, title} = form;

    const txt = JSON.stringify(values, null, 2);
    const validateName = function(val) {
      const valParts = val.split(' ');
      if (valParts.length > 1 && valParts[0].length > 1 && valParts[valParts.length - 1].length > 1 && valParts.length < 5) {
        return false;
      }
      return true;
    }
    return (
      <div className="section good-width mlrauto">
        <div className="container-fluid">
          <div className="row">
            <div className="sample-output">{txt}</div>
            {title ? <h2>{title}</h2> : false}
            {help ? <p>{help}</p> : false}
            <div className="nice-form col-md-12">

              <EditableField
                type="text"
                id="id"
                label="User Id"
                defaultValue={values.id}
                editable={false}
              />
              <EditableField
                type="text"
                id="name"
                label="Full Name"
                onSubmit={(value) => updateField('name', value)}
                defaultValue={values.name}
                validate={validateName}
                errorMessage="Please use your full name."
              />
              <EditableField
                type="email"
                id="email"
                onSubmit={(value) => updateField('email', value)}
                defaultValue={values.email}
                required={true}
              />
              <EditableField
                type="dateTime"
                label="Birthday"
                onSubmit={(value) => updateField('date', value)}
                defaultValue={values.date}
              />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
Sampleform.propTypes = {
  updateField: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired
};

export default Sampleform;
