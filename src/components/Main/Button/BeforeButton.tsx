import api from '@/api';
import { useBible } from '@/context/BibleContext';
import useBibleAPI from '@/hooks/useBibleAPI';
import { getBefore } from '@/util/pass';
import { getBookChapterText } from '@/util/text';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { IconButton, Tooltip } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';

function BeforeButton() {
	const router = useRouter();

	const [{ bible }, dispatch] = useBible();
	const before = getBefore({ ...bible });
	const icon = <ChevronLeftIcon />;

	const beforePrefetch = useBibleAPI(
		api.getChapter(before.version, before.book, before.chapter),
	);

	function onClick() {
		router.replace(`/${before.version}.${before.book}.${before.chapter}`, {
			scroll: false,
		});
		dispatch({ type: 'CHANGE_BIBLE', payload: before });
	}

	return (
		<Tooltip content={getBookChapterText(before)}>
			<IconButton radius="full" variant="soft" onClick={onClick} size="4">
				{icon}
			</IconButton>
		</Tooltip>
	);
}

export default BeforeButton;
