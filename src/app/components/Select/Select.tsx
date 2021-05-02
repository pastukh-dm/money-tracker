import './Select.scss';

import clsx from 'clsx';
import React, { forwardRef, InputHTMLAttributes, SelectHTMLAttributes } from 'react';


export const Select = forwardRef<HTMLSelectElement, Props>((props: Props, ref) => {
  const { variant, options, ...otherProps } = props;
  return (
    <select
      ref={ref}
      className={clsx('Select', `_${variant}`, {
        '_disabled': otherProps.disabled
      })}
      {...otherProps}
    >
      {options?.map((option, index) =>
        <option
          {...option}
          key={option.value?.toString() + index.toString()} value={option.id}
        >
          {option.label}
        </option>
      )}
    </select>
  )
});


type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  variant?: 'primary' | 'secondary' | 'danger',
  options?: React.OptionHTMLAttributes<HTMLOptionElement>[]
};


Select.defaultProps = {
  variant: 'primary'
};
