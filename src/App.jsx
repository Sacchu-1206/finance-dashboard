import { useState, useEffect } from "react";
import Summary from "./components/Summary";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import Chart from "./components/Chart";
import "./index.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all");

  // load data
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(data);
  }, []);

  // save data
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // filter logic
  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter((t) => t.type === filter);

  // income & expense
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="container">
     <h1 className="heading">💰 Finance Tracker Dashboard</h1>

      <Summary transactions={transactions} />

      <Chart income={income} expense={expense} />

      <select className="input" onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <AddTransaction
        transactions={transactions}
        setTransactions={setTransactions}
      />

      <TransactionList
        transactions={filteredTransactions}
        setTransactions={setTransactions}
      />
    </div>
  );
}

export default App;