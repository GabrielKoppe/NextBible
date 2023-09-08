'use client';

import api from '@/api';
import { useBible } from '@/context/BibleContext';
import useBibleAPI from '@/hooks/useBibleAPI';
import { Select, Text } from '@radix-ui/themes';
import { useMemo } from 'react';
import SelectMenuDefault from './SelectMenuDefault';
import { useRouter } from 'next/navigation';
import { BooksType } from '@/types/ApiType';
import { booksEnum } from '@/types/bible';

export default function BookMenu() {
	const router = useRouter();

	const [{ bible }, dispatch] = useBible();

	const books = useBibleAPI<BooksType[]>(api.getBooks());

	const onChangeBook = (b: string) => {
		router.replace(`/${bible.version}.${b}.1`, { scroll: false });
		dispatch({
			type: 'CHANGE_BOOK',
			payload: {
				book: b as booksEnum,
			},
		});
	};

	const vt = useMemo(
		() => books?.filter((book) => book.testament === 'VT'),
		[books],
	);
	const nt = useMemo(
		() => books?.filter((book) => book.testament === 'NT'),
		[books],
	);

	return (
		<SelectMenuDefault
			value={bible.book}
			placeholder="Livro"
			group={
				<>
					<Select.Label>Velho Testamento</Select.Label>
					{vt &&
						vt.map((book) => {
							return (
								<Select.Item key={book.abbrev.pt} value={book.abbrev.pt}>
									<Text>{book.name}</Text>
								</Select.Item>
							);
						})}
					<Select.Label>Novo Testamento</Select.Label>
					{nt &&
						nt.map((book) => {
							return (
								<Select.Item key={book.abbrev.pt} value={book.abbrev.pt}>
									<Text>{book.name}</Text>
								</Select.Item>
							);
						})}
				</>
			}
			onChange={onChangeBook}
		/>
	);
}
