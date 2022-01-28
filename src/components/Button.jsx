import * as React from 'react';

const Button = (props) => {
  return (
       <button className={ props.class } type={props.type} onClick={props.click}>
           {props.name}
       </button>
  )
};

export default Button;
