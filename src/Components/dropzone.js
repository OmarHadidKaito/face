import React from "react";
import Dropzone from "react-dropzone";

export const DropZone = (props) => {
  const onDrop = (acceptedFiles) => {
    props.onChange(acceptedFiles);
  };

  return (
    <Dropzone noClick={true} onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps({ className: props.className })}>
            <input {...getInputProps()} onChange={onDrop} />
            <p>Or drag and drop an image</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};
