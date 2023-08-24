import './InvoiceTable.css';
import React from 'react'
// import ModeButtons from './ModeButtons.jsx';
// import Description from './Description.jsx';
// import Hours from './Hours.jsx';
// import Rate from './Rate.jsx';
import TableHeader from './TableHeader';
import AddButton from './AddButton';
import TableRow from './TableRow';
import { useState } from 'react';

let globalId = 5


export default function InvoiceTable({initialInvoiceList}) {

  const [currentList, setCurrentList]= useState(initialInvoiceList)

  const addRow = () => {
    const newInvoiceList = [...currentList]
    const newRow = {
      id: globalId,
      description: 'Description',
      rate: '',
      hours: ''
    }

    newInvoiceList.push(newRow)

    setCurrentList(newInvoiceList)

    globalId++
  }

  const deleteRow = (id) => {
    const filteredList = currentList.filter(el => el.id !== id)

    setCurrentList(filteredList)
  }

  const rows = currentList.map((invoiceItem) => {

    const{id, description, rate, hours} = invoiceItem

    return (
      <TableRow
      key={id}
      initialInvoiceData={{description: description, rate: rate, hours: hours}}
      initialIsEditing={false}
      deleteFunc={() => deleteRow(id)}
      />
    )
  })

  return (
    <div>
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>

          {rows}


          {/* <TableRow 
          initialInvoiceData={{description: 'Janitor', rate: 50, hours: 40}}
          initialIsEditing={false}/>

          <TableRow 
          initialInvoiceData={{description: 'Space Janitor', rate: 5000, hours: 404}}
          initialIsEditing={true}/> */}

          {/* <tr>
            <ModeButtons isEditing={false} />
            <Description isEditing={false} value='Web Developer'/>
            <Rate isEditing={false} value ={50}/>
            <Hours isEditing={false} value={40}/>
          </tr>
          <tr>
            <ModeButtons isEditing={true} />
            <Description isEditing={true} value='Zookeeper'/>
            <Rate isEditing={true} value ={1000000}/>
            <Hours isEditing={true} value={5}/>
          </tr> */}
        </tbody>
        <tfoot>
          <AddButton addClick={addRow}/>
        </tfoot>
      </table>
    </div>
  )
}