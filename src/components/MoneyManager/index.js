import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    id: v4(),
    transactionsList: [],
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    type: 'Income',
  }

  deleteTransaction = id => {
    console.log(id)
  }

  onSubmitDetails = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: v4(),
      title,
      amount,
      type,
    }
    if (type === 'Income') {
      this.setState({income: amount})
    } else {
      this.setState({expenses: amount})
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: '',
      amount: '',
    }))
  }

  getTitle = event => {
    this.setState({title: event.target.value})
  }

  getAmount = event => {
    this.setState({amount: event.target.value})
  }

  getType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {id, transactionsList, income, expenses, title, amount} = this.state
    return (
      <div className="container">
        <div className="card-1">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your{' '}
            <span className="top-manager">Money Manager</span>
          </p>
        </div>
        <div className="card-2">
          <MoneyDetails income={income} expenses={expenses} key={id} />
        </div>
        <div className="card-3">
          <form className="form-container" onSubmit={this.onSubmitDetails}>
            <h1>Add Transaction</h1>
            <label htmlFor="title">TITLE</label>
            <input
              type="text"
              id="title"
              placeholder="TITLE"
              onChange={this.getTitle}
              value={title}
            />
            <label htmlFor="amount">AMOUNT</label>
            <input
              type="text"
              id="amount"
              placeholder="AMOUNT"
              onChange={this.getAmount}
              value={amount}
            />
            <label htmlFor="type">TYPE</label>
            <select id="type" onChange={this.getType}>
              {transactionTypeOptions.map(eachOption => (
                <option value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
          <div className="result-container">
            <h1>History</h1>

            <ul className="list-container">
              <li className="result-head">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
                <p> </p>
              </li>
              {transactionsList.map(eachTransaction => (
                <TransactionItem
                  transaction={eachTransaction}
                  key={eachTransaction.id}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
