'use client';

import { useBible } from '@/context/BibleContext';
import Verse from '../Verse';
import { Container, Flex, ScrollArea } from '@radix-ui/themes';
import api from '@/api';
import useBibleAPI from '@/hooks/useBibleAPI';
import { ChapterType } from '@/types/ApiType';

function Read() {
	const [
		{
			bible: { version, book, chapter },
		},
	] = useBible();

	const data = useBibleAPI<ChapterType>(api.getChapter(version, book, chapter));

	if (!data) {
		return <></>;
	}

	return (
		<>
			<ScrollArea type="auto" scrollbars="vertical" style={{ height: '70vh' }}>
				<Container p="4">
					<Flex display="inline-flex" direction="row" wrap="wrap" gap="1">
						<p>
							{data.verses.map((verse) => (
								<Verse
									key={`verse-${verse.number}`}
									verse={verse.number}
									text={verse.text}
								/>
							))}
						</p>
					</Flex>
				</Container>
			</ScrollArea>
		</>
	);
}

export default Read;
