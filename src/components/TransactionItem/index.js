import './index.css'

const TransactionItem = props => {
  const {transactionItem, deleteHistoryTransaction} = props
  const {id, title, amount, type} = transactionItem

  const onClickDeleteHistory = () => {
    deleteHistoryTransaction(id)
  }

  return (
    <li>
      <p className="item">{title}</p>
      <p className="item">Rs {amount}</p>
      <p className="item">{type}</p>
      <div>
        <button
          type="button"
          testid="delete"
          className="delete-btn"
          onClick={onClickDeleteHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
