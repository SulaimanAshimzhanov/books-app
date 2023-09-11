import React from 'react';
import {FaTimes} from "react-icons/fa";

import cls from './index.module.scss';

const ModalWindow = ({data}) => {
    console.log(data)
    

    
  return (
    <div className={cls.modal}>
        <div className={cls.modal_window}>
                <button className={cls.close}><FaTimes/></button>
                <div className={cls.modal_window_wrapper}>
                    <img src="https://gifts.tcd.ie/media/catalog/product/b/o/book-of-kells-gift-edition-1.jpg" alt="" />
                    <div className={cls.modal_window_wrapper_info}>
                        <u>Categories</u>
                        <h3>Title</h3>
                        <u>Authors</u>
                        <p>Description</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ModalWindow;
