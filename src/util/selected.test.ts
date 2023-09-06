import { getNumber, getText } from './selected';
import { describe, expect, test } from 'vitest';

describe('Testes do getNumber', () => {
	test('Entrada do verso 1 ao 7, deve retronar "1-7"', () => {
		const number = getNumber(VerseTeste);

		expect(number).toBe('1-7');
	});
	test('Entrada do versos pares, deve retronar "2,4,6"', () => {
		const number = getNumber(
			VerseTeste.filter((verse) => verse.verse % 2 === 0),
		);

		expect(number).toBe('2,4,6');
	});
	test('Entrada do versos 1,3,4,5,7, deve retronar "1,3-5,7"', () => {
		const teste = [1, 3, 4, 5, 7];
		const number = getNumber(
			VerseTeste.filter((verse) => teste.includes(verse.verse)),
		);

		expect(number).toBe('1,3-5,7');
	});
	test('Entrada do versos 1, deve retronar "1"', () => {
		const number = getNumber([VerseTeste[0]]);

		expect(number).toBe('1');
	});
});

describe('Testes do getText', () => {
	test('Entrada do verso 1 ao 7', () => {
		const text = getText(VerseTeste);

		expect(text).toBe(
			'Meus filhinhos, escrevo-lhes estas coisas para que vocês não pequem. Se, porém, alguém pecar, temos um intercessor junto ao Pai, Jesus Cristo, o Justo. Ele é a propiciação pelos nossos pecados, e não somente pelos nossos, mas também pelos pecados de todo o mundo. Sabemos que o conhecemos, se obedecemos aos seus mandamentos. Aquele que diz: "Eu o conheço", mas não obedece aos seus mandamentos, é mentiroso, e a verdade não está nele. Mas, se alguém obedece à sua palavra, nele verdadeiramente o amor de Deus está aperfeiçoado. Desta forma sabemos que estamos nele: aquele que afirma que permanece nele, deve andar como ele andou. Amados, não lhes escrevo um mandamento novo, mas um mandamento antigo, que vocês têm desde o princípio: a mensagem que ouviram.',
		);
	});
	test('Entrada do versos pares', () => {
		const text = getText(VerseTeste.filter((verse) => verse.verse % 2 === 0));

		expect(text).toBe(
			'Ele é a propiciação pelos nossos pecados, e não somente pelos nossos, mas também pelos pecados de todo o mundo. Aquele que diz: "Eu o conheço", mas não obedece aos seus mandamentos, é mentiroso, e a verdade não está nele. aquele que afirma que permanece nele, deve andar como ele andou.',
		);
	});
	test('Entrada do versos 1,3,4,5,7', () => {
		const teste = [1, 3, 4, 5, 7];
		const text = getText(
			VerseTeste.filter((verse) => teste.includes(verse.verse)),
		);

		expect(text).toBe(
			'Meus filhinhos, escrevo-lhes estas coisas para que vocês não pequem. Se, porém, alguém pecar, temos um intercessor junto ao Pai, Jesus Cristo, o Justo. Sabemos que o conhecemos, se obedecemos aos seus mandamentos. Aquele que diz: "Eu o conheço", mas não obedece aos seus mandamentos, é mentiroso, e a verdade não está nele. Mas, se alguém obedece à sua palavra, nele verdadeiramente o amor de Deus está aperfeiçoado. Desta forma sabemos que estamos nele: Amados, não lhes escrevo um mandamento novo, mas um mandamento antigo, que vocês têm desde o princípio: a mensagem que ouviram.',
		);
	});
	test('Entrada do versos 1', () => {
		const text = getText([VerseTeste[0]]);

		expect(text).toBe(
			'Meus filhinhos, escrevo-lhes estas coisas para que vocês não pequem. Se, porém, alguém pecar, temos um intercessor junto ao Pai, Jesus Cristo, o Justo.',
		);
	});
});

const VerseTeste = [
	{
		verse: 1,
		text: 'Meus filhinhos, escrevo-lhes estas coisas para que vocês não pequem. Se, porém, alguém pecar, temos um intercessor junto ao Pai, Jesus Cristo, o Justo.',
	},
	{
		verse: 2,
		text: 'Ele é a propiciação pelos nossos pecados, e não somente pelos nossos, mas também pelos pecados de todo o mundo.',
	},
	{
		verse: 3,
		text: 'Sabemos que o conhecemos, se obedecemos aos seus mandamentos.',
	},
	{
		verse: 4,
		text: 'Aquele que diz: "Eu o conheço", mas não obedece aos seus mandamentos, é mentiroso, e a verdade não está nele.',
	},
	{
		verse: 5,
		text: 'Mas, se alguém obedece à sua palavra, nele verdadeiramente o amor de Deus está aperfeiçoado. Desta forma sabemos que estamos nele:',
	},
	{
		verse: 6,
		text: 'aquele que afirma que permanece nele, deve andar como ele andou.',
	},
	{
		verse: 7,
		text: 'Amados, não lhes escrevo um mandamento novo, mas um mandamento antigo, que vocês têm desde o princípio: a mensagem que ouviram.',
	},
];
