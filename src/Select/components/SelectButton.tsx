import { Button } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { SelectContext } from '../context';

interface SelectButtonProps {
	placeholder: string;
}

export const SelectButton = ({placeholder}:SelectButtonProps) => {
	const { toggleDropdown, displayValue } = useContext(SelectContext);
	return <Button onClick={toggleDropdown}>{displayValue ?? placeholder}</Button>;
};
