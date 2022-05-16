import React, { useContext, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, ButtonProps, forwardRef } from '@chakra-ui/react';
import { SelectContext, Value } from '../context';

interface SelectButtonProps extends ButtonProps {
	placeholder: string;
	handleChange: (value: Value) => void;
}

export const SelectButton = forwardRef<SelectButtonProps, 'button'>(
	(props, _ref) => {
		const { placeholder, handleChange, ...rest } = props;
		const { toggleDropdown, displayValue, value } = useContext(SelectContext);
		const componentJustMounted = useRef(true);

		useEffect(() => {
			if (!componentJustMounted.current) {
				handleChange(value);
			}
			componentJustMounted.current = false;
		}, [handleChange, value]);

		return (
			<Button
			bg="transparent"
			borderWidth={1}
				{...rest}
				rightIcon={<ChevronDownIcon w={4} h={4} />}
				onClick={() => toggleDropdown()}
			>
				{displayValue ?? placeholder}
			</Button>
		);
	},
);
