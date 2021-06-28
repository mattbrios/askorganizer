import { ButtonHTMLAttributes } from 'react'

import { ButtonContainer } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
};

export function CustomButton({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <ButtonContainer
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  )
}