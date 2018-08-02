# React Table


### Usage

```$xslt
import Table from 'react-table'

let tableRows=[
    {name:"myName"},
    {name:"yourName"}
]

export class App extends React.Component{
    headers=[
        [{id:"name", title:"Name",options:{ [...colSpan,headerClass,columnClass,sortable,initialSort,initialSortIdx]}}]
    ]
    render(){
    let TableOptions={
        icons:{
            sortAsc,
            sortDesc,
            pageNext,
            pageEnd,
            pagePrev,
            pageFirst
        }
    }
        return (
            <Table 
                className="myTable"
                caption="TableCaption"
                headers={this.headers}
                onSort={(sortState)=>{]}
                options:{{
                    
                }}
                rows={}
            />
        )
    }
}
```