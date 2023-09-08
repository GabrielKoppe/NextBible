'use client';

import { BibleProvider } from '@/context/BibleContext';
import { Theme } from '@radix-ui/themes';
import { ReactNode } from 'react';

import '@radix-ui/themes/styles.css';
import { ConfigProvider, useConfig } from '@/context/ConfigContext';
import { SWRConfig } from 'swr';

export default function ({ children }: { children: ReactNode }) {
	return (
		<ConfigProvider>
			<BibleProvider>
				<ThemeProv>
					<SWRConfig
						value={{
							fetcher: (resource, init) =>
								fetch(resource, init).then((res) => res.json()),
						}}
					>
						{children}
					</SWRConfig>
				</ThemeProv>
			</BibleProvider>
		</ConfigProvider>
	);
}

function ThemeProv({ children }: { children: ReactNode }) {
	const [
		{
			theme,
			textConfig: { systemColor },
		},
	] = useConfig();

	return (
		<Theme
			appearance={theme}
			accentColor={systemColor}
			grayColor="sand"
			radius="large"
			panelBackground="solid"
		>
			{children}
		</Theme>
	);
}
