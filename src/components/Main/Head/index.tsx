import { Box, Flex } from '@radix-ui/themes';
import HeadBible from './HeadBible';
import SelectedMenu from './SelectedMenu';

function Head() {
	return (
		<Box>
			<Flex direction="row" align="center" justify="between">
				<HeadBible />
				<SelectedMenu />
			</Flex>
		</Box>
	);
}

export default Head;
