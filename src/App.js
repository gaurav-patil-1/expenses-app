import React, { useState, useEffect } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  // const expense = [
  //   {
  //     id: "e1",
  //     title: "Toilet Paper",
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: "e3",
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2023, 2, 28),
  //   },
  //   {
  //     id: "e4",
  //     title: "New Desk (Wooden)",
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];

  const myExpenses = localStorage.getItem("expenses");

  const allExpenses = myExpenses
    ? JSON.parse(myExpenses).map((expense) => ({
        ...expense,
        date: new Date(expense.date),
      }))
    : [
        {
          id: "e1",
          title: "Toilet Paper",
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        {
          id: "e2",
          title: "New TV",
          amount: 799.49,
          date: new Date(2021, 2, 12),
        },
        {
          id: "e3",
          title: "Car Insurance",
          amount: 294.67,
          date: new Date(2023, 2, 28),
        },
        {
          id: "e4",
          title: "New Desk (Wooden)",
          amount: 450,
          date: new Date(2021, 5, 12),
        },
      ];

  // const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [
  //   {
  //     id: "e1",
  //     title: "Toilet Paper",
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: "e3",
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2023, 2, 28),
  //   },
  //   {
  //     id: "e4",
  //     title: "New Desk (Wooden)",
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];

  const [expenses, setExpenses] = useState(allExpenses);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
