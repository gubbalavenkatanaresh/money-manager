// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transaction, deleteTransaction} = props
  const {id, title, amount, type} = transaction

  const onDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button type="button" onClick={onDelete} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
