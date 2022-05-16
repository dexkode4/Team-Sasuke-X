import React, { useContext, useEffect, useRef } from 'react';
import { ChevronDownIcon, SmallCloseIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	ButtonProps,
	Flex,
	forwardRef,
	Text,
} from '@chakra-ui/react';
import { SelectContext, Value } from '../context';

interface SelectButtonProps extends ButtonProps {
	placeholder: string;
	handleChange: (value: Value) => void;
	icon?: React.ReactNode;
}

export const SelectButton = forwardRef<SelectButtonProps, 'button'>(
	(props, _ref) => {
		const { placeholder, handleChange, icon, ...rest } = props;
		const {
			toggleDropdown,
			displayValue,
			value,
			variant,
			handleDisplayValue,
			handleValue,
		} = useContext(SelectContext);
		const componentJustMounted = useRef(true);

		const handleClearField = (event: React.MouseEvent<HTMLDivElement>) => {
			event.stopPropagation();
			handleDisplayValue(null);
			handleValue('');
		};

		useEffect(() => {
			if (!componentJustMounted.current) {
				handleChange(value);
			}
			componentJustMounted.current = false;
		}, [handleChange, value]);

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

		return (
			<Button
				fontSize='md'
				display='flex'
				justifyContent='space-between'
				w='100%'
				{...(variant === 'filled'
					? {
							variant: 'solid',
					  }
					: { ...variants[variant] })}
				{...rest}
				onClick={() => toggleDropdown()}
			>
				{displayValue ?? <Text opacity={0.5}>{placeholder}</Text>}
				<Flex>
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
					{icon ?? <ChevronDownIcon w={5} h={5} />}
				</Flex>
			</Button>
		);
	},
);
