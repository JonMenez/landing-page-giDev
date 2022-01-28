import * as React from 'react';

const Input = ( props ) => {
  return (
      <div>
          <label htmlFor={props.name} className={props.classLabel}>{props.title}</label>
          <input
            className={props.classInput}
            id={props.name}
            name={props.name}
            type={props.type}
            placeholder={props.placeholder} 
          />
      </div>
  )
};

export default Input;
