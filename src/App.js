import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';

import ExpenseItem from './components/ExpenseItem';
const expenses = [
  {
    title: 'Car Insurance',
    amount: '2000',
    date: new Date('2021,02,03')
  },
  {
    title: 'House tax',
    amount: '9900',
    date: new Date('2021,02,03')
  },
  {
    title: 'Grocery',
    amount: '6600',
    date: new Date('2021,02,03')
  }
];
export default function App() {
  return (
    <div className="App">
      <h3>The root components</h3>
      <ExpenseItem item={expenses} />

      {/* <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
