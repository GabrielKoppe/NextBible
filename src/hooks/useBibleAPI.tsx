'use client';

import useSWR from 'swr';

function useBibleAPI<T>(call: string): T {
	const { data } = useSWR(`/api/bible${call}`);

	return data;
}

export default useBibleAPI;
