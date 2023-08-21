import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../DataContext/DataContext'

const Form = () => {
    const {saveData,edit,updateData} = useContext(DataContext);

    const [ name, setname] = useState("");
    const [ number, setnumber] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
        if(edit.isedit){
            updateData(edit.data.id,name,number)
        }
        else{
            saveData(name,number);
        }
        setname("");
        setnumber("");
    }

    useEffect(() => {
        setname(edit.data.name);
        setnumber(edit.data.number);
    },[edit]);

    return (
        <div>
            <form className="m-3" onSubmit={(e) => handlesubmit (e) }>
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => setname(e.target.value)}
                    value={name}
                    required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Number:</label>
                    <input type="text" className="form-control" 
                        onChange={(e) => setnumber(e.target.value)}
                        value = {number}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form