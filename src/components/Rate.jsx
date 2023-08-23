import formatCurrency from '../utils/formatCurrency.js'

export default function Rate({isEditing, value}) {
  return isEditing? (
    <td>
      <input type="text"  value = {value}/>
    </td>
  ) : (
    <td>{formatCurrency(value)}</td>

  )
}
