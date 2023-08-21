import React, { useContext } from 'react'
import DataContext from '../DataContext/DataContext'

const Listitem = ({data}) => {

  const {deletedata,editdata} = useContext(DataContext);

  return (
    <div className="border border-dark p-2">
    <h1>name:{data.name}</h1>
    <h1>number:{data.number}</h1>
    <button className="btn btn-warning m-2"
    onClick={()=>editdata(data)}
    >Edit</button>
    <button className="btn btn-danger m-2"
    onClick={()=>deletedata(data.id)}
    >Delete</button>
    <button className="btn btn-success m-2"
    > <a className="text-light" href="tel:{data.number}">Call</a> </button>
        
    </div>
  )
}

export default Listitem