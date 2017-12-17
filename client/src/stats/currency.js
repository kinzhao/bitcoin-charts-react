import React, { Component } from 'react';

const styles = {
  item: {
    overflow: 'hidden',
    width: '300px',
    height: '318px',
    borderRadius: '0 0 2px 2px',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.10), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
    display: 'table',
    background: '#fff'
  },
  title: {
    color: '#004a7c',
    fontSize: '20px',
    lineHeight: '28px'

  },
  image: {
    width: '280px',
    height: 'auto',
    display: 'block',
    margin: '0 auto'

  },
  info: {
    fontSize: '14px',
    lineHeight: '18px',
    padding: '0 5px'
  }
};

export class Currency extends Component {
  render() {
    return (
      <div className="stat-item" style={ styles.item }>
        <h3 className="currency-title" style={ styles.title }>{ this.props.currency.title }</h3>
        <img className="currency-image" style={ styles.image } src={ process.env.PUBLIC_URL + this.props.currency.image.src } alt={ this.props.currency.image.alt }></img>
        <p className="currency-stat-info" style={ styles.info }>{ this.props.currency.info }</p>
      </div>
    );
  }
}
