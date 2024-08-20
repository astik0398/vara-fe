import React from 'react'

const TableComponent = ({data}) => {

    if (!Array.isArray(data.data) || data.data.length === 0) {
        return <h2>No data to display!</h2>;
      }

    const header = data.data[0]
    const rows = data.data.slice(1)
    
  return (
    <div>
        <table>
        <thead>
          <tr>
            {header.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
        </table>
    </div>
  )
}

export default TableComponent