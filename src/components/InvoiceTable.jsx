import './InvoiceTable.css';
import React from 'react'
import ModeButtons from './ModeButtons.jsx';
import Description from './Description.jsx';
import Hours from './Hours.jsx';
import Rate from './Rate.jsx';
import TableHeader from './TableHeader';
import AddButton from './AddButton';

export default function InvoiceTable() {
  return (
    <div>
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          <tr>
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
          </tr>
        </tbody>
        <tfoot>
          <AddButton/>
        </tfoot>
      </table>
    </div>
  )
}