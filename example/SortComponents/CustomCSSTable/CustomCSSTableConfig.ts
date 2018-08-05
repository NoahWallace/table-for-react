
export const customCSSTableConfig = {
    headers: [
        [
            {id: "contact_group", title: "Contact", options: {colSpan: 2}},
            {id: "address_group", title: "Address", options: {colSpan: 4}},

        ],
        [
            {id: "fst_name", title: "First Name", options: {sortable: true, initialSort: 'asc', initialSortIdx: 1}},
            {id: "lst_name_cmp", title: "Last Name", options: {sortable: true, initialSort:'asc', initialSortIdx:0, sortOnId:'lst_name'}},
            {id: "address", title: "Address" },
            {id: "city", title: "City"},
            {id: "state", title: "State", options:{ columnClass:"center" }},
            {id: "zip", title: "Zip", options:{ columnClass:"center" }},
        ]
    ],
    options:{
        paged:true
    }
}
