import React from 'react';
import { SelectProvider, Variant } from './context';
import { SelectWrapper } from './components/SelectWrapper';
import { BoxProps, forwardRef } from '@chakra-ui/react';

export interface SelectProps extends BoxProps {
	children: React.ReactNode;
	variant?: Variant;
	isLoading?: boolean;
	placeholder?: string;
}

export const Select = forwardRef<SelectProps, 'div'>((props, _ref) => {
	const { children, variant,placeholder, ...rest } = props;

	return (
		<SelectProvider>
			<SelectWrapper placeholder={placeholder} variant={variant} {...rest}>
				{children}
			</SelectWrapper>
		</SelectProvider>
	);
});
