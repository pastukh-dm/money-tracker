import clsx from 'clsx';
import React, { forwardRef, InputHTMLAttributes } from 'react';
import './Input.scss';


export const Input = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  // const content = useMemo(() => props.children || props.text, [props.children, props.text]);
  return (
    <input
      ref={ref}
      className={clsx('Input', `_${props.variant}`, {
        '_disabled': props.disabled
      })}
      type="text"
    />
    // <button
    //   className={clsx('Button', `_${props.variant}`, {
    //     '_disabled': props.disabled
    //   })}
    //   disabled={props.disabled}
    //   onClick={props.onClick}
    // >
    //   {
    //     props.icon &&
    //     <span className="Button-Icon">{props.icon}</span>
    //   }
    //   {
    //     content &&
    //     <span className="Button-Content">{content}</span>
    //   }
    // </button>
  )
});


type Props = InputHTMLAttributes<HTMLInputElement> & {
  // onClick?: (e: React.MouseEvent) => void
  // icon?: React.ReactNode,
  // text?: string,
  // children?: React.ReactNode,
  variant?:
  'primary' | 'secondary' | 'danger'
  // 'outline-primary' | 'outline-secondary' | 'outline-danger' |
  // 'pure-primary' | 'pure-secondary' | 'pure-danger'
};


Input.defaultProps = {
  variant: 'primary'
};
