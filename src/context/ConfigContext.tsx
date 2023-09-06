'use client';

import React from 'react';

const InitialConfig: ConfigState = {
	theme: 'dark',
	textConfig: {
		textSize: 4,
		systemColor: 'brown',
		font: '--font-inter',
	},
};

export const ConfigContext = React.createContext<{
	config: ConfigState;
	dispatch: React.Dispatch<ConfigAction>;
}>({
	config: InitialConfig,
	dispatch: (value: ConfigAction) => {},
});

export function ConfigProvider({ children }: { children: React.ReactNode }) {
	const [config, dispatch] = React.useReducer(ConfigReducer, InitialConfig);

	return (
		<ConfigContext.Provider value={{ config, dispatch }}>
			{children}
		</ConfigContext.Provider>
	);
}

export function useConfig(): [ConfigState, React.Dispatch<ConfigAction>] {
	const { config, dispatch } = React.useContext(ConfigContext);
	return [config, dispatch];
}

function ConfigReducer(state: ConfigState, action: ConfigAction): ConfigState {
	switch (action.type) {
		case 'CHANGE_THEME':
			return {
				...state,
				theme: state.theme === 'dark' ? 'light' : 'dark',
			};
		case 'ADD_TEXT_SIZE':
			const add =
				state.textConfig.textSize <= 9 && state.textConfig.textSize + 1;
			if (add) {
				return {
					...state,
					textConfig: {
						...state.textConfig,
						textSize: add,
					},
				};
			}
			return state;
		case 'SUB_TEXT_SIZE':
			const sub =
				state.textConfig.textSize >= 1 && state.textConfig.textSize - 1;
			if (sub) {
				return {
					...state,
					textConfig: {
						...state.textConfig,
						textSize: sub,
					},
				};
			}
			return state;
		case 'CHANGE_FONT_INTER':
			return {
				...state,
				textConfig: {
					...state.textConfig,
					font: '--font-inter',
				},
			};
		case 'CHANGE_FONT_ROBOTO':
			return {
				...state,
				textConfig: {
					...state.textConfig,
					font: '--font-roboto-mono',
				},
			};
		case 'CHANGE_FONT_PLAYFAIR':
			return {
				...state,
				textConfig: {
					...state.textConfig,
					font: '--font-playfair_display',
				},
			};
		case 'CHANGE_SYSTEM_COLOR':
			return {
				...state,
				textConfig: {
					...state.textConfig,
					systemColor: action.payload,
				},
			};
		default:
			return state;
	}
}

type ConfigAction =
	| {
			type: 'CHANGE_THEME';
	  }
	| {
			type: 'ADD_TEXT_SIZE';
	  }
	| {
			type: 'SUB_TEXT_SIZE';
	  }
	| {
			type: 'CHANGE_FONT_INTER';
	  }
	| {
			type: 'CHANGE_FONT_ROBOTO';
	  }
	| {
			type: 'CHANGE_FONT_PLAYFAIR';
	  }
	| {
			type: 'CHANGE_SYSTEM_COLOR';
			payload: ColorType;
	  };

interface ConfigState {
	theme: ThemeType;
	textConfig: {
		textSize: number;
		systemColor: ColorType;
		font: FontType;
	};
}
