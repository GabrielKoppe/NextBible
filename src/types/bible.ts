import { booksInfo } from '@/constant/booksInfo';

export interface BibleState {
	bible: BibleType;
	selectedVerses: VerseType[];
}

export interface VerseType {
	verse: number;
	text: string;
}

export interface BibleType {
	version: string;
	book: booksEnum;
	chapter: number;
}

export type booksEnum = keyof typeof booksInfo;
