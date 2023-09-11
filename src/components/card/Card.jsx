import React from 'react';

import cls from "./index.module.scss";

const Card = ({base, setShow}) => {
  

    const info = base.volumeInfo;
    
  return (
    <div className={cls.card}>
      <img src={info.imageLinks.thumbnail} alt=''/>
      <u>{info.categories}</u>
      <h3>{info.title}</h3>
      <p>{info.authors}</p>
    </div>
  )
}

export default Card;
