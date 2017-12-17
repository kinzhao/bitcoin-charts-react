import React, { Component } from 'react';
import { Popular } from './popular';
import { Currency } from './currency';

const styles = {
  statContainer: {
    margin: '0 auto',
    overflow: 'auto',
    textAlign: 'center',
    padding: '20px 0'
  },
  statTitle: {
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: '500'
  },
  currencyContainer: {
    margin: '0 auto',
    background: '#F5F7F9',
    overflow: 'auto',
    textAlign: 'center',
    padding: '20px 0'
  }
};

export class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popular: [],
      currency: []
    };
  }

  handleSearch(query, state) {
    if(query){
      fetch(`/search/${query}`)
      .then(response => response.json())
      .then(data => {
        if(state === 'popular'){
          this.setState({ popular: data });
        }
      }).catch(error => console.error(error));
    }
  }

  componentDidMount() {
    this.handleSearch('stats', 'popular');
    this.setState({ currency: [
      {
        title: 'Bitcoins in circulation',
        image: {
          src: './images/total-bitcoins.png',
          alt: 'total bitcoins'
        },
        info: 'The total number of bitcoins that have already been mined.'
      },
      {
        title: 'Market Price (USD)',
        image: {
          src: './images/market-price.png',
          alt: 'market price',
        },
        info: 'The total number of bitcoins that have already been mined.'
      },
      {
        title: 'Market Capitalization',
        image: {
          src: './images/market-cap.png',
          alt: 'market cap',
        },
        info: 'The total number of bitcoins that have already been mined.'
      },
      {
        title: 'USD Exchange Trade Volume',
        image: {
          src: './images/trade-volume.png',
          alt: 'trade volume',
        },
        info: 'The total number of bitcoins that have already been mined.'
      }
    ]});
  }

  render() {
    return (
      <div>
        <div className="popular-container" style={ styles.statContainer }>
          <h3 className="stat-title" style={ styles.statTitle }>Popular Stats</h3>
          <div className="stat-container" style={ styles.statContainer }>
            { this.state.popular.map((popular, i) => (
              <Popular key={ i } popular={ popular }/>
            )) }
          </div>
        </div>
        <div className="currency-container" style={ styles.currencyContainer }>
          <h3 className="stat-title" style={ styles.statTitle }>Currency Statistics</h3>
          <div className="stat-container" style={ styles.statContainer }>
            { this.state.currency.map((currency, i) => (
              <Currency key={ i } currency={ currency } />
            )) }
          </div>
        </div>
      </div>
    );
  }
}
