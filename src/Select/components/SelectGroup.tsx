import { Box, Heading, HeadingProps } from '@chakra-ui/react';
import React from 'react';

interface SelectGroupProps {
	children: React.ReactNode;
	label: string;
    labelStyle?: HeadingProps;
}

export const SelectGroup = ({ children, label, labelStyle }: SelectGroupProps) => {
	return (
		<Box>
			<Heading p={2} size='sm' textAlign='left' {...labelStyle}>{label}</Heading>
			<Box>{children}</Box>
		</Box>
	);
};
