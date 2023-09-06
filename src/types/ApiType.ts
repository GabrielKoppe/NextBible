import { booksEnum } from './bible';

export type TestamentType = 'VT' | 'NT';

export type VersionsType = {
	version: string;
	verses: number;
};

export type BooksType = {
	abbrev: { pt: booksEnum; en: string };
	author: string;
	chapters: number;
	group: string;
	name: string;
	testament: TestamentType;
};

export type BookType = {
	abbrev: {
		pt: booksEnum;
		en: string;
	};
	author: string;
	chapters: number;
	comment: string;
	group: string;
	name: string;
	testament: TestamentType;
};

export type ChapterType = {
	book: {
		abbrev: { pt: booksEnum; en: string };
		name: string;
		author: string;
		group: string;
		version: string;
	};
	chapter: {
		number: number;
		verses: number;
	};
	verses: { number: number; text: string }[];
};
