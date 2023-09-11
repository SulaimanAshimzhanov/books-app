import React from 'react'
import { Components } from '..';
import { ListCategories, ListSort } from '../../utils/Lists';

import cls from "./index.module.scss";

const Header = () => {
  return (
    <header >
        <Components.Container>
            <div className={cls.header}>
                <h1>Books app</h1>

                <div>
                    <div className={cls.search}>
                        <Components.TextInput
                            type="text"
                            placeholder="Search.."
                        />
                        <button>Find</button>
                    </div>


                    <div className={cls.header_wrapper}>
                        <div className={cls.header_wrapper_content}>
                            <h2>Categories</h2>
                            <select>
                                {
                                    ListCategories.map(item => (                      
                                        <option key={item.id} value={item.title}>{item.title}</option>                     
                                    ))
                                }
                            </select>
                        </div>
                        <div className={cls.header_wrapper_content}>
                            <h2>Sorting by</h2>
                            <select>
                                {
                                    ListSort.map(item => (                      
                                        <option key={item.id} value={item.title}>{item.title}</option>                     
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </Components.Container>
    </header>
  )
}

export default Header;
