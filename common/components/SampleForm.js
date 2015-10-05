import React, { Component, PropTypes } from 'react';

import EditableField from '../editable-fields'

class Sampleform extends Component {

  render() {
    const {form, updateField} = this.props;
    const {values, fields, editing, help, title} = form;

    const txt = JSON.stringify(values, null, 2);

    return (
      <div className="section good-width mlrauto">
        <div className="container-fluid">
          <div className="row">
            <pre className="sample-output">{txt}</pre>
            {title ? <h2>{title}</h2> : false}
            {help ? <p>{help}</p> : false}
            <div className="nice-form col-md-12">
              { fields.map(field =>
                <EditableField
                  key={field.id}
                  defaultValue={values[field.id]}
                  onSubmit={(value) => updateField(field.id, value)}
                  {...field}
                />)
              }
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
