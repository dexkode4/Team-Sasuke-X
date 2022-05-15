import * as React from 'react';
import { ChakraProvider, Box, theme, Heading } from '@chakra-ui/react';
import { Select, SelectOption, SelectList } from './Select';
import { SelectButton } from './Select/components/SelectButton';
import { Value } from './Select/context';

export const App = () => {
	const handleChange = (value: Value) => {
		console.log('helo', value)
	}
	return (
	<ChakraProvider theme={theme}>
		<Box textAlign='center' fontSize='xl' p={20}>
			<Select>
				<SelectButton
					handleChange={handleChange}
					placeholder='Select option'
				/>
				<SelectList>
					<SelectOption value={1}>Option 1</SelectOption>
					<SelectOption value={2}>Option 2</SelectOption>
					<SelectOption value={3}>Option 3</SelectOption>
				</SelectList>
			</Select>
			<Heading>Hello world</Heading>
		</Box>
	</ChakraProvider>
)};
