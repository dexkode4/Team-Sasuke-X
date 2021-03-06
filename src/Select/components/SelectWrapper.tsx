import React, { ReactNode, useContext, useEffect, useRef } from 'react';
import { Box, BoxProps, forwardRef } from '@chakra-ui/react';
import { SelectContext } from '../context';
import { useClickOutside } from '../hooks/use-click-outside';
import { Variant } from '..';
interface SelectWrapperProps extends BoxProps {
	children: ReactNode;
	variant?: Variant;
	isLoading?: boolean;
	isDisabled?: boolean;
	placeholder?: string;
	itemCount?: number;
}

export const SelectWrapper = forwardRef<SelectWrapperProps, 'div'>(
	(props, _ref) => {
		const { children, variant, isLoading, placeholder, itemCount,isDisabled, ...rest } = props;
		const wrapperRef = useRef(null);
		const { toggleDropdown, handleVariant, handleLoading, handlePlaceholder, handleItemCount, handleIsDisabled } =
			useContext(SelectContext);

		useEffect(() => {
			variant && handleVariant(variant);
		}, [handleVariant, variant]);

		useEffect(() => {
			itemCount && handleItemCount(itemCount);
		}, [itemCount, handleItemCount]);

		useEffect(() => {
			isLoading && handleLoading(isLoading);
		}, [handleLoading, isLoading]);

		useEffect(() => {
			placeholder && handlePlaceholder(placeholder);
		}, [handlePlaceholder, placeholder]);

		useEffect(() => {
			isDisabled && handleIsDisabled(isDisabled);
		}, [handleIsDisabled, isDisabled]);

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
