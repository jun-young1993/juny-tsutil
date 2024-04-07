[juny-tsutil](README.md) / Modules

# juny-tsutil

## Table of contents

### Functions

- [fillWord](modules.md#fillword)
- [getDaysInMonth](modules.md#getdaysinmonth)
- [getFirstInMonth](modules.md#getfirstinmonth)
- [getLastInMonth](modules.md#getlastinmonth)

## Functions

### fillWord

▸ **fillWord**(`str`, `length`, `word`, `type?`): `string`

글자수에서 부족한 앞자리를 특정 문자열로 채웁니다.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | 소스 문자열 |
| `length` | `number` | `undefined` | 타겟 문자열 갯수 |
| `word` | `string` | `undefined` | - |
| `type` | ``-1`` \| ``0`` | `0` | - |

#### Returns

`string`

string

**`Param`**

type - 0: 앞자리 채우기, -1: 뒷자리 채우기

#### Defined in

[str/fillWord.ts:11](https://github.com/jun-young1993/juny-tsutil/blob/3d6bfec/src/str/fillWord.ts#L11)

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

#### Defined in

[date/getDaysInMonth.ts:12](https://github.com/jun-young1993/juny-tsutil/blob/3d6bfec/src/date/getDaysInMonth.ts#L12)

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

[date/getFirstDayInMotth.ts:10](https://github.com/jun-young1993/juny-tsutil/blob/3d6bfec/src/date/getFirstDayInMotth.ts#L10)

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

[date/getLastDayInMotth.ts:9](https://github.com/jun-young1993/juny-tsutil/blob/3d6bfec/src/date/getLastDayInMotth.ts#L9)
