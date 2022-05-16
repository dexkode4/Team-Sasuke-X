import React, { useContext, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, ButtonProps, forwardRef } from '@chakra-ui/react';
import { SelectContext, Value } from '../context';

interface SelectButtonProps extends ButtonProps {
	placeholder: string;
	handleChange: (value: Value) => void;
	icon?: React.ReactNode;
}

export const SelectButton = forwardRef<SelectButtonProps, 'button'>(
	(props, _ref) => {
		const { placeholder, handleChange, icon, ...rest } = props;
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
				bg='transparent'
				borderWidth={1}
				fontSize='md'
				display='flex'
				justifyContent='space-between'
				w='100%'
				{...rest}
				onClick={() => toggleDropdown()}
			>
				{displayValue ?? placeholder}

				{icon ?? <ChevronDownIcon w={5} h={5} />}
			</Button>
		);
	},
);
