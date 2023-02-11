import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Avatar, Tooltip } from 'antd';
import {
  EyeFilled,
  EyeInvisibleFilled,
  DeleteFilled,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons';

import { deleteTicker, switchWatchTicker } from '../../utils/actions';

function WatchListItem(props) {
  const {
    item: {
      name,
      img,
      key,
      watching,
      rise,
      price,
      change,
      change_percent,
      dividend,
      income,
    },
  } = props;
  const dispatch = useDispatch();

  return (
    <div className="list__item">
      <div className="list__item__logo">
        <Avatar size={42} src={<img src={img} alt={name} />} />
        {name}
      </div>
      <div className="list__item__prices">
        <Tooltip title="Price">
          <span className="price">${price}</span>
        </Tooltip>
        <Tooltip title="Change">
          <span className={`change ${rise ? 'up' : 'down'}`}>
            {rise ? '+' : '-'}${change}
          </span>
        </Tooltip>
        <Tooltip title="Change Percent">
          <span
            className={`change_percent change_percent_${rise ? 'up' : 'down'}`}
          >
            {rise ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
            {change_percent}%
          </span>
        </Tooltip>
        <Tooltip title="Dividend">
          <span className={`dividend ${rise ? 'up' : 'down'}`}>
            ${dividend}
          </span>
        </Tooltip>
        <Tooltip title="Yield">
          <span className={`yield ${rise ? 'up' : 'down'}`}>${income}</span>
        </Tooltip>
      </div>
      <div className="list__item__plus">
        {watching ? (
          <Tooltip title="Stop watching">
            <EyeInvisibleFilled
              data-testid="stop-watch-btn"
              className="stopWatchIcon"
              onClick={() => dispatch(switchWatchTicker(key))}
              style={{ fontSize: '20px' }}
            />
          </Tooltip>
        ) : (
          <Tooltip title="Start watching">
            <EyeFilled
              data-testid="start-watch-btn"
              className="startWatchIcon"
              onClick={() => dispatch(switchWatchTicker(key))}
              style={{ fontSize: '20px' }}
            />
          </Tooltip>
        )}
        <Tooltip title="Delete from watchlist">
          <DeleteFilled
            data-testid="del-btn"
            className="deleteIcon"
            style={{ fontSize: '20px' }}
            onClick={() => dispatch(deleteTicker(key))}
          />
        </Tooltip>
      </div>
    </div>
  );
}

WatchListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
    key: PropTypes.string,
    watching: PropTypes.bool,
    rise: PropTypes.bool,
    price: PropTypes.number,
    change: PropTypes.number,
    change_percent: PropTypes.number,
    dividend: PropTypes.number,
    income: PropTypes.number,
  })
}

export default WatchListItem;
