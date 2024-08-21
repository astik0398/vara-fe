import React, { useState } from 'react'

const TableComponent = ({data}) => {

  const [columnSelect, setColumnSelect] = useState(null)
  const [rowSelect, setRowSelect] = useState(null)

    if (!Array.isArray(data.data) || data.data.length === 0) {
        return <h2 className='text-2xl'>No data to display! Please upload a CSV file!</h2>;
    }

    const header = data.data[0]
    const rows = data.data.slice(1)

    function handleColumnSel(ind){
      setColumnSelect(ind)
    }

    function handleRowSel(ind){
      setRowSelect(ind)
    }
    
  return (
    <div >
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" style={{border:'1px solid #a1a2a4', margin:'auto'}}>
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {header.map((header, index) => (
              <th onClick={()=> handleColumnSel(index)} scope="col" className={`hover:bg-gray-500 hover:text-white cursor-pointer px-6 py-3 ${columnSelect==index ? 'bg-gray-500 text-white' : ''}`} key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr onClick={()=> handleRowSel(rowIndex)} className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${rowSelect == rowIndex ? 'bg-yellow-400 text-white' : ''}`} key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td className={`cursor-pointer px-6 py-4 ${columnSelect == cellIndex ? 'bg-yellow-500 text-white' : ''}`} key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
        </table>
    </div>
  )
}

export default TableComponent