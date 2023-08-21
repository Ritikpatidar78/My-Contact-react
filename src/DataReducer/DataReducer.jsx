const DataReducer = (state, action) => {
    switch (action.type) {
      case "DELETE_DATA":
        return {
          ...state,
          datas: state.datas.filter((item) => item.id !== action.payload),
        };
  
      case "SAVE_DATA":
        return {
          ...state,
          datas: [action.payload, ...state.datas],
        };
  
      case "EDIT_DATA":
        return {
          ...state,
          edit: { data: action.payload, isedit: true },
        };
  
      case "UPDATE_DATA":
        return {
          ...state,
          datas: state.datas.map((item) =>
            item.id === action.payload.id
              ? { ...item, name: action.payload.name, number:action.payload.number }
              : item
          ),
          edit: { data:{}, isedit: false },
        };
    }
  };
  
  export default DataReducer;
  