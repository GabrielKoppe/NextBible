'use client';

import { useBible } from '@/context/BibleContext';
import { Select, Text } from '@radix-ui/themes';
import { useMemo } from 'react';
import SelectMenuDefault from './SelectMenuDefault';
import { useRouter } from 'next/navigation';
import { booksInfo } from '@/constant/booksInfo';

export default function ChapterMenu() {
	const router = useRouter();
	const [{ bible }, dispatch] = useBible();

	const chaptersArray = useMemo(() => {
		return Array.from(
			{ length: booksInfo[bible.book]?.chapters },
			(_, i) => i + 1,
		);
	}, [bible.book]);

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
