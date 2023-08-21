import { createContext, useReducer } from "react";
import DataReducer from "../DataReducer/DataReducer";



const DataContext = createContext();

export const DataProvider = ({children}) => {

    const initialState = {
        datas:[],
        edit: {data:{}, isedit: false},
    }

    const [ state,dispatch] = useReducer(DataReducer,initialState)

    const deletedata = (id) => {
        dispatch({
          type: "DELETE_DATA",
          payload: id,
        });
      };
    
      const saveData = (name,number) => {
        const newData = {
          id: crypto.randomUUID(),
          name: name,
          number: number,
        };
    
        dispatch({
          type: "SAVE_DATA",
          payload: newData,
        });
      };
    
      const editdata = (exitstingdata) => {
        dispatch({
          type: "EDIT_DATA",
          payload: exitstingdata,
        });
      };
    
      const updateData = (oldId, newname, newnumber) => {
        const updatedData = {
          id: oldId,
          name: newname,
          number: newnumber,
        };
    
        dispatch({
          type: "UPDATE_DATA",
          payload: updatedData,
        });
      };



    return (
        <DataContext.Provider
        value={{ datas: state.datas ,edit:state.edit,updateData, deletedata,saveData,editdata }}
        >{children}</DataContext.Provider>
    );
};

export default DataContext;
