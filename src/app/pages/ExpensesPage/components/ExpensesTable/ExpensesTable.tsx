import './ExpensesTable.scss';

export function ExpensesTable() {
  return (
    <table className="ExpensesTable">
      <thead className="ExpensesTable-Head">
        <tr className="ExpensesTable-Row">
          <td className="ExpensesTable-Cell">Type</td>
          <td className="ExpensesTable-Cell">Category</td>
          <td className="ExpensesTable-Cell">Cash</td>
        </tr>
      </thead>
      <tbody className="ExpensesTable-Body">
        <tr className="ExpensesTable-Row">
          <td className="ExpensesTable-Cell">Type</td>
          <td className="ExpensesTable-Cell">Expenses</td>
          <td className="ExpensesTable-Cell">Account</td>
        </tr>
      </tbody>
    </table>
  );
}