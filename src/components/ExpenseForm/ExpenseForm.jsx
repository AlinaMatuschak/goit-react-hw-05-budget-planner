import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { saveExpense } from '../../redux/Expense/expenseActions';

class ExpenseForm extends Component {
  state = {
    name: '',
    amount: '',
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    const { name, amount } = this.state;
    e.preventDefault();

    this.props.onSave(name, amount);
    this.setState({ name: '', amount: '' });
  };

  render() {
    const { name, amount } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSave: (name, amount) => dispatch(saveExpense(name, amount)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
