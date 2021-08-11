import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="money-details-cards-container">
      <div className="card-container your-balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-detail-image"
        />
        <div className="card-info">
          <p className="card-title">Your Balance</p>
          <p className="money-details" testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="card-container your-income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-detail-image"
        />
        <div className="card-info">
          <p className="card-title">Your Income</p>
          <p className="money-details" testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="card-container your-expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-detail-image"
        />
        <div className="card-info">
          <p className="card-title">Your Expenses</p>
          <p className="money-details" testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
