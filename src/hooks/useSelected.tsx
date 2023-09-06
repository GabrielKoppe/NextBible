import { useBible } from '@/context/BibleContext';
import { useMemo } from 'react';
import { booksName } from '@/constant/booksName';
import { VerseType } from '@/types/bible';
import { getNumber, getText } from '@/util/selected';

function useSelected() {
	const [{ bible, selectedVerses }, dispatch] = useBible();

	const has = useMemo(() => Boolean(selectedVerses?.length), [selectedVerses]);

	function is(isSelected: number) {
		return Boolean(selectedVerses.find((sel) => sel.verse === isSelected));
	}

	function toString() {
		return `"${getText(selectedVerses)}"\n\n${booksName[bible.book]} ${
			bible.chapter
		}:${getNumber(selectedVerses)} (${bible.version.toUpperCase()})`;
	}

	function set(set: VerseType | null = null) {
		dispatch({ type: 'CHANGE_SELECTED', payload: set });
	}

	return {
		has,
		is,
		toString,
		set,
	};
}

export default useSelected;
