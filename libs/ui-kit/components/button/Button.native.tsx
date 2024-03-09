import { Text, TouchableOpacity } from 'react-native';
import { INativeButton } from './Button.interface';
import { textClasses, buttonClasses } from './Button.classes';

//
//

export const Button: React.FC<INativeButton> = ({ children, className, ...buttonProps }) => (
  <TouchableOpacity {...buttonProps} className={buttonClasses({ className })} activeOpacity={1}>
    <Text className={textClasses()}>{children}</Text>
  </TouchableOpacity>
);
