const api = {
	getVersions: '/versions',
	getBooks: (book?: string): string => `/books${book ? `/${book}` : ''}`,
	getChapter: (
		version: string,
		book: string | number,
		chapter: string | number,
	) => `/verses/${version}/${book}/${chapter}`,
};

export default api;
