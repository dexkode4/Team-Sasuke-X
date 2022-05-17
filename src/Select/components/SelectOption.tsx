import { Box, BoxProps, forwardRef, chakra } from '@chakra-ui/react';
import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import { SelectContext, Value } from '../context';

interface SelectOptionProps extends BoxProps {
	children: React.ReactNode;
	value: Value;
}

export const SelectOption = forwardRef<SelectOptionProps, 'div'>(
	(props, _ref) => {
		const { children, value, ...rest } = props;
		const {
			handleDisplayValue,
			toggleDropdown,
			handleValue,
			handleSelectOptionHeight,
			variant,
		} = useContext(SelectContext);
		const ref = useRef<HTMLDivElement>(null);

		useLayoutEffect(() => {
			if (ref.current) {
				handleSelectOptionHeight(ref.current.clientHeight);
			}
		}, [handleSelectOptionHeight, ref]);

		const handleSelect = () => {
			handleDisplayValue(children);
			toggleDropdown(false);
			handleValue(value);
		};

		const NativeSelectOption = (
			<chakra.option onClick={handleSelect}>{children}</chakra.option>
		);

		return variant === 'native' ? (
			NativeSelectOption
		) : (
			<Box
				p={2}
				fontSize='md'
				textAlign='left'
				_hover={{
					bg: 'gray.200',
				}}
				{...rest}
				cursor='pointer'
				ref={ref}
				onClick={handleSelect}
			>
				{children}
			</Box>
		);
	},
);
