import React from "react";

export const FileUpload = (props) => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const files = event.target.files;
    props.onChange(files);
  };
  return (
    <>
      <button onClick={handleClick} className={props.className}>
        Upload a image
      </button>
      <input
        type="file"
        ref={hiddenFileInput}
        value={props.value}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  );
};
