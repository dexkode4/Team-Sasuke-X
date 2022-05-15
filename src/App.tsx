import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Select, SelectOption, SelectList } from './Select';

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box textAlign='center' fontSize='xl'>
			<Select>
				<SelectList>
					<SelectOption>Option 1</SelectOption>
					<SelectOption>Option 2</SelectOption>
					<SelectOption>Option 3</SelectOption>
				</SelectList>
			</Select>
		</Box>
	</ChakraProvider>
);
