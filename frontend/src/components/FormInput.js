import { useState, useEffect } from "react";

const FormInput = (props) => {
  const name = props.value;

  const [input, setInput] = useState(name);

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
    props.onSave(event.target.value);
  };

  useEffect(() => {
    setInput(props.value);
  }, [props.value]);

  return (
    <input
      type="text"
      className="block py-2.5 px-1 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none text-black"
      value={input}
      onChange={inputChangeHandler}
    />
  );
};

export default FormInput;
