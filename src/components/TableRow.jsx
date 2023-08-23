import React from 'react'
import ModeButtons from './ModeButtons.jsx';
import Description from './Description.jsx';
import Hours from './Hours.jsx';
import Rate from './Rate.jsx';
import formatCurrency from '../utils/formatCurrency.js';

export default function TableRow({initialInvoiceData, initialIsEditing}) {
  const {description, rate, hours} = initialInvoiceData

  return (
    <tr>
    <ModeButtons isEditing={initialIsEditing} />
    <Description isEditing={initialIsEditing} value={description}/>
    <Rate isEditing={initialIsEditing} value ={rate}/>
    <Hours isEditing={initialIsEditing} value={hours}/>
    <td>{formatCurrency(rate * hours)}</td>
  </tr>
  )
}
