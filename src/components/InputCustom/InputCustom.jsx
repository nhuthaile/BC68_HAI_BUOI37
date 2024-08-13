import React from "react";

const InputCustom = ({
  labelContent,
  type = "text",
  placeholder,
  name,
  touched,
  onBlur,
  error,
  onChange,
  value,
}) => {
  return (
    <div>
      <label className="mt-5 inline-block ">{labelContent}</label>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className="w-full px-3 py-2 border border-black rounded-md"
      />
      {touched && error ? <div className="text-red-500 ">{error}</div> : null}
    </div>
  );
};

export default InputCustom;
