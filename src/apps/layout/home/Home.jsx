import React from 'react';
import { Components } from '../../../components';
import { getAllBooks } from '../../../api/api';

import cls from "./index.module.scss";

const Home = () => {
  const [books, setBooks] = React.useState(null);

  React.useEffect(() => {
    const request = getAllBooks();

    request
      .then(res => {
        setBooks(res.data.items)
      })
  }, [])

  if(!books) return <Components.Loader fullHeight={"80vh"}/>

  return (
    <div>
      <Components.Container>
        <div className={cls.row_card}>
          { 
            books?.map(item => <Components.Card 
              key={item.id}
              base={item}
            />)
          }
        </div>
      </Components.Container>
    </div>
  )
}

export default Home;
