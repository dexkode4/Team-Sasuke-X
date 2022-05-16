import React from 'react';
import { SelectProvider, Variant } from './context';
import { SelectWrapper } from './components/SelectWrapper';
import { BoxProps, forwardRef } from '@chakra-ui/react';
export type Modify<T, R> = Omit<T, keyof R> & R;

export interface SelectProps extends BoxProps {
	children: React.ReactNode;
	variant?: Variant;
	icon?: React.ReactElement<any>;
	isLoading?: boolean;
}

export const Select = forwardRef<SelectProps, 'div'>((props, _ref) => {
	const { children, variant, ...rest } = props;

	return (
		<SelectProvider>
			<SelectWrapper variant={variant} {...rest}>{children}</SelectWrapper>
		</SelectProvider>
	);
});
