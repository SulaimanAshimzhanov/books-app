import React from 'react';

import "./index.scss";

const Loader = ({fullHeight}) => {
  return (
    <div className="loader_container" style={{height: fullHeight}}>
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader;
