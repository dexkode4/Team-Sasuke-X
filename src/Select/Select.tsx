import React from 'react';
import { Box } from '@chakra-ui/react';
import { SelectProvider } from './context';

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
			<Box w='max-content' position='relative'>
				{children}
			</Box>
		</SelectProvider>
	);
};
