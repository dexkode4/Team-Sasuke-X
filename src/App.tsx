import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Select, SelectOption, SelectList } from './Select';
import { SelectButton } from './Select/components/SelectButton';

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box textAlign='center' fontSize='xl' p={20}>
			<Select>
        <SelectButton placeholder='Select option' />
				<SelectList>
					<SelectOption value={1}>Option 1</SelectOption>
					<SelectOption value={2}>Option 2</SelectOption>
					<SelectOption value={3}>Option 3</SelectOption>
				</SelectList>
			</Select>
		</Box>
	</ChakraProvider>
);
