'use client';

import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import Default from '.';
import { useConfig } from '@/context/ConfigContext';

export default function ThemeButton() {
	const [{ theme }, dispatch] = useConfig();

	const candidateTheme = theme === 'dark' ? 'light' : 'dark';

	function onClick() {
		dispatch({ type: 'CHANGE_THEME' });
	}
	return (
		<Default
			icon={<IconTheme theme={candidateTheme} />}
			text="Tema"
			onDefaultClick={onClick}
		/>
	);
}

function IconTheme({ theme }: { theme: 'light' | 'dark' }) {
	if (theme === 'dark') {
		return <MoonIcon />;
	}
	return <SunIcon />;
}
