import { Button, ButtonProps, forwardRef } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { SelectContext } from '../context';

interface SelectButtonProps extends ButtonProps {
	placeholder: string;
}

export const SelectButton = forwardRef<SelectButtonProps, 'button'>((props) => {
	const {placeholder} = props;
	const { toggleDropdown, displayValue } = useContext(SelectContext);
	return <Button onClick={toggleDropdown}>{displayValue ?? placeholder}</Button>;
});
