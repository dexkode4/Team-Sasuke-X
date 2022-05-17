import React from 'react';
import { SelectProvider } from './context';
import { SelectWrapper } from './components/SelectWrapper';
import { BoxProps, forwardRef } from '@chakra-ui/react';
import { Variant } from '.';

export interface SelectProps extends BoxProps {
	children: React.ReactNode;
	variant?: Variant;
	isLoading?: boolean;
	placeholder?: string;
	itemCount?: number;
}

export const Select = forwardRef<SelectProps, 'div'>((props, _ref) => {
	const { children, variant,placeholder,itemCount, ...rest } = props;

	return (
		<SelectProvider>
			<SelectWrapper itemCount={itemCount} placeholder={placeholder} variant={variant} {...rest}>
				{children}
			</SelectWrapper>
		</SelectProvider>
	);
});
