import React, { ReactNode, useContext, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { useClickOutside } from 'react-justu';
import { SelectContext } from '../context';
interface SelectWrapperProps {
	children: ReactNode;
}

export const SelectWrapper = ({ children }: SelectWrapperProps) => {
	const wrapperRef = useRef(null);
    const { toggleDropdown } = useContext(SelectContext);

	const doSomething = () => {
        toggleDropdown(false)
	};
	useClickOutside(wrapperRef, doSomething);

	return <Box w="max-content" ref={wrapperRef}>{children}</Box>;
};
