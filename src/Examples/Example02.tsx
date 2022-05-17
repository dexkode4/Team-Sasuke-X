import React from 'react';
import {
	Select,
	SelectOption,
	SelectList,
	SelectGroup,
	SelectButton,
} from '../Select';
import { Value } from '../Select/context';

export const Example02 = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleChange = (value: Value) => {
		console.log('value', value);
	};

	const handleOpen = (value: boolean) => {
		console.log(value);
		setIsOpen(value);
	};

	const ButtonIcon = () => {
		return isOpen ? <>👆</> : <>👇</>;
	};
	return (
		<Select placeholder='Select option' w='300px' variant='outline'>
			<SelectButton icon={<ButtonIcon />} onOpen={handleOpen} />
			<SelectList onSelect={handleChange}>
				<SelectOption
					_hover={{
						bg: 'orange',
						color: 'white',
					}}
					value={1}
				>
					Option 1
				</SelectOption>
				<SelectOption value={2}>Option 2</SelectOption>
				<SelectOption value={3}>Option 3</SelectOption>

				<SelectGroup label='Sub header'>
					<SelectOption value={4}>Option 4</SelectOption>
					<SelectOption value={5}>Option 5</SelectOption>
					<SelectOption value={6}>Option 6</SelectOption>
				</SelectGroup>
			</SelectList>
		</Select>
	);
};
