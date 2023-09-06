'use client';

import { Flex, Heading } from '@radix-ui/themes';
import { useBible } from '@/context/BibleContext';
import Info from '../Button/InfoButton';
import { booksName } from '@/constant/booksName';

function HeadBible() {
	const [
		{
			bible: { book, chapter },
		},
	] = useBible();

	return (
		<Flex direction="row" gap="2" align="center" px="4">
			<Heading size="6">
				{booksName[book]} {chapter}
			</Heading>
			<Info book={book} />
		</Flex>
	);
}

export default HeadBible;
