import { useBible } from '@/context/BibleContext';
import { useMemo } from 'react';
import { VerseType } from '@/types/bible';
import { getFull } from '@/util/text';

function useSelected() {
	const [{ bible, selectedVerses }, dispatch] = useBible();

	const has = useMemo(() => Boolean(selectedVerses?.length), [selectedVerses]);

	function is(isSelected: number) {
		return Boolean(selectedVerses.find((sel) => sel.verse === isSelected));
	}

	function toString() {
		return getFull({ bible, selectedVerses });
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
