import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { SelectContext, Value } from '../context';

interface SelectOptionProps {
	children: React.ReactNode;
	value: Value
}

export const SelectOption = ({ children, value }: SelectOptionProps) => {
	const { handleDisplayValue, toggleDropdown, handleValue  } = useContext(SelectContext);

	const handleSelect = () => {
		handleDisplayValue(children);
		toggleDropdown();
		handleValue(value)
	}
	return <Box onClick={handleSelect}>{children}</Box>;
};
