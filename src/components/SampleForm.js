import React, { Component } from 'react';

import EditableField from '../editable-fields'

export default class Sampleform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: 'kai@kaicurry.com',
        date: null,
        id: 'x245'
      }
    };
  }

  handleInput(name, value) {
    console.log(name, value);
    const newSt = {form: this.state.form}
    newSt.form[name] = value;
    this.setState(newSt);
  }

  render() {
    const {form} = this.state;
    const txt = JSON.stringify(form);
    const validateName = function(val) {
      const valParts = val.split(' ');
      if (valParts.length > 1 && valParts[0].length > 1 && valParts[1].length > 1 && valParts.length < 5) {
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
                onSubmit={(value) => this.handleInput('name', value)}
                defaultValue={form.name}
                validate={validateName}
                errorMessage="Please use your full name."
              />
              <EditableField
                type="email"
                id="email"
                onSubmit={(value) => this.handleInput('email', value)}
                defaultValue={form.email}
                required={true}
              />
              <EditableField
                type="dateTime"
                label="Birthday"
                onSubmit={(value) => this.handleInput('date', value)}
                defaultValue={form.date}
              />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
