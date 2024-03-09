/* eslint-disable react/button-has-type */
import React from 'react';
import { IWebButton } from './Button.interface';
import { textClasses, buttonClasses } from './Button.classes';
import { cx } from 'class-variance-authority';

//
//

export const Button: React.FC<IWebButton> = ({ children, className, ...buttonProps }) => (
  <button className={cx(textClasses(), buttonClasses({ className }))} {...buttonProps}>
    {children}
  </button>
);
