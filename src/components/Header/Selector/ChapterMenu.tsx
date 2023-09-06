'use client';

import { useBible } from '@/context/BibleContext';
import { ScrollArea, Select, Text } from '@radix-ui/themes';
import { useMemo } from 'react';
import SelectMenuDefault from './SelectMenuDefault';
import api from '@/api';
import useBibleAPI from '@/hooks/useBibleAPI';
import { useRouter } from 'next/navigation';
import { BookType } from '@/types/ApiType';

export default function ChapterMenu() {
	const router = useRouter();
	const [{ bible }, dispatch] = useBible();
	const { data: book } = useBibleAPI<BookType>(api.getBooks(bible.book));

	const chaptersArray = useMemo(() => {
		if (book) {
			return Array.from({ length: book.chapters }, (_, i) => i + 1);
		}
	}, [book?.chapters]);

	const onChangeChapter = (c: string) => {
		router.replace(`/${bible.version}.${bible.book}.${c}`, { scroll: false });
		dispatch({
			type: 'CHANGE_CHAPTER',
			payload: {
				chapter: Number(c),
			},
		});
	};

	return (
		<SelectMenuDefault
			value={String(bible.chapter)}
			placeholder="Capítulo"
			group={
				<>
					{chaptersArray &&
						chaptersArray.map((chapter) => {
							return (
								<Select.Item key={chapter} value={String(chapter)}>
									<Text>{chapter}</Text>
								</Select.Item>
							);
						})}
				</>
			}
			onChange={onChangeChapter}
		/>
	);
}
