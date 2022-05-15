import { Box, BoxProps, forwardRef } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { SelectContext } from '../context';

interface SelectListProps extends BoxProps {
	children: React.ReactNode;
}

export const SelectList = forwardRef<SelectListProps, 'div'>((props) => {
	const { children, ...rest } = props;
	const { isOpenDropdown } = useContext(SelectContext);
	return isOpenDropdown ? <Box {...rest}>{children}</Box> : null;
});
