import React, { useContext } from 'react'
import Listitem from './Listitem'
import DataContext from '../DataContext/DataContext'

const Listgroup = () => {
  const {datas} = useContext(DataContext);

  return (
    <div className="p-3">
        {datas.map((item) => (
          <Listitem key={item.id} data={item}/>
          
        ))}
    </div>
  )
}

export default Listgroup