import { useState } from "react";

const AddCategory = ({ onNewCatgory }) => {
  const [inputValue, setinputValue] = useState("Peaky blinders");

  const onChangeInputValue = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCatgory(inputValue.trim())
    setinputValue("");
  };
  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Search a gif"
        value={inputValue}
        onChange={onChangeInputValue}
      />
    </form>
  );
};

export default AddCategory;
