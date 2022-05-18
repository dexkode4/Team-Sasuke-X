import React, { useContext, useEffect } from 'react';
import { ChevronDownIcon, SmallCloseIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	ButtonProps,
	Flex,
	forwardRef,
	Text,
} from '@chakra-ui/react';
import { SelectContext } from '../context';
import { Loader, MotionBox } from './Loader';

export type Modify<T, R> = Omit<T, keyof R> & R;

type SelectButtonProps = Modify<
	ButtonProps,
	{
		icon?: React.ReactNode;
		onOpen?: (value: boolean) => void;
	}
>;

export const rotate = {
	rotate: {
		rotate: -180,
		transition: {
			duration: 0.5,
		},
	},
	default: {
		rotate: 0,
		transition: {
			duration: 0.4,
		},
	},
};

export const SelectButton = forwardRef<SelectButtonProps, 'button'>(
	(props, _ref) => {
		const { icon, onSelect, onOpen, _placeholder, ...rest } = props;
		const {
			toggleDropdown,
			displayValue,
			variant,
			handleDisplayValue,
			handleValue,
			isLoading,
			isOpenDropdown,
			placeholder,
			isDisabled,
		} = useContext(SelectContext);

		const handleClearField = (event: React.MouseEvent<HTMLDivElement>) => {
			event.stopPropagation();
			handleDisplayValue(null);
			handleValue('');
		};

		const variants: Record<string, ButtonProps> = {
			flushed: {
				bg: 'transparent',
				borderBottomWidth: 2,
				borderRadius: 0,
				_hover: {
					borderBottomColor: '#3182CE',
				},
				_focus: {
					borderBottomColor: '#3182CE',
				},
			},
			filled: {
				variant: 'solid',
			},
			unstyled: {
				variant: 'unstyled',
			},
			outline: {
				variant: 'outline',
			},
		};

		useEffect(() => {
			onOpen && onOpen(isOpenDropdown);
		}, [isOpenDropdown, onOpen]);

		return (
			<Button
				fontSize='md'
				display={variant === 'native' ? 'none' : 'flex'}
				justifyContent='space-between'
				w='100%'
				{...(variant === 'filled'
					? {
							variant: 'solid',
					  }
					: { ...variants[variant] })}
				isDisabled={isDisabled}
				{...rest}
				onClick={() => toggleDropdown()}
			>
				{displayValue ?? <Text opacity={0.5} sx={_placeholder}>{placeholder}</Text>}
				<Flex alignItems='center'>
					{isLoading ? (
						<Loader />
					) : (
						<>
							{displayValue && (
								<Box
									bg='transparent'
									aria-label='clear field'
									w='max-content'
									_hover={{
										color: 'red',
									}}
									onClick={handleClearField}
									mr={1}
								>
									<SmallCloseIcon />
								</Box>
							)}
							{icon ?? (
								<MotionBox
									variants={rotate}
									initial='default'
									animate={isOpenDropdown ? 'rotate' : 'default'}
								>
									<ChevronDownIcon w={5} h={5} />
								</MotionBox>
							)}
						</>
					)}
				</Flex>
			</Button>
		);
	},
);
