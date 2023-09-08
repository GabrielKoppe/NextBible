'use client';

import React from 'react';
import usePathBook from '@/hooks/usePathBook';
import { BibleState, BibleType, VerseType, booksEnum } from '@/types/bible';
import { getAfter, getBefore } from '@/util/pass';

const bibleInitial: BibleState = {
	bible: {
		version: '',
		book: 'gn',
		chapter: 0,
	},
	selectedVerses: [],
};

export const bibleContext = React.createContext<{
	bible: BibleState;
	dispatch: React.Dispatch<BibleAction>;
}>({
	bible: bibleInitial,
	dispatch: (value: BibleAction) => {},
});

export function BibleProvider({ children }: { children: React.ReactNode }) {
	const pathBible = usePathBook();
	const [bible, dispatch] = React.useReducer(bibleReducer, {
		...bibleInitial,
		bible: pathBible,
	});

	return (
		<bibleContext.Provider value={{ bible, dispatch }}>
			{children}
		</bibleContext.Provider>
	);
}

export function useBible(): [BibleState, React.Dispatch<BibleAction>] {
	const { bible, dispatch } = React.useContext(bibleContext);
	return [bible, dispatch];
}

function bibleReducer(state: BibleState, action: BibleAction): BibleState {
	switch (action.type) {
		case 'CHANGE_BOOK':
			return {
				...state,
				bible: {
					...state.bible,
					book: action.payload.book,
					chapter: 1,
				},
				selectedVerses: [],
			};
		case 'CHANGE_CHAPTER':
			return {
				...state,
				bible: { ...state.bible, chapter: action.payload.chapter },
				selectedVerses: [],
			};
		case 'CHANGE_VERSION':
			return {
				...state,
				bible: { ...state.bible, version: action.payload.version },
				selectedVerses: [],
			};
		case 'CHANGE_SELECTED':
			if (action.payload === null) {
				return {
					...state,
					selectedVerses: [],
				};
			}
			const changeSelected = [...state.selectedVerses, action.payload];
			return {
				...state,
				selectedVerses: changeSelected,
			};
		case 'CHANGE_BIBLE':
			return {
				...state,
				bible: action.payload,
				selectedVerses: [],
			};
		default:
			return state;
	}
}

type BibleAction =
	| {
			type: 'CHANGE_BOOK';
			payload: {
				book: booksEnum;
			};
	  }
	| {
			type: 'CHANGE_CHAPTER';
			payload: {
				chapter: number;
			};
	  }
	| {
			type: 'CHANGE_VERSION';
			payload: {
				version: string;
			};
	  }
	| {
			type: 'CHANGE_SELECTED';
			payload: VerseType | null;
	  }
	| {
			type: 'CHANGE_BIBLE';
			payload: BibleType;
	  };
