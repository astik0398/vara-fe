import React, { CSSProperties, useState } from 'react';
import { useCSVReader } from 'react-papaparse';
import TableComponent from './TableComponent';


function Csvcomponent() {

  const { CSVReader } = useCSVReader();
  const [allData, setAllData] = useState([])

  return (
    <>
    <div className='flex justify-center items-center mt-4'>
    <CSVReader
      onUploadAccepted={(results) => {
        setAllData(results)
      }}
    >
      {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
      }) => (
        <>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
           <div>
           <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' type='button' {...getRootProps()}>
              Browse file
            </button>
           </div>
            <div style={{marginTop:'-5px'}}>
              {acceptedFile && acceptedFile.name}
            </div>
          </div>
          <ProgressBar />
        </>
      )}
    </CSVReader>
    </div>
    <div style={{textAlign:'center', marginTop:'10px'}}>
    <TableComponent data={allData}/>
    </div>
    </>
    
  );

}

export default Csvcomponent;
