import { headers } from 'next/headers';
import UAParser from 'ua-parser-js';

export default function isMobile() {
	const headersList = headers();
	const userAgent = headersList.get('user-agent');
	const parser = new UAParser(userAgent as string);
	const device = parser.getDevice();

	return device.type === 'mobile';
}
