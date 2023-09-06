'use client';

import { useEffect, useState } from 'react';

function useBibleAPI<T>(call: string) {
	const [bible, setBible] = useState<T>();
	const [error, setError] = useState<Error>();
	useEffect(() => {
		const getBible = async () => {
			const bibleData = await fetch(
				`${process.env.NEXT_PUBLIC_BIBLE_API}${call}`,
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${process.env.NEXT_PUBLIC_BIBLE_TOKEN}`,
					},
					cache: 'force-cache',
				},
			);

			const bibleJson = await bibleData.json();

			if (!bibleData.ok) {
				setError(bibleJson);
			} else {
				setBible(bibleJson);
			}
		};

		getBible();
	}, [call]);

	return {
		data: bible,
		error,
		isError: !error,
		isLoading: !bible,
	};
}

export default useBibleAPI;
