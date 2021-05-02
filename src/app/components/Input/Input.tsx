import clsx from 'clsx';
import React, { forwardRef, InputHTMLAttributes } from 'react';
import './Input.scss';


export const Input = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const {variant, ...otherProps} = props;
  return (
    <input
      ref={ref}
      className={clsx('Input', `_${variant}`, {
        '_disabled': props.disabled
      })}
      type="text"
      {...otherProps}
    />
  )
});


type Props = InputHTMLAttributes<HTMLInputElement> & {
  variant?:
  'primary' | 'secondary' | 'danger'
};


Input.defaultProps = {
  variant: 'primary'
};
