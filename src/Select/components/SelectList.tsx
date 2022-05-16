import { Box, BoxProps, forwardRef } from '@chakra-ui/react';
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
	const { isOpenDropdown, optionHeight } =
		useContext(SelectContext);

	const variant = {
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
	return (
		<AnimatePresence>
			{isOpenDropdown && (
				<MotionBox
					variants={variant}
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
