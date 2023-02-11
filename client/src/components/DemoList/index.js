import React from 'react';
import { useSelector } from 'react-redux';

import { Divider, List } from 'antd';
import DemoListItem from '../DemoListItem';

function DemoList() {
  const keys = useSelector(state => state.keys);
  const demoList = useSelector(state => state.demoList);
  const data = demoList.map(
    item => keys.filter(row => item === row.key)[0],
  );

  return (
    <div className="demoList">
      <Divider orientation="left">You may be inetrested in</Divider>
      <List
        className="demoList__list"
        dataSource={data}
        renderItem={({ name, img, key }) => (
          <List.Item key={key}>
            <DemoListItem name={name} img={img} code={key} />
          </List.Item>
        )}
      />
    </div>
  );
}

export default DemoList;
