import { CheckIcon } from '@chakra-ui/icons';
import { Box, BoxProps, forwardRef } from '@chakra-ui/react';
import React, { useContext, useLayoutEffect, useMemo, useRef } from 'react';
import { Value } from '..';
import { SelectContext } from '../context';

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
			value: selectedValue,
		} = useContext(SelectContext);
		const ref = useRef<HTMLDivElement>(null);

		const isActive = useMemo(
			() => selectedValue === value,
			[selectedValue, value],
		);

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

		const NativeSelectOption = <option value={value}>{children}</option>;

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
				{isActive && <CheckIcon mr={1} />}
				{children}
			</Box>
		);
	},
);
