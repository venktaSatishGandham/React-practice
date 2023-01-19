import React, { useReducer } from "react";
import "./CounterPage.css";
export default function CounterPage({ initialCount }) {
  //   const [count, setCount] = useState(initialCount);
  //   const [valueToAdd, setValueToAdd] = useState("");

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          ...state,
          count: state.count + 1,
        };
      case "decrement":
        return {
          ...state,
          count: state.count - 1,
        };
      case "set_value_to_count":
        return {
          ...state,
          valueToAdd: action.payload,
        };
      case "add_value_to_count":
        return {
          ...state,
          count: state.count + state.valueToAdd,
          valueToAdd: 0,
        };
      default:
        return state;
    }

    /* if (action.type === "increment") {
      return {
        ...state,
        count: state.count + 1,
      };
    } else if (action.type === "decrement") {
      return {
        ...state,
        count: state.count - 1,
      };
    } else if (action.type === "set_value_to_count") {
      return {
        ...state,
        valueToAdd: action.payload,
      };
    } else if (action.type === "add_value_to_count") {
      return {
        ...state,
        count: action.payload,
        valueToAdd: 0,
      };
    }
    return { ...state }; */
  };

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount((count) => count + 1);
    dispatch({
      type: "increment",
    });
  };

  const decrement = () => {
    // setCount((count) => count - 1);
    dispatch({
      type: "decrement",
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    // setCount(count + Number(valueToAdd));
    // setCount(count + valueToAdd);
    dispatch({
      type: "add_value_to_count",
    });
    // setValueToAdd(0);
  };

  const handleInput = (e) => {
    const value = parseInt(e.target.value) || 0;
    // setValueToAdd(value);
    dispatch({
      type: "set_value_to_count",
      payload: value,
    });
  };

  return (
    <div className="counterpage-container">
      <h1 className="title">Count is {state.count}</h1>
      <div className="buttons-component">
        <button className="buttons" onClick={increment}>
          Increment
        </button>
        <button className="buttons" onClick={decrement}>
          Decrement
        </button>
      </div>
      <form onSubmit={handleForm}>
        <label className="label">Add a lot</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray border border-gray-300"
          value={state.valueToAdd || 0}
          onChange={handleInput}
        />
        <button type="submit" className="buttons">
          Add it!
        </button>
      </form>
    </div>
  );
}
