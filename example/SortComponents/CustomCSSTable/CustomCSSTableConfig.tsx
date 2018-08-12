import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleUp, faArrowCircleDown, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import {faStepForward} from "@fortawesome/free-solid-svg-icons/faStepForward";
import {faStepBackward} from "@fortawesome/free-solid-svg-icons/faStepBackward";
import {faCaretLeft} from "@fortawesome/free-solid-svg-icons/faCaretLeft";

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
        paged:true,
        icons:{
            sortAsc:<FontAwesomeIcon icon={faArrowCircleUp}/>,
            sortDesc:<FontAwesomeIcon icon={faArrowCircleDown}/>,
            pageNext:<FontAwesomeIcon icon={faCaretRight}/>,
            pageEnd:<FontAwesomeIcon icon={faStepForward}/>,
            pagePrev:<FontAwesomeIcon icon={faCaretLeft}/>,
            pageStart:<FontAwesomeIcon icon={faStepBackward}/>,
        }
    }
}
