import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';

import { Typography, Slider } from 'antd';
import DemoList from '../DemoList';
import WatchList from '../WatchList';

import { updateData } from '../../utils/actions';

const { Title } = Typography;
const socket = io('http://localhost:4000/');

function Container() {
  const dispatch = useDispatch();
  const demoList = useSelector((state) => state.demoList);
  const watchList = useSelector((state) => state.watchList);

  useEffect(() => {
    socket.emit('setTimer', 5000);
    socket.on('ticker', response => {
      response.map(item => dispatch(updateData(item)));
    });

    return () => {
      socket.off('setTimer');
      socket.off('ticker');
    };
  }, [dispatch]);

  return (
    <div className="container">
      <Title className="container__title" level={2}>
        Watch your tickerz
      </Title>
      {demoList.length === 0 ? null : <DemoList />}
      {watchList.length === 0 ? null : (
        <>
          <Title level={4}>Change update timer</Title>
          <Slider
            defaultValue={5}
            min={1}
            max={10}
            style={{ minWidth: '300px' }}
            onAfterChange={e => socket.emit('setTimer', e * 1000)}
          />
        </>
      )}
      {watchList.length === 0 ? null : <WatchList />}
    </div>
  );
}

export default Container;
