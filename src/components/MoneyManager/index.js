import {Component} from 'react'
import {v4 as uuid} from 'uuid'
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

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    optionType: transactionTypeOptions[0].optionId,
    transactionHistory: [],
  }

  addTransaction = () => {
    const {amountInput, titleInput, optionType} = this.state

    const type = transactionTypeOptions.find(
      item => item.optionId === optionType,
    )

    const {displayText} = type

    const newTransaction = {
      id: uuid(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionHistory: [...prevState.transactionHistory, newTransaction],
      titleInput: '',
      amountInput: '',
      optionType: transactionTypeOptions[0].displayText,
    }))
  }

  changeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  changeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  changeOptionType = event => {
    this.setState({optionType: event.target.value})
  }

  deleteHistoryTransaction = id => {
    const {transactionHistory} = this.state
    const filteredTransactionList = transactionHistory.filter(
      item => item.id !== id,
    )
    this.saveTransactionData(filteredTransactionList)
    this.setState({transactionHistory: filteredTransactionList})
  }

  getBalanceAmount = () => {
    const {transactionHistory} = this.state
    let balance = 0
    let expenses = 0
    let income = 0

    transactionHistory.forEach(item => {
      if (item.type === transactionTypeOptions[0].displayText) {
        income += item.amount
      } else {
        expenses += item.amount
      }
    })

    balance = income - expenses

    return balance
  }

  getIncomeAmount = () => {
    const {transactionHistory} = this.state
    let income = 0

    transactionHistory.forEach(item => {
      if (item.type === transactionTypeOptions[0].displayText) {
        income += item.amount
      }
    })

    return income
  }

  getExpensesAmount = () => {
    const {transactionHistory} = this.state
    let expenses = 0

    transactionHistory.forEach(item => {
      if (item.type === transactionTypeOptions[1].displayText) {
        expenses += item.amount
      }
    })

    return expenses
  }

  renderTransactionsContainer = () => {
    const {titleInput, amountInput, optionType} = this.state

    return (
      <div className="container transactions">
        <h1 className="container-title">Add Transaction</h1>
        <div className="input-container">
          <label htmlFor="title">TITLE</label>
          <input
            id="title"
            type="text"
            onChange={this.changeTitleInput}
            value={titleInput}
            placeholder="TITLE"
          />
        </div>
        <div className="input-container">
          <label htmlFor="amount">AMOUNT</label>
          <input
            id="amount"
            type="numbers"
            onChange={this.changeAmountInput}
            value={amountInput}
            placeholder="AMOUNT"
          />
        </div>
        <div className="input-container">
          <label htmlFor="select">TYPE</label>
          <select
            id="select"
            onChange={this.changeOptionType}
            value={optionType}
          >
            {transactionTypeOptions.map(item => (
              <option value={item.optionId} key={item.optionId}>
                {item.displayText}
              </option>
            ))}
          </select>
        </div>
        <button type="button" onClick={this.addTransaction} className="add-btn">
          Add
        </button>
      </div>
    )
  }

  renderHistoryTransactions = () => {
    const {transactionHistory} = this.state

    return (
      <div className="container history">
        <h1 className="container-title">History</h1>
        <div className="history-items-container">
          <ul>
            <li className="columns">
              <p className="column-name">Title</p>
              <p className="column-name">Amount</p>
              <p className="column-name">Type</p>
            </li>
            {transactionHistory.map(item => (
              <TransactionItem
                key={item.id}
                transactionItem={item}
                deleteHistoryTransaction={this.deleteHistoryTransaction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderHeaderCard = () => (
    <div className="app-header">
      <h1 className="user-name">Hi, Arun</h1>
      <p className="welcome-greet">
        Welcome back to your <span>Money Manager</span>
      </p>
    </div>
  )

  render() {
    const balance = this.getBalanceAmount()
    const income = this.getIncomeAmount()
    const expenses = this.getExpensesAmount()

    return (
      <div className="app-container">
        {this.renderHeaderCard()}
        <div className="money-details-cards-container">
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
        </div>
        <div className="transactions-history-container">
          {this.renderTransactionsContainer()}
          {this.renderHistoryTransactions()}
        </div>
      </div>
    )
  }
}

export default MoneyManager
