import React from 'react';
import '../styles/components/FlightList.scss';

const FlightList = () => {
  return (
    <div className="container-results">
      <div className="fligth-list">
        <div className="item">
          <div className="">
            <img src="" alt="" />
          </div>
          <div className="">BOG 2:15 p.m</div>
          <div className="">Duración 1h 5m</div>
          <div className="">MED 3:20 p.m</div>
          <div className="">
            $ 300.000 COP
            <a href="#">Reservar</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightList;
