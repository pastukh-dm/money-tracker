import React, { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/Input/Input';
import { Category, CategoryType } from '../../../models/Category';
import { UIDService } from '../../../services/UIDService';

interface Props {
  onSubmit: (e: Category) => void
}

export function CategoryCreateForm(props: Props) {
  const typeRef = useRef<HTMLSelectElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const [inputs, setInputs] = useState({
    type: CategoryType.Expense,
    name: ''
  });
  const [isValid, setIsValid] = useState(false);

  useEffect(
    () => {
      setIsValid(
        inputs.type.length > 0 &&
        inputs.name.length > 0
      )
    },
    [inputs.type, inputs.name]
  )

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const category: Category = {
        id: UIDService.generate(),
        name: inputs.name,
        type: inputs.type as CategoryType
      }
      props.onSubmit(category);
      resetForm();
    },
    [props.onSubmit, inputs]
  )

  const handleInput = useCallback(
    (key: keyof typeof inputs, value: string) => setInputs(prev => ({ ...prev, [key]: value })),
    []
  )

  const resetForm = useCallback(
    () => {
      if (nameRef.current) {
        nameRef.current.value = '';
      }
      setInputs(prev => ({ ...prev, name: '' }))
    },
    [nameRef]
  )


  return (
    <div className="CategoryCreateForm">
      <form onSubmit={handleSubmit}>
        <select
          ref={typeRef}
          defaultValue={inputs.type}
          onChange={(e) => handleInput('type', e.target.value)}
        >
          {
            Object.values(CategoryType).map(type =>
              <option key={type} value={type}>
                {type}
              </option>
            )
          }
        </select>
        <Input
          ref={nameRef}
          placeholder="Name"
          type="text"
          defaultValue={inputs.name}
          onChange={(e) => handleInput('name', e.target.value)}
        />
        {JSON.stringify(inputs)}
        <Button type="submit" text="Add" disabled={!isValid} />
      </form>
    </div>
  )
}