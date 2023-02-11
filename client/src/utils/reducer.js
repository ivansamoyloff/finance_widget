import * as TYPES from './types';
import Apple from '../images/apple.png';
import Alphabet from '../images/alphabet.png';
import Microsoft from '../images/microsoft.png';
import Amazon from '../images/amazon.png';
import Facebook from '../images/facebook.png';
import Tesla from '../images/tesla.png';

const initialState = {
  keys: [
    {
      key: 'AAPL',
      name: 'Apple',
      img: Apple,
      watching: true,
      price: 0,
      change: 0,
      change_percent: 0,
      dividend: 0,
      income: 0,
    },
    {
      key: 'GOOGL',
      name: 'Alphabet',
      img: Alphabet,
      watching: true,
      price: 0,
      change: 0,
      change_percent: 0,
      dividend: 0,
      income: 0,
    },
    {
      key: 'MSFT',
      name: 'Microsoft',
      img: Microsoft,
      watching: true,
      price: 0,
      change: 0,
      change_percent: 0,
      dividend: 0,
      income: 0,
    },
    {
      key: 'AMZN',
      name: 'Amazon',
      img: Amazon,
      watching: true,
      price: 0,
      change: 0,
      change_percent: 0,
      dividend: 0,
      income: 0,
    },
    {
      key: 'FB',
      name: 'Facebook',
      img: Facebook,
      watching: true,
      price: 0,
      change: 0,
      change_percent: 0,
      dividend: 0,
      income: 0,
    },
    {
      key: 'TSLA',
      name: 'Tesla',
      img: Tesla,
      watching: true,
      price: 0,
      change: 0,
      change_percent: 0,
      dividend: 0,
      income: 0,
    },
  ],
  demoList: ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB', 'TSLA'],
  watchList: [],
  data: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.ADD_TO_WATCH_LIST:
      return {
        ...state,
        watchList: [...state.watchList, payload],
        demoList: state.demoList.filter((key) => key !== payload),
      };
    case TYPES.DELETE_FROM_WATCH_LIST:
      return {
        ...state,
        watchList: state.watchList.filter((key) => key !== payload),
        demoList: [...state.demoList, payload],
      };
    case TYPES.SWITCH_WATCHING:
      return {
        ...state,
        keys: state.keys.map((item) => {
          if (item.key === payload) {
            return { ...item, watching: !item.watching };
          }
          return item;
        }),
      };
    case TYPES.UPDATE_DATA:
      return {
        ...state,
        keys: state.keys.map((item) => {
          if (item.watching) {
            if (item.key === payload.ticker) {
              return { 
                ...item, 
                ...payload,
                 rise: item.price > payload.price, 
                 income: payload.yield 
                };
            }
            return item;
          }
          return item;
        }),
      };
    default:
      return { ...state };
  }
}
