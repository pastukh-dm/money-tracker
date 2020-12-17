import clsx from 'clsx';
import React, { ButtonHTMLAttributes, useMemo } from 'react';
import './Button.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: (e: React.MouseEvent) => void
  icon?: React.ReactNode,
  text?: string,
  children?: React.ReactNode,
  variant?:
  'primary' | 'secondary' | 'danger' |
  'outline-primary' | 'outline-secondary' | 'outline-danger' |
  'pure-primary' | 'pure-secondary' | 'pure-danger'
}

Button.defaultProps = {
  variant: 'primary'
}


export function Button(props: Props) {
  const content = useMemo(() => props.children || props.text, [props.children, props.text]);
  return (
    <button
      className={clsx('Button', `_${props.variant}`)}
      onClick={props.onClick}
    >
      {
        props.icon &&
        <span className="Button-Icon">{props.icon}</span>
      }
      {
        content &&
        <span className="Button-Content">{content}</span>
      }
    </button>
  )
}