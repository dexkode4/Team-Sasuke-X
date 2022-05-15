import { Box, BoxProps, forwardRef } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';
import { SelectContext } from '../context';

interface SelectListProps extends BoxProps {
	children: React.ReactNode;
}

const MotionBox = motion<BoxProps>(Box);


export const SelectList = forwardRef<SelectListProps, 'div'>((props, _ref) => {
	const { children, ...rest } = props;
	const { isOpenDropdown } = useContext(SelectContext);

	const variant = {
		hidden: {
			opacity: 0,
			y: -10
			
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: .3,
				type: 'spring'
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: .3,
			},
		}
	};
	return(
		<AnimatePresence>
			{isOpenDropdown && (
				<MotionBox
					variants={variant}
					initial='hidden'
					animate='visible'
					exit='exit'
				>
					<Box bg='white' shadow='lg' {...rest}>
						{children}
					</Box>
				</MotionBox>
			)}
		</AnimatePresence>
	);
});
