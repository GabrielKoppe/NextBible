import { Flex, ScrollArea, Select } from '@radix-ui/themes';

interface SelectMenuDefaultProps {
	value: string;
	placeholder: string;
	group: JSX.Element;
	onChange: (v: string) => void;
}

export default function SelectMenuDefault({
	value,
	placeholder,
	group,
	onChange,
}: SelectMenuDefaultProps) {
	return (
		<Select.Root value={value} onValueChange={onChange}>
			<Select.Trigger placeholder={placeholder} variant="ghost" />
			<Select.Content position="popper">
				<Select.Group>
					<ScrollArea
						type="auto"
						scrollbars="vertical"
						style={{ maxHeight: 260 }}
					>
						{group}
					</ScrollArea>
				</Select.Group>
			</Select.Content>
		</Select.Root>
	);
}
