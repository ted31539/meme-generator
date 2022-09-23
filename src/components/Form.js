import React from "react";

function Form(props) {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <div className="input-group">
        <label htmlFor="top-message" className="form-input-label">
          message 1
          <input
            type="text"
            id="top-message"
            name="topMessage"
            value={props.value.topMessage}
            onChange={props.onInputChange}
          />
        </label>
        <label htmlFor="bottom-message" className="form-input-label">
          message 2
          <input
            type="text"
            id="bottom-message"
            name="bottomMessage"
            value={props.value.bottomMessage}
            onChange={props.onInputChange}
          />
        </label>
      </div>
      <input type="submit" className="form-btn" value="Get a new meme image" />
    </form>
  );
}

export default Form;
