import React from 'react';
import SideBar from './sidebar';
import BoxContainer from './boxContainer';
import './sidebar.scss';

const Container = (props) => {

  return (
    <div id="wrapper" className="toggled" >
      <div id="page-content-wrapper" className="container-fluid" style={{ marginBottom: "2em" }}>
        <SideBar />
        <div className="page-container">
          <BoxContainer />
        </div>
      </div>
    </div>
  );
};

export default Container;