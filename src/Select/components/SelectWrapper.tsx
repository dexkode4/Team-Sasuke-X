import React, { ReactNode, useContext, useEffect, useRef } from 'react';
import { Box, BoxProps, forwardRef } from '@chakra-ui/react';
import { SelectContext, Variant } from '../context';
import { useClickOutside } from '../hooks/use-click-outside';
interface SelectWrapperProps extends BoxProps {
	children: ReactNode;
	variant?: Variant;
	isLoading?: boolean;
	placeholder?: string;
}

export const SelectWrapper = forwardRef<SelectWrapperProps, 'div'>(
	(props, _ref) => {
		const { children, variant, isLoading,placeholder, ...rest } = props;
		const wrapperRef = useRef(null);
		const { toggleDropdown, handleVariant, handleLoading , handlePlaceholder} = useContext(SelectContext);

		useEffect(() => {
			variant && handleVariant(variant);
		}, [handleVariant, variant]);

		useEffect(() => {
			isLoading && handleLoading(isLoading);
		}, [handleLoading, isLoading]);

		useEffect(() => {
			placeholder && handlePlaceholder(placeholder);
		}, [handlePlaceholder, placeholder]);

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
