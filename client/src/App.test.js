import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import * as TYPES from './utils/types';
import rootReducer from './utils/reducer';


describe('UI Tests', () => {

  test('Add and delete watch item', () => {
    render(<App />)
    expect(screen.queryByTestId('watchList')).toBeNull();
    fireEvent.click(screen.getAllByTestId('add-btn')[0]);
    expect(screen.queryByTestId('watchList')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('del-btn'));
    expect(screen.queryByTestId('watchList')).toBeNull();
  });

  test('delete watch item', () => {
    render(<App />)
    expect(screen.queryByTestId('watchList')).toBeNull();
    fireEvent.click(screen.getAllByTestId('add-btn')[0]);
    expect(screen.queryByTestId('watchList')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('del-btn'));
    expect(screen.queryByTestId('watchList')).toBeNull();
  }); 

  test('Check stop watch event', () => {
    render(<App />)
    fireEvent.click(screen.getAllByTestId('add-btn')[0]);
    expect(screen.queryByTestId('watchList')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('stop-watch-btn'));
    expect(screen.queryByTestId('start-watch-btn')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('del-btn'));
    expect(screen.queryByTestId('watchList')).toBeNull();
    expect(screen.queryByTestId('stop-watch-btn')).toBeNull();
    expect(screen.queryByTestId('start-watch-btn')).toBeNull();
  });

})

describe('Redux Tests', () => {
  const initState = {
    keys: [
      {
        key: 'AAPL',
        name: 'Apple',
        img: 'apple.png',
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
        img: 'alphabet.png',
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
        img: 'microsoft.png',
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
        img: 'amazon.png',
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
        img: 'facebook.png',
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
        img: 'tesla.png',
        watching: true,
        price: 0,
        change: 0,
        change_percent: 0,
        dividend: 0,
        income: 0,
      },
    ],
    demoList: ['GOOGL', 'MSFT', 'AMZN', 'FB', 'TSLA'],
    watchList: ['AAPL'],
    data: [],
  }

  test('has a default states', () => {
    const initState = {
      keys: [
        {
          key: 'AAPL',
          name: 'Apple',
          img: 'apple.png',
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
          img: 'alphabet.png',
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
          img: 'microsoft.png',
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
          img: 'amazon.png',
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
          img: 'facebook.png',
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
          img: 'tesla.png',
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
    }
    expect(rootReducer(undefined, {type: 'unexpected'})).toEqual(initState)
  })

  test(`handle action ${TYPES.ADD_TO_WATCH_LIST}`, () => {
    const initState = {
      keys: [
        {
          key: 'AAPL',
          name: 'Apple',
          img: 'apple.png',
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
          img: 'alphabet.png',
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
          img: 'microsoft.png',
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
          img: 'amazon.png',
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
          img: 'facebook.png',
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
          img: 'tesla.png',
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
    }
    expect(rootReducer(
      initState, {
        type: TYPES.ADD_TO_WATCH_LIST,
        payload: 'AAPL', 
      }
    ))
    .toEqual({
      ...initState, 
      watchList: [...initState.watchList, 'AAPL'],
      demoList: initState.demoList.filter((key) => key !== 'AAPL')
    })
  })

  test(`handle action ${TYPES.DELETE_FROM_WATCH_LIST}`, () => {
    expect(rootReducer(
      initState, {
        type: TYPES.DELETE_FROM_WATCH_LIST,
        payload: 'AAPL', 
      }
    ))
    .toEqual({
      ...initState, 
      watchList: initState.watchList.filter((key) => key !== 'AAPL'),
      demoList: [...initState.demoList, 'AAPL'],
    })
  })

  test(`handle action ${TYPES.SWITCH_WATCHING}`, () => {
    expect(rootReducer(
      initState, {
        type: TYPES.SWITCH_WATCHING,
        payload: 'AAPL', 
      }
    ))
    .toEqual({
      ...initState, 
      keys: initState.keys.map((item) => {
        if (item.key === 'AAPL') {
          return { ...item, watching: !item.watching };
        }
        return item;
      })
    })
  })

  test(`handle action ${TYPES.UPDATE_DATA}`, () => {
    const payload = {
      'ticker': 'AAPL',
      'exchange': 'NASDAQ',
      'price': 279.29,
      'change': 64.52,
      'change_percent': 0.84,
      'dividend': 0.56,
      'yield': 1.34,
      'last_trade_time': '2021-04-30T11:53:21.000Z'
    }
    expect(rootReducer(
      initState, {
        type: TYPES.UPDATE_DATA,
        payload: payload, 
      }
    ))
    .toEqual({
      ...initState, 
      keys: initState.keys.map((item) => {
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
      })
    })
  })
})
