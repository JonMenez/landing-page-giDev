import * as React  from 'react';
import CardProject from '@components/CardProject'
import '@styles/slider.scss'

const Slider = (props) => {
  return (
    <div className='slider' id={props.idStyle}>
    <CardProject />
    <CardProject />
    </div>
  )
};

export default Slider;
