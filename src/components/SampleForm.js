import React, { Component, PropTypes } from 'react';

import EditableField from '../editable-fields'

class Sampleform extends Component {

  render() {
    const {form, updateField} = this.props;
    const txt = JSON.stringify(form);
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
            <h2>Profile</h2>
            <p>Click to edit</p>
            <div className="nice-form col-md-12">

              <EditableField
                type="text"
                id="id"
                label="User Id"
                defaultValue={form.id}
                editable={false}
              />
              <EditableField
                type="text"
                id="name"
                label="Full Name"
                onSubmit={(value) => updateField('name', value)}
                defaultValue={form.name}
                validate={validateName}
                errorMessage="Please use your full name."
              />
              <EditableField
                type="email"
                id="email"
                onSubmit={(value) => updateField('email', value)}
                defaultValue={form.email}
                required={true}
              />
              <EditableField
                type="dateTime"
                label="Birthday"
                onSubmit={(value) => updateField('date', value)}
                defaultValue={form.date}
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
