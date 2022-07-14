import React from "react";

function Form(props) {
  return (
    <form>
      <input 
        type="text" 
        onChange={props.handleFirstNameChange}
        value={props.firstName} 
      />
      <input
        type="text"
        onChange={props.handleFirstNameChange}
        value={props.firstName} 
      />  
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
