import { NextRequest, NextResponse } from 'next/server';

export async function GET(
	request: NextRequest,
	context: { params: { uri: string[] } },
) {
	const uriArray = context.params.uri;
	const uri = uriArray.join('/');

	const bibleData = await fetch(`${process.env.BIBLE_API}/${uri}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${process.env.BIBLE_TOKEN}`,
		},
		cache: 'force-cache',
	});

	const data = await bibleData.json();

	return NextResponse.json(data);
}
