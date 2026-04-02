function TransactionList({ transactions, setTransactions }) {
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div>
      {transactions.map((t) => (
        <div className="card flex" key={t.id}>
          <div>
            <strong>{t.title}</strong>
            <div style={{ fontSize: "12px", color: "#777" }}>
              {t.date}
            </div>
          </div>

          <span className={t.type === "income" ? "income" : "expense"}>
            {t.type === "income" ? "+" : "-"}₹{t.amount}
          </span>

          <button
            className="delete-btn"
            onClick={() => deleteTransaction(t.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;