import React, { useContext, useEffect } from 'react';
import { SelectContext, SelectProvider, Variant } from './context';
import { SelectWrapper } from './components/SelectWrapper';
import { BoxProps, forwardRef } from '@chakra-ui/react';

export interface SelectProps extends BoxProps {
	children: React.ReactNode;
	variant?: Variant;
	icon?: React.ReactElement<any>;
	isLoading?: boolean;
}

export const Select = forwardRef<SelectProps, 'div'>((props, _ref) => {
	const { children, variant, ...rest } = props;
	const { handleVariant } = useContext(SelectContext);

	useEffect(() => {
		variant && handleVariant(variant);
	}, [handleVariant, variant]);



	return (
		<SelectProvider>
			<SelectWrapper {...rest}>{children}</SelectWrapper>
		</SelectProvider>
	);
});
