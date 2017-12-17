import React, { Component } from 'react';

const styles = {
  item: {
    overflow: 'hidden',
    width: '300px',
    height: '210px',
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
  stat: {
    display: 'block',
    color: '#10ADE4',
    fontSize: '48px',
    lineHeight: '48px'
  },
  abbr: {
    color: '#10ADE4',
  },
  info: {
    fontSize: '14px',
    lineHeight: '18px',
    padding: '0 5px'
  }
};

export class Popular extends Component {
  render() {
    return (
      <div className="stat-item" style={ styles.item }>
        <h3 className="popular-title" style={ styles.title }>{ this.props.popular.title }</h3>
        <span className="popular-stat" style={ styles.stat }>{ this.props.popular.stat }</span>
        <small className="popular-abbr" style={ styles.abbr }>{ this.props.popular.abbr }</small>
        <p className="popular-stat-info" style={ styles.info }>{ this.props.popular.info }</p>
      </div>
    );
  }
}
