import React from 'react'

export default function Description({isEditing, value}) {
  return isEditing? (
    <td>
      <input type="text"  value = {value}/>
    </td>
  ) : (
    <td>{value}</td>

  )
}
