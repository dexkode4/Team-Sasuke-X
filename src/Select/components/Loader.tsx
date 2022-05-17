import { Box, BoxProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const loadingContainerVariants = {
	start: {
		transition: {
			staggerChildren: 0.2,
		},
	},
	end: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const loadingCircleVariants = {
	start: {
		y: '0%',
	},
	end: {
		y: '100%',
	},
};

const loadingCircleTransition = {
	duration: 0.5,
	yoyo: Infinity,
	ease: 'easeInOut',
};

const loadingContainer = {
	width: '1.5rem',
	display: 'flex',
	justifyContent: 'space-around',
};

const loadingCircle = {
	display: 'block',
	width: '0.3rem',
	height: '0.3rem',
	bg: 'gray.400',
	borderRadius: '50%',
};

export const MotionBox = motion<Omit<BoxProps, "transition">>(Box);


export const Loader = () => {
	return (
		<motion.div
			style={loadingContainer}
			variants={loadingContainerVariants}
			initial='start'
			animate='end'
		>
			<MotionBox
				{...loadingCircle}
				variants={loadingCircleVariants}
				transition={loadingCircleTransition}
			/>
			<MotionBox
				{...loadingCircle}
				variants={loadingCircleVariants}
				transition={loadingCircleTransition}
			/>
			<MotionBox
				{...loadingCircle}
				variants={loadingCircleVariants}
				transition={loadingCircleTransition}
			/>
		</motion.div>
	);
};
