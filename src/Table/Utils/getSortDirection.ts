export type ISortOptions = 1 | -1 | 0

export function getSortValue(sortString: string): ISortOptions {
    if ((/^asc(ending)?$/i).test(sortString)) {
        return 1
    }
    if (/^desc(ending)?$/i.test(sortString)) {
        return -1
    }
    return 0
}