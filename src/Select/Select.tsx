import { chakra } from '@chakra-ui/react';
import React from 'react';
import { SelectProvider } from './context';

export type variant = 'native' | 'outline' | 'filled' | 'flushed' | 'unstyled';
export interface SelectProps {
	children: React.ReactNode;
	variant?: variant;
}

export const Select = ({ children }: SelectProps) => {
	return (
		<SelectProvider>
			<chakra.div>
				
				{children}
			</chakra.div>
		</SelectProvider>
	);
};
