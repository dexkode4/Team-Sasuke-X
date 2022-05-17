import { Box, Heading, HeadingProps } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { SelectContext } from '../context';

interface SelectGroupProps {
	children: React.ReactNode;
	label: string;
	labelStyle?: HeadingProps;
}

export const SelectGroup = ({
	children,
	label,
	labelStyle,
}: SelectGroupProps) => {
	const { variant } = useContext(SelectContext);
	const NativeSelectGroup = <optgroup label={label}>{children}</optgroup>;
	return variant === 'native' ? (
		NativeSelectGroup
	) : (
		<Box>
			<Heading p={2} size='sm' textAlign='left' {...labelStyle}>
				{label}
			</Heading>
			<Box>{children}</Box>
		</Box>
	);
};
