import type { Metadata } from 'next';
import { Inter, Roboto_Mono, Playfair_Display } from 'next/font/google';
import Providers from './providers';

import '../style/globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

const roboto_mono = Roboto_Mono({
	subsets: ['latin'],
	variable: '--font-roboto-mono',
	display: 'swap',
});

const playfair_display = Playfair_Display({
	subsets: ['latin'],
	variable: '--font-playfair_display',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Biblia',
	description: 'Biblia',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body
				className={`${inter.variable} ${roboto_mono.variable} ${playfair_display.variable}`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
