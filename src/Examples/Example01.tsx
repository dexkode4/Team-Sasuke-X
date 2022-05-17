import React from 'react';
import {
	Select,
	SelectOption,
	SelectList,
	SelectGroup,
	SelectButton,
	Value
} from '../Select';

export const Example01 = () => {
	const handleChange = (value: Value) => {
		console.log('value', value);
	};


	return (
		<Select placeholder='Select option' w='300px' variant='outline'>
			<SelectButton />
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
