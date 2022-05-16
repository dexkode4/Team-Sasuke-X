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
import { Loader } from './Loader';

export type Modify<T, R> = Omit<T, keyof R> & R;

type SelectButtonProps = Modify<
	ButtonProps,
	{
		placeholder: string;
		icon?: React.ReactNode;
		onChange: (value: Value) => void;
	}
>;

export const SelectButton = forwardRef<SelectButtonProps, 'button'>(
	(props, _ref) => {
		const { placeholder, icon, onChange, ...rest } = props;
		const {
			toggleDropdown,
			displayValue,
			value,
			variant,
			handleDisplayValue,
			handleValue,
			isLoading,
		} = useContext(SelectContext);
		const componentJustMounted = useRef(true);

		const handleClearField = (event: React.MouseEvent<HTMLDivElement>) => {
			event.stopPropagation();
			handleDisplayValue(null);
			handleValue('');
		};

		useEffect(() => {
			if (!componentJustMounted.current) {
				onChange(value);
			}
			componentJustMounted.current = false;
		}, [onChange, value]);

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
							{icon ?? <ChevronDownIcon w={5} h={5} />}
						</>
					)}
				</Flex>
			</Button>
		);
	},
);
