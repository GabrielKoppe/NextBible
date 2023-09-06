'use client';

import api from '@/api';
import { useBible } from '@/context/BibleContext';
import useBibleAPI from '@/hooks/useBibleAPI';
import { Select, Text } from '@radix-ui/themes';
import SelectMenuDefault from './SelectMenuDefault';
import { useRouter } from 'next/navigation';
import { VersionsType } from '@/types/ApiType';

export default function VersionMenu() {
	const router = useRouter();

	const [{ bible }, dispatch] = useBible();
	const { data: versions } = useBibleAPI<VersionsType[]>(api.getVersions);

	const onChangeVersion = (v: string) => {
		router.replace(`/${v}.${bible.book}.${bible.chapter}`, { scroll: false });
		dispatch({
			type: 'CHANGE_VERSION',
			payload: {
				version: v,
			},
		});
	};

	return (
		<SelectMenuDefault
			value={bible.version}
			placeholder="Versão"
			group={
				<>
					<Select.Label>Versões</Select.Label>
					{versions &&
						versions?.map(({ version }) => {
							return (
								<Select.Item key={version} value={version}>
									<Text>{version.toLocaleUpperCase()}</Text>
								</Select.Item>
							);
						})}
				</>
			}
			onChange={onChangeVersion}
		/>
	);
}
