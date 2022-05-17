import * as React from 'react';
import { ChakraProvider, Box, theme, Heading } from '@chakra-ui/react';
import { Select, SelectOption, SelectList, SelectGroup } from './Select';
import { SelectButton } from './Select/components/SelectButton';
import { Value } from './Select/context';

export const App = () => {
	const handleChange = (value: Value) => {
		console.log('value', value)
	};
	return (
		<ChakraProvider theme={theme}>
			<Box textAlign='center' fontSize='xl' p={20}>
				<Select placeholder='Select option' w='300px' variant='native'>
					<SelectButton
						onSelect={handleChange}
					/>
					<SelectList onSelect={handleChange}>
						<SelectOption _hover={{
							bg: 'orange',
							color: 'white'
						}} value={1}>Option 1</SelectOption>
						<SelectOption value={2}>Option 2</SelectOption>
						<SelectOption value={3}>Option 3</SelectOption>

						<SelectGroup label='Sub header'>
							<SelectOption value={1}>Option 1</SelectOption>
							<SelectOption value={2}>Option 2</SelectOption>
							<SelectOption value={3}>Option 3</SelectOption>
						</SelectGroup>
					</SelectList>
				</Select>
				<Heading>Hello world</Heading>
			</Box>
		</ChakraProvider>
	);
};
