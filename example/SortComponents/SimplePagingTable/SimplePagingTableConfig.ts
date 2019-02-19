
export const simplePagingTableConfig = {
    headers: [
        [
            {id: "fst_name", title: "First Name"},
            {id: "lst_name", title: "Last Name"},
            {id: "address", title: "Address"},
            {id: "city", title: "City"},
            {id: "state", title: "State"},
            {id: "zip", title: "Zip"},

        ]
    ],
    options:{
        paged:true,
        pageOptions:[15,30,60],
        pageSize:15,
        rowKey: 0
    }
}
