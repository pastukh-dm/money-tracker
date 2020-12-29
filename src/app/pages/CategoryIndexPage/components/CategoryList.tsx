import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Button } from '../../../components/Button/Button';
import { Category } from '../../../models/Category';

interface Props { 
  items: Category[],
  onDelete: (e: Category) => void
}

export function CategoryList(props: Props) {
  return (
    <table>
      <tbody>
        {
          props.items.map(category =>
            <tr key={category.id}>
              <th>{category.type}</th>
              <th>{category.name}</th>
              <td>
                <Button
                  variant="pure-danger"
                  icon={<FaTimes />}
                  onClick={() => props.onDelete(category)}
                />
              </td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}