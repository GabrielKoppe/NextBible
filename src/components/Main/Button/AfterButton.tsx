import api from '@/api';
import { useBible } from '@/context/BibleContext';
import useBibleAPI from '@/hooks/useBibleAPI';
import { getAfter } from '@/util/pass';
import { getBookChapterText } from '@/util/text';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { IconButton, Tooltip } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';

function AfterButton() {
	const router = useRouter();

	const [{ bible }, dispatch] = useBible();

	const after = getAfter({ ...bible });
	const icon = <ChevronRightIcon />;

	const afterPrefetch = useBibleAPI(
		api.getChapter(after.version, after.book, after.chapter),
	);

	function onClick() {
		router.replace(`/${after.version}.${after.book}.${after.chapter}`, {
			scroll: false,
		});
		dispatch({ type: 'CHANGE_BIBLE', payload: after });
	}

	return (
		<Tooltip content={getBookChapterText(after)}>
			<IconButton radius="full" variant="soft" onClick={onClick} size="4">
				{icon}
			</IconButton>
		</Tooltip>
	);
}

export default AfterButton;
