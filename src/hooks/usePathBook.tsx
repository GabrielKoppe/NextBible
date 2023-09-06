'use client';

import { booksEnum } from '@/types/bible';
import { usePathname } from 'next/navigation';

function usePathBook() {
	const pathname = usePathname();
	const rawPath = pathname.substring(1, pathname.length);
	const bibleArray = rawPath.split('.');
	const bible = {
		version: bibleArray[0],
		book: bibleArray[1] as booksEnum,
		chapter: Number(bibleArray[2]),
	};

	return bible;
}

export default usePathBook;
