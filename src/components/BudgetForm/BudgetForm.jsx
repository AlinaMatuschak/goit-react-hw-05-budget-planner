import React, { Component } from 'react';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

export default class BudgetForm extends Component {
  state = {
    budget: '',
  };

  handleChange = e => this.setState({ budget: e.target.value });

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave(Number(this.state.budget));
    this.setState({ budget: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Enter your total budget
          <Input
            type="number"
            value={this.state.budget}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}
