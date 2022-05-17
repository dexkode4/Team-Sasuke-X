import * as React from 'react';
import { ChakraProvider, theme, Stack } from '@chakra-ui/react';
import { Example01 } from './Examples';
import { Example02 } from './Examples/Example02';

export const App = () => {

	return (
		<ChakraProvider theme={theme}>
			<Stack spacing={10} textAlign='center' fontSize='xl' p={20}>
				<Example01 />
				<Example02 />
			</Stack>
		</ChakraProvider>
	);
};
