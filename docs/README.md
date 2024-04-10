juny-tsutil / [Modules](modules.md)

[juny-tsutil](README.md) / Modules

# juny-tsutil

## Table of contents

### Enumerations

- [DayOfWeek](enums/DayOfWeek.md)

### Functions

- [addDay](modules.md#addday)
- [compareDate](modules.md#comparedate)
- [fillWord](modules.md#fillword)
- [getDaysInMonth](modules.md#getdaysinmonth)
- [getFirstInMonth](modules.md#getfirstinmonth)
- [getLastInMonth](modules.md#getlastinmonth)
- [getPreviousMonthLastDay](modules.md#getpreviousmonthlastday)
- [getPreviousMonthLastSunday](modules.md#getpreviousmonthlastsunday)
- [isWeek](modules.md#isweek)
- [subtractDay](modules.md#subtractday)

## Functions

### addDay

▸ **addDay**(`date`, `day`): `Date`

Date 객체에 대한 날짜 더하기

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `Date` | 계산하고자 하는 Date객체 |
| `day` | `number` | 추가하고자 하는 일수 |

#### Returns

`Date`

계산된 Date 객체

#### Defined in

[date/addDay.ts:9](https://github.com/jun-young1993/juny-tsutil/blob/1ef785d/src/date/addDay.ts#L9)

___

### compareDate

▸ **compareDate**(`date`, `diff`, `callback?`): `boolean`

Date 객체를 밀리초 까지의 비교로 같은 시간대인지 판단

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `diff` | `Date` |
| `callback?` | (`dateTimestamp`: `number`, `diffTimestamp`: `number`) => `boolean` |

#### Returns

`boolean`

**`Example`**

```
        expect(
           compareDate(new Date('2024-04-01'), new Date('2024-04-01'))
       ).toEqual(true);

       expect(
           compareDate(new Date('2024-04-01'), new Date('2024-04-02')
       )).toEqual(false);

       expect(
           compareDate(new Date('2024-04-01'), new Date('2024-04-02'),(date, diff) => {
               return date < diff
           })
       ).toEqual(true)
```

#### Defined in

[date/compareDate.ts:27](https://github.com/jun-young1993/juny-tsutil/blob/1ef785d/src/date/compareDate.ts#L27)

___

### fillWord

▸ **fillWord**(`str`, `length`, `word?`, `type?`): `string`

글자수에서 부족한 앞자리를 특정 문자열로 채웁니다.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | 소스 문자열 |
| `length` | `number` | `undefined` | 타겟 문자열 갯수 |
| `word` | `string` | `''` | - |
| `type` | ``-1`` \| ``0`` | `0` | - |

#### Returns

`string`

string

**`Param`**

type - 0: 앞자리 채우기, -1: 뒷자리 채우기

**`Example`**

```ts
const result = fillWord('4',2,'0');
// result = "04"

const result = fillWord('4',2,'0',-1);
// result = "40"
```

#### Defined in

[str/fillWord.ts:20](https://github.com/jun-young1993/juny-tsutil/blob/1ef785d/src/str/fillWord.ts#L20)

___

### getDaysInMonth

▸ **getDaysInMonth**(`year`, `month`): `Date`[]

특정 년도와 월의 시작일부터 종료일까지의 날짜 배열을 반환합니다.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `year` | `number` | 년도를 나타내는 숫자 |
| `month` | `number` | 월을 나타내는 숫자 (1부터 12까지의 숫자) |

#### Returns

`Date`[]

해당 년도와 월의 날짜 배열. 예: ['YYYY-MM-DD', 'YYYY-MM-DD', ...]

**`Example`**

```typescript
   getDaysInMonth(2024, 4);
    // [2024-04-01 ... 2024-04-30]
```

#### Defined in

[date/getDaysInMonth.ts:18](https://github.com/jun-young1993/juny-tsutil/blob/1ef785d/src/date/getDaysInMonth.ts#L18)

___

### getFirstInMonth

▸ **getFirstInMonth**(`year`, `month`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |
| `month` | `number` |

#### Returns

`Date`

#### Defined in

[date/getFirstDayInMotth.ts:10](https://github.com/jun-young1993/juny-tsutil/blob/1ef785d/src/date/getFirstDayInMotth.ts#L10)

___

### getLastInMonth

▸ **getLastInMonth**(`year`, `month`): `Date`

특정 년도와 월의 마지막일을 반환합니다.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `year` | `number` | 년도를 나타내는 숫자 |
| `month` | `number` | 월을 나타내는 숫자 (1부터 12까지의 숫자) |

#### Returns

`Date`

Date

#### Defined in

[date/getLastDayInMotth.ts:9](https://github.com/jun-young1993/juny-tsutil/blob/1ef785d/src/date/getLastDayInMotth.ts#L9)

___

### getPreviousMonthLastDay

▸ **getPreviousMonthLastDay**(`date`): `Date`

get previouse month

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`Date`

previous date

**`Example`**

```
 getPreviouseMonth(
		new Date('2024-04-15') 
 )
 // 2024-03-31
```

#### Defined in

[date/getPreviousMonth.ts:16](https://github.com/jun-young1993/juny-tsutil/blob/1ef785d/src/date/getPreviousMonth.ts#L16)

___

### getPreviousMonthLastSunday

▸ **getPreviousMonthLastSunday**(`year`, `month`): `Date`[] \| []

the last Sunday of the previous month
특정년도의 월 시작일(1)이 일요일이 아닌 경우 이전 달의 마지막 주 일요일까지

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `year` | `number` | 년도를 나타내는 숫자 |
| `month` | `number` | 월을 나타내는 숫자 (1부터 12까지의 숫자) |

#### Returns

`Date`[] \| []

Date[] | []

**`Example`**

```
expect(
	getPreviousMonthLastSunday(2024,4)
).toEqual([
	new Date('2024-03-31T00:00:00.000Z')
])

expect(
	getPreviousMonthLastSunday(2024,5)
).toEqual([
	new Date('2024-04-30T00:00:00.000Z'),
	new Date('2024-04-29T00:00:00.000Z'),
	new Date('2024-04-28T00:00:00.000Z'),
])
```

#### Defined in

[date/getPreviousMonthLastSunday.ts:33](https://github.com/jun-young1993/juny-tsutil/blob/1ef785d/src/date/getPreviousMonthLastSunday.ts#L33)

___

### isWeek

▸ **isWeek**(`date`, `dayOfWeek`): `boolean`

요일 체크
checked is day of week

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `dayOfWeek` | [`DayOfWeek`](enums/DayOfWeek.md) |

#### Returns

`boolean`

boolean

**`Example`**

```typescript
	const date = getFirstInMonth(2024, 4) // MON 2024-04-01T00:00:00.000Z
	isWeek(date,DayOfWeek.TUES); // true
```

#### Defined in

[date/isWeek.ts:18](https://github.com/jun-young1993/juny-tsutil/blob/1ef785d/src/date/isWeek.ts#L18)

___

### subtractDay

▸ **subtractDay**(`date`, `days`): `Date`

주어진 날짜에서 일 수를 빼는 함수

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `Date` | 일 수를 뺄 날짜 |
| `days` | `number` | 뺄 일 수 |

#### Returns

`Date`

일 수를 뺀 날짜

#### Defined in

[date/subtractDay.ts:8](https://github.com/jun-young1993/juny-tsutil/blob/1ef785d/src/date/subtractDay.ts#L8)
