import React from 'react'

export default function Hours({isEditing, value}) {
  return isEditing? (
    <td>
      <input type="text"  value = {value}/>
    </td>
  ) : (
    <td>{value}</td>

  )
}
