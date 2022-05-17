import { Box, BoxProps, forwardRef, Select } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';
import { SelectContext } from '../context';

interface SelectListProps extends BoxProps {
	children: React.ReactNode;
	itemCount?: number;
}

const MotionBox = motion<BoxProps>(Box);

export const SelectList = forwardRef<SelectListProps, 'div'>((props, _ref) => {
	const { children, itemCount, ...rest } = props;
	const { isOpenDropdown, optionHeight, variant } = useContext(SelectContext);

	const dropdownVariant = {
		hidden: {
			opacity: 0,
			y: -10,
		},
		visible: {
			opacity: 1,
			y: 5,
			transition: {
				duration: 0.3,
				type: 'spring',
			},
		},
		exit: {
			opacity: 0,
			y: -10,
			transition: {
				duration: 0.3,
			},
		},
	};

	const NativeSelect = <Select>{children}</Select>;

	return variant === 'native' ? (
		NativeSelect
	) : (
		<AnimatePresence>
			{isOpenDropdown && (
				<MotionBox
					variants={dropdownVariant}
					initial='hidden'
					animate='visible'
					exit='exit'
				>
					<Box
						bg='white'
						shadow='lg'
						overflow='auto'
						{...(itemCount && {
							h: `${itemCount * optionHeight}px`,
						})}
						{...rest}
					>
						{children}
					</Box>
				</MotionBox>
			)}
		</AnimatePresence>
	);
});
