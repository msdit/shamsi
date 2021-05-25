export declare type MonthType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare type DayType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31;
export declare function gregorianToJalali(gy: number, gm: MonthType, gd: DayType): [number, number, number];
export declare function jalaliToGregorian(jy: number, jm: MonthType, jd: DayType): [number, number, number];
export { };