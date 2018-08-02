
export const simpleSortTableConfig = {
    headers: [
        [
            {id: "contact_group", title: "Contact", options: {colSpan: 2}},
            {id: "address_group", title: "Address", options: {colSpan: 4}},

        ],
        [
            {id: "fst_name", title: "First Name", options: {sortable: true, initialSort: 'asc', initialSortIdx: 1}},
            {id: "lst_name", title: "Last Name", options: {sortable: true}},
            {id: "address", title: "Address", options: {sortable: true}},
            {id: "city", title: "City", options: {sortable: true}},
            {id: "state", title: "State", options: {sortable: true, initialSort: 'desc', initialSortIdx: 0}},
            {id: "zip", title: "Zip", options: {sortable: true}},

        ]
    ]
}
