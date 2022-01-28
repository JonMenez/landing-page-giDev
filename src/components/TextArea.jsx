import * as React from 'react';

const TextArea = (props) => {
  return (
    <div className="form-group">
      <label className={props.classLabel}>{props.title}</label>
      <textarea
        className={props.classInput}
        name={props.name}
        placeholder={props.placeholder}
      />
  </div>
  )
};

export default TextArea;
