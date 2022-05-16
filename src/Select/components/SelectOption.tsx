import { Box, BoxProps, forwardRef } from '@chakra-ui/react';
import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import { SelectContext, Value } from '../context';

interface SelectOptionProps extends BoxProps {
	children: React.ReactNode;
	value: Value;
}

export const SelectOption = forwardRef<SelectOptionProps, 'div'>(
	(props, _ref) => {
		const { children, value, ...rest } = props;
		const { handleDisplayValue, toggleDropdown, handleValue, handleSelectOptionHeight } =
			useContext(SelectContext);
		const ref = useRef<HTMLDivElement>(null);

		useLayoutEffect(() => {
			if (ref.current) {
				console.log('ref.current.clientHeight', ref.current.clientHeight)
				handleSelectOptionHeight(ref.current.clientHeight)
			}
		}, [handleSelectOptionHeight, ref]);

		const handleSelect = () => {
			handleDisplayValue(children);
			toggleDropdown(false);
			handleValue(value);
		};

		useEffect(() => {}, []);

		return (
			<Box {...rest} cursor='pointer' ref={ref} onClick={handleSelect}>
				{children}
			</Box>
		);
	},
);
