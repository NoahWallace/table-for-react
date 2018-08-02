export function setSortedRows(rows, headers, sortState):any[] {
    const lastHeaderRow = headers[headers.length - 1]
    return rows.map((row):any[] => {
        if (Array.isArray(row)) {
            let sortArray = row.map((item, idx) => {

                let sortId;
                if(lastHeaderRow[idx]){
                    sortId= lastHeaderRow[idx].id;
                }
                else { sortId=idx }
                return {[sortId]: row[idx]}
            });

            return Object.assign({}, ...sortArray)
        }

        return row;
    }).sort((current, next) => {

        let sortValue = 0;

        for (let i = 0; i < sortState.length; ++i) {
            const sortIdx = lastHeaderRow.find((item)=>item.id===sortState[i][0])
            let sortKey = sortIdx.options && sortIdx.options.sortOnId || sortState[i][0];
            let direction = sortState[i][1];

            if (current[sortKey] < next[sortKey]) {
                sortValue += (10 * (sortState.length - i)) * -direction;

            }
            if (current[sortKey] > next[sortKey]) {
                sortValue += (10 * (sortState.length - i)) * direction;

            }
        }

        return sortValue
    })
}