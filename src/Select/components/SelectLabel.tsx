import { FormLabel } from '@chakra-ui/react';
import React from 'react';

interface SelectLabelProps {
	children: string;
}

export const SelectLabel = ({ children }: SelectLabelProps) => {
	return <FormLabel>{children}</FormLabel>;
};
