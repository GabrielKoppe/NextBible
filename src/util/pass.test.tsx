import { describe, expect, test } from 'vitest';
import { getAfter, getBefore, getBookAfter, getBookBefore } from './pass';

describe('Testes do getBookBefore', () => {
	test('Entrada gn, deve retronar "ap"', () => {
		expect(getBookBefore('gn')).toBe('ap');
	});
	test('Entrada ex, deve retronar "gn"', () => {
		expect(getBookBefore('ex')).toBe('gn');
	});
	test('Entrada ap, deve retronar "jd"', () => {
		expect(getBookBefore('ap')).toBe('jd');
	});
});

describe('Testes do getBookAfter', () => {
	test('Entrada gn, deve retronar "ex"', () => {
		expect(getBookAfter('gn')).toBe('ex');
	});
	test('Entrada ex, deve retronar "lv"', () => {
		expect(getBookAfter('ex')).toBe('lv');
	});
	test('Entrada ap, deve retronar "gn"', () => {
		expect(getBookAfter('ap')).toBe('gn');
	});
});

describe('Testes do getBefore', () => {
	test('Entrada gn 1, deve retronar ap 22', () => {
		const test = getBefore({
			version: 'nvi',
			book: 'gn',
			chapter: 1,
		});
		expect(test.book).toBe('ap');
		expect(test.chapter).toBe(22);
	});
	test('Entrada gn 2, deve retronar gn 1', () => {
		const test = getBefore({
			version: 'nvi',
			book: 'gn',
			chapter: 2,
		});
		expect(test.book).toBe('gn');
		expect(test.chapter).toBe(1);
	});
	test('Entrada ex 1, deve retronar gn 50', () => {
		const test = getBefore({
			version: 'nvi',
			book: 'ex',
			chapter: 1,
		});
		expect(test.book).toBe('gn');
		expect(test.chapter).toBe(50);
	});
	test('Entrada ap 22, deve retronar ap 21', () => {
		const test = getBefore({
			version: 'nvi',
			book: 'ap',
			chapter: 22,
		});
		expect(test.book).toBe('ap');
		expect(test.chapter).toBe(21);
	});
});

describe('Testes do getAfter', () => {
	test('Entrada gn 1, deve retronar gn 2', () => {
		const test = getAfter({
			version: 'nvi',
			book: 'gn',
			chapter: 1,
		});
		expect(test.book).toBe('gn');
		expect(test.chapter).toBe(2);
	});
	test('Entrada gn 50, deve retronar ex 1', () => {
		const test = getAfter({
			version: 'nvi',
			book: 'gn',
			chapter: 50,
		});
		expect(test.book).toBe('ex');
		expect(test.chapter).toBe(1);
	});
	test('Entrada ex 1, deve retronar ex 2', () => {
		const test = getAfter({
			version: 'nvi',
			book: 'ex',
			chapter: 1,
		});
		expect(test.book).toBe('ex');
		expect(test.chapter).toBe(2);
	});
	test('Entrada ap 22, deve retronar gn 1', () => {
		const test = getAfter({
			version: 'nvi',
			book: 'ap',
			chapter: 22,
		});
		expect(test.book).toBe('gn');
		expect(test.chapter).toBe(1);
	});
});
