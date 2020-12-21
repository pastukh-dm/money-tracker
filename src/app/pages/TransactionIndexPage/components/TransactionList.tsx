import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Button } from '../../../components/Button/Button';
import { TransactionPopulated } from '../../../models/Transaction';

interface Props {
  items: TransactionPopulated[],
  onDelete: (e: TransactionPopulated) => void
}

export function TransactionList(props: Props) {
  return (
    <table>
      <tbody>
        {
          props.items.map(transaction =>
            <tr key={transaction.id}>
              <th>{transaction.account?.name}</th>
              <td>{transaction.amount} {transaction.account?.currency?.name}</td>
              <td>
                <Button
                  variant="pure-danger"
                  icon={<FaTimes />}
                  onClick={() => props.onDelete(transaction)}
                />
              </td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}