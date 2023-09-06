import { Flex } from '@radix-ui/themes';
import VersionMenu from './VersionMenu';
import BookMenu from './BookMenu';
import ChapterMenu from './ChapterMenu';

export default function Selector() {
	return (
		<Flex direction="row" gap="5">
			<VersionMenu />
			<BookMenu />
			<ChapterMenu />
		</Flex>
	);
}
