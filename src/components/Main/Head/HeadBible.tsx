import { Flex, Heading } from '@radix-ui/themes';
import { useBible } from '@/context/BibleContext';
import Info from '../Button/InfoButton';
import { getBookChapterText } from '@/util/text';

function HeadBible() {
	const [{ bible }] = useBible();

	return (
		<Flex direction="row" gap="2" align="center" px="4">
			<Heading size="6">{getBookChapterText(bible)}</Heading>
			<Info book={bible.book} />
		</Flex>
	);
}

export default HeadBible;
