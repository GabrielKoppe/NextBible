'use client';

import api from '@/api';
import useBibleAPI from '@/hooks/useBibleAPI';
import { BookType } from '@/types/ApiType';
import { getTestament } from '@/constant/bible';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { Heading, HoverCard, ScrollArea, Strong, Text } from '@radix-ui/themes';

interface InfoProps {
	book: string;
}

function Info({ book }: InfoProps) {
	const { data } = useBibleAPI<BookType>(api.getBooks(book));

	if (!data) {
		return <></>;
	}

	return (
		<HoverCard.Root>
			<HoverCard.Trigger>
				<InfoCircledIcon fillOpacity="0.5" />
			</HoverCard.Trigger>
			<HoverCard.Content>
				<ScrollArea
					type="auto"
					scrollbars="vertical"
					style={{ maxHeight: 180 }}
				>
					<Text as="p" size="2">
						<Strong>Grupo: </Strong>
						{data.group}
					</Text>
					<Text as="p" size="2">
						<Strong>Testamento: </Strong>
						{getTestament[data.testament]}
					</Text>
					<Text as="p" size="2">
						<Strong>Autor: </Strong>
						{data.author}
					</Text>
					{data.comment && (
						<Text as="p" size="2" mt="3" style={{ maxWidth: 300 }}>
							{data.comment}
						</Text>
					)}
				</ScrollArea>
			</HoverCard.Content>
		</HoverCard.Root>
	);
}

export default Info;
