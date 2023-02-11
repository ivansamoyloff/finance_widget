import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Avatar, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { addTicker } from '../../utils/actions';

function DemoListItem(props) {
  const { name, img, code } = props;
  const dispatch = useDispatch();

  return (
    <div
      data-testid="add-btn"
      className="list__item"
      role="button"
      tabIndex={0}
      onClick={() => dispatch(addTicker(code))}
    >
      <div className="list__item__logo">
        <Avatar size={42} src={<img src={img} alt={name} />} />
        {name}
      </div>
      <div className="list__item__plus">
        <Tooltip title="Add me!">
          <PlusOutlined style={{ fontSize: '20px' }} />
        </Tooltip>
      </div>
    </div>
  );
}

DemoListItem.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  code: PropTypes.string,
}

export default DemoListItem;
