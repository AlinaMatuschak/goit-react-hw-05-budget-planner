import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';
import saveBudget from '../../redux/Budget/budgetActions';

class BudgetForm extends Component {
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

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(saveBudget(value)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
