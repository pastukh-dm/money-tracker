import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Button } from '../../../components/Button/Button';
import { MoneyAccountPopulated } from '../../../models/MoneyAccount';


interface Props {
  items: MoneyAccountPopulated[],
  onDelete: (e: MoneyAccountPopulated) => void
}


export function AccountList(props: Props) {

  return (
    <table>
      <tbody>
        {
          props.items.map(account =>
            <tr key={account.id}>
              <th>{account.name}</th>
              <td>{account.balance} {account.currency?.name}</td>
              <td>
                <Button
                  variant="pure-danger"
                  icon={<FaTimes />}
                  onClick={() => props.onDelete(account)}
                />
              </td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}