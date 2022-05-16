import React, { ReactNode, useContext, useEffect, useRef } from 'react';
import { Box, BoxProps, forwardRef } from '@chakra-ui/react';
import { SelectContext, Variant } from '../context';
import { useClickOutside } from '../hooks/use-click-outside';
interface SelectWrapperProps extends BoxProps {
	children: ReactNode;
	variant?: Variant;
	isLoading?: boolean;
}

export const SelectWrapper = forwardRef<SelectWrapperProps, 'div'>(
	(props, _ref) => {
		const { children, variant, isLoading, ...rest } = props;
		const wrapperRef = useRef(null);
		const { toggleDropdown, handleVariant, handleLoading } = useContext(SelectContext);

		useEffect(() => {
			variant && handleVariant(variant);
		}, [handleVariant, variant]);

		useEffect(() => {
			isLoading && handleLoading(isLoading);
		}, [handleLoading, isLoading]);

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
