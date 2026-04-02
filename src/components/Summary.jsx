function Summary({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="card summary">
      <div>
        <h4>Balance</h4>
        <p>₹{balance}</p>
      </div>
      <div>
        <h4 className="income">Income</h4>
        <p>₹{income}</p>
      </div>
      <div>
        <h4 className="expense">Expense</h4>
        <p>₹{expense}</p>
      </div>
    </div>
  );
}

export default Summary;