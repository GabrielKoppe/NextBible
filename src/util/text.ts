import { booksInfo } from '../constant/booksInfo';
import { BibleState, BibleType, VerseType } from '../types/bible';

export function getBookChapterText(bible: BibleType) {
	return `${booksInfo[bible.book]?.name} ${bible.chapter}`;
}

export function getBookChapterVerseText({ bible, selectedVerses }: BibleState) {
	return `${booksInfo[bible.book]?.name} ${bible.chapter}:${getNumber(
		selectedVerses,
	)}`;
}

export function getBookChapterVerseVersionText({
	bible,
	selectedVerses,
}: BibleState) {
	return `${booksInfo[bible.book]?.name} ${bible.chapter}:${getNumber(
		selectedVerses,
	)} (${bible.version.toUpperCase()})`;
}

export function getFull({ bible, selectedVerses }: BibleState) {
	return `"${getText(selectedVerses)}"\n\n${booksInfo[bible.book]?.name} ${
		bible.chapter
	}:${getNumber(selectedVerses)} (${bible.version.toUpperCase()})`;
}

export function getText(s: VerseType[]) {
	s = s.sort((a, b) => a.verse - b.verse);

	let text = '';
	s.forEach((verse, i) => {
		text += `${i > 0 ? ' ' : ''}${verse.text}`;
	});

	return text;
}

export function getNumber(s: VerseType[]) {
	s = s.sort((a, b) => a.verse - b.verse);

	let number = '';
	let rangeStart = s[0].verse;

	s.forEach(({ verse }, index) => {
		if (index === 0) {
			number += verse;
		} else if (verse === s[index - 1].verse + 1) {
			if (index === s.length - 1) {
				number += `-${verse}`;
			}
		} else {
			if (rangeStart !== s[index - 1].verse) {
				number += `-${s[index - 1].verse}`;
			}
			number += `,${verse}`;
			rangeStart = verse;
		}
	});

	return number;
}
