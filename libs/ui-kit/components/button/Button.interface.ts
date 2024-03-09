/// <reference types="nativewind/types" />
/// <reference types="next" />

import { ButtonHTMLAttributes } from 'react';
import { TouchableOpacityProps } from 'react-native';

// Button types
//

export interface IButton {}

export interface IWebButton extends IButton, ButtonHTMLAttributes<HTMLButtonElement> {}

export interface INativeButton extends IButton, TouchableOpacityProps {}
