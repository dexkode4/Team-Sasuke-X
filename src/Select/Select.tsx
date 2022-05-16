import React from 'react';
import { SelectProvider } from './context';
import { SelectWrapper } from './components/SelectWrapper';

export type variant = 'native' | 'outline' | 'filled' | 'flushed' | 'unstyled';
export interface SelectProps {
	children: React.ReactNode;
	variant?: variant;
	icon?: React.ReactElement<any>;
	isLoading?: boolean;
}

export const Select = ({ children }: SelectProps) => {
	return (
		<SelectProvider>
			<SelectWrapper>{children}</SelectWrapper>
		</SelectProvider>
	);
};
