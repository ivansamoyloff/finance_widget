import React from 'react';
import { useSelector } from 'react-redux';

import { Divider, List } from 'antd';
import WatchListItem from '../WatchListItem';

function WatchList() {
  const keys = useSelector(state => state.keys);
  const watchList = useSelector(state => state.watchList);
  const data = watchList.map(
    item => keys.filter(row => item === row.key)[0],
  );

  return (
    <div data-testid="watchList" className="watchList">
      <Divider orientation="left">You currently watch</Divider>
      <List
        className="watchList__list"
        dataSource={data}
        renderItem={item => (
          <List.Item key={item.key}>
            <WatchListItem item={item} />
          </List.Item>
        )}
      />
    </div>
  );
}

export default WatchList;
