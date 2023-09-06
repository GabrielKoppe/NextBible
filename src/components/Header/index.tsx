import { Box, Container, Flex } from '@radix-ui/themes';
import Logo from './Logo';
import Selector from './Selector';

export default function Header({}) {
	return (
		<Box py="4">
			<Flex direction="column" align="center">
				<Logo />
				<Selector />
			</Flex>
		</Box>
	);
}
