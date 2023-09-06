import { booksName } from '@/constant/booksName';

export interface VerseType {
	verse: number;
	text: string;
}

export type booksEnum = keyof typeof booksName;
