import { useState } from "react";

function AddTransaction({ transactions, setTransactions }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [date, setDate] = useState("");

  const addTransaction = () => {
    if (!title || !amount || !date) return;

    const newTransaction = {
      id: Date.now(),
      title,
      amount: Number(amount),
      type,
      date,
    };

    setTransactions([newTransaction, ...transactions]);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="card">
      <input
        className="input"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="input"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        className="input"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select
        className="input"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button className="btn" onClick={addTransaction}>
        Add Transaction
      </button>

      <div className="card form-group"></div>
    </div>
  );
}

export default AddTransaction;