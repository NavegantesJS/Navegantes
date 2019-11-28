import React from 'react';
import '../styles/components/FlightList.scss';

const FlightList = () => {
  return (
    <div className="container-results">
      <div className="fligth-list">
        <div className="item">
          <div className="city">
            <span>BOG</span>
            {' '}
2:15 p.m
          </div>
          <div className="duration">
            <span>Duración</span>
            {' '}
1h 5m
          </div>
          <div className="city">
            <span>MED</span>
            {' '}
3:20 p.m
          </div>
          <div className="price">
            $ 300.000 COP
            <a href="#" className="button">
              Reservar
            </a>
          </div>
        </div>
        <div className="item">
          <div className="city">
            <span>BOG</span>
            {' '}
3:42 p.m
          </div>
          <div className="duration">
            <span>Duración</span>
            {' '}
1h 5m
          </div>
          <div className="city">
            <span>MED</span>
            {' '}
4:58 p.m
          </div>
          <div className="price">
            $ 310.000 COP
            <a href="#" className="button">
              Reservar
            </a>
          </div>
        </div>
        <div className="item">
          <div className="city">
            <span>BOG</span>
            {' '}
2:15 p.m
          </div>
          <div className="duration">
            <span>Duración</span>
            {' '}
1h 5m
          </div>
          <div className="city">
            <span>MED</span>
            {' '}
3:20 p.m
          </div>
          <div className="price">
            $ 340.000 COP
            <a href="#" className="button">
              Reservar
            </a>
          </div>
        </div>
        <div className="item">
          <div className="city">
            <span>BOG</span>
            {' '}
11:15 p.m
          </div>
          <div className="duration">
            <span>Duración</span>
            {' '}
2h 5m
          </div>
          <div className="city">
            <span>MED</span>
            {' '}
1:20 p.m
          </div>
          <div className="price">
            $ 320.000 COP
            <a href="#" className="button">
              Reservar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightList;
