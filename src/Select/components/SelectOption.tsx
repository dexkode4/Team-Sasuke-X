import { Box, BoxProps, forwardRef } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { SelectContext, Value } from '../context';

interface SelectOptionProps extends BoxProps {
	children: React.ReactNode;
	value: Value;
}

export const SelectOption = forwardRef<SelectOptionProps, 'div'>(
	(props, ref) => {
		const { children, value, ...rest } = props;
		const { handleDisplayValue, toggleDropdown, handleValue } =
			useContext(SelectContext);

		const handleSelect = () => {
			handleDisplayValue(children);
			toggleDropdown(false);
			handleValue(value);
		};
		return <Box {...rest} cursor='pointer' ref={ref} onClick={handleSelect}>{children}</Box>;
	},
);
