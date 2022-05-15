import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { SelectContext } from '../context';

interface SelectListProps {
	children: React.ReactNode;
}

export const SelectList = ({ children }: SelectListProps) => {
	const { isOpenDropdown } = useContext(SelectContext);
	return isOpenDropdown ? <Box>{children}</Box> : null;
};
