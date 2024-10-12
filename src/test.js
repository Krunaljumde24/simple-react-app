// Action
const addTodoAction = {
  type: "todo/todoAdd",
  payload: "Read a book",
};

const initialState = { value: 0 };

let handleCountChange = (event) => {
  event.preventDefault();

  
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/increment":
      return {
        ...state,
        value: state.value + 1,
      };

    case "counter/decrement":
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }

  //   if (action.type === "counter/increment") {
  //     return {
  //       ...state,
  //       value: state.value + 1,
  //     };
  //   } else if (action.type === "counter/decrement"){
  //     return {
  //         ...state,
  //         value: state.value - 1;
  //     }
  //   } return state;
}
