import React, { ReactNode, useContext, useRef } from 'react';
import { Box, BoxProps, forwardRef } from '@chakra-ui/react';
import { SelectContext } from '../context';
import { useClickOutside } from '../hooks/use-click-outside';
interface SelectWrapperProps extends BoxProps {
	children: ReactNode;
}

export const SelectWrapper = forwardRef<SelectWrapperProps, 'div'>(
	(props, _ref) => {
		const { children, ...rest } = props;
		const wrapperRef = useRef(null);
		const { toggleDropdown } = useContext(SelectContext);

		const doSomething = () => {
			toggleDropdown(false);
		};
		useClickOutside(wrapperRef, doSomething);

		return (
			<Box w='max-content' {...rest} ref={wrapperRef}>
				{children}
			</Box>
		);
	},
);
