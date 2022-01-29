import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import arrowBack from '@icons/arrow-back.svg'
import '@styles/backButton.scss'

const BackButton = () => {

  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  return (
      <button className='backButton' onClick={ goBack }>
          <img className='backButton__icon' src={ arrowBack } alt='arrow back icon' />
      </button>
  )
};

export default BackButton;
