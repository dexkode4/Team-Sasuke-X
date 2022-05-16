import React from 'react';
import { SelectProvider } from './context';
import { SelectWrapper } from './components/SelectWrapper';
import { BoxProps, forwardRef } from '@chakra-ui/react';

export type variant = 'native' | 'outline' | 'filled' | 'flushed' | 'unstyled';
export interface SelectProps extends BoxProps {
	children: React.ReactNode;
	variant?: variant;
	icon?: React.ReactElement<any>;
	isLoading?: boolean;
}

export const Select = forwardRef<SelectProps, 'div'>((props, _ref) => {
	const { children, ...rest } = props;
	return (
		<SelectProvider>
			<SelectWrapper {...rest}>{children}</SelectWrapper>
		</SelectProvider>
	);
});
