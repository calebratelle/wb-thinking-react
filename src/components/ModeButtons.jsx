import React from 'react'

export default function ModeButtons({isEditing, editClick, saveClick}) {


  return isEditing ? (
    <td>
      <button onClick={saveClick}>Save</button>
    </td>
  ) : (
    <td>
      <button>Delete</button>
      <button onClick={editClick}>Edit</button>
    </td>
  )
}
