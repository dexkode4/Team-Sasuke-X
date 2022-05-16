import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

interface SelectGroupProps {
	children: React.ReactNode;
	label: string;
}

export const SelectGroup = ({ children, label }: SelectGroupProps) => {
	return (
		<Box>
			<Heading size='sm'>{label}</Heading>
			<Box>{children}</Box>
		</Box>
	);
};
