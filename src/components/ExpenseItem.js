import "./Expenseitem.css";
import React from "react";
import ReactDOM from "react-dom";


function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 20);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 3000;

  return (
    <div className="expense-item">
      <h1>Monthly Expenses</h1>
      <div>
        <h2>{props.item[1].title}</h2>
        <h2>{props.item[1].amount}</h2>
        <h2>{props.item[0].title}</h2>
        <h2>{props.item[0].amount}</h2>
        <h2>{props.item[0].date.toDateString()}</h2>
        <h2>{props.item[0].amount}</h2>
      
      </div>
    </div>
  );
}
export default ExpenseItem;
