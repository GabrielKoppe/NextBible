import { booksInfo } from '../constant/booksInfo';
import { BibleType, booksEnum } from '../types/bible';
export function getBookBefore(book: booksEnum) {
	const bookKeys = Object.keys(booksInfo) as booksEnum[];
	let before = book;
	bookKeys.find((b, i) => {
		if (b === book) {
			if (i !== 0) {
				before = bookKeys[i - 1];
			} else {
				before = 'ap';
			}
		}
	});
	return before;
}

export function getBookAfter(book: booksEnum) {
	const bookKeys = Object.keys(booksInfo) as booksEnum[];
	let after = book;
	bookKeys.find((b, i) => {
		if (b === book) {
			if (i !== bookKeys.length - 1) {
				after = bookKeys[i + 1];
			} else {
				after = 'gn';
			}
		}
	});
	return after;
}

export function getBefore(current: BibleType): BibleType {
	const newBible = current;
	const chapterBefore = current.chapter - 1;

	if (chapterBefore > 0) {
		newBible.chapter = chapterBefore;
	} else {
		newBible.book = getBookBefore(current.book);
		newBible.chapter = booksInfo[current.book]?.chapters;
	}

	return newBible;
}

export function getAfter(current: BibleType): BibleType {
	const newBible = current;
	const chapterAfter = current.chapter + 1;

	if (chapterAfter <= booksInfo[current.book]?.chapters) {
		newBible.chapter = chapterAfter;
	} else {
		newBible.book = getBookAfter(current.book);
		newBible.chapter = 1;
	}

	return newBible;
}
