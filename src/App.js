import React, { useEffect, useState } from 'react';
import './App.css';
import { getData } from './api/data'
import Listitems from './components/Listitems';

function App() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [listsPerPage, setListsPerPage] = useState(4)

  useEffect(() => {
    getData().then((array) => setData(array))
  }, [])

  const lastListIndex = currentPage * listsPerPage;
  const firstListIndex = lastListIndex - listsPerPage;
  const currentList = data.slice(firstListIndex, lastListIndex)

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <h1 className='my-8 text-4xl font-bold inline-flex'>Assignment</h1>
      {
        currentList.map((item) => (
          <Listitems key={item.id} company={item.company.name} contact={item.name} city={item.address.city}
            street={item.address.street} company_des={item.company.catchPhrase} website={item.website} email={item.email} phone={item.phone} address={item.address} />
        ))
      }
      <div className="pages">
        <button className='bg-blue-700 rounded-md mt-20 mb-8 px-3 py-1 text-white mx-2' onClick={() => setCurrentPage(1)}>1</button>
        <button className='bg-blue-700 rounded-md mt-20 mb-8 px-3 py-1 text-white mx-2' onClick={() => setCurrentPage(2)}>2</button>
        <button className='bg-blue-700 rounded-md mt-20 mb-8 px-3 py-1 text-white mx-2' onClick={() => setCurrentPage(3)}>3</button>
      </div>
    </div>
  );
}

export default App;
