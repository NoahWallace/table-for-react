# React Table

## Options
|Props|type|Description|
|:----|----|-----------|
 | className| string | Sets className of Container |
 | caption   | string, Component  | Created a Caption on Table |
 |headers| [HeaderProps]()[][]| An Array of Arrays. the outer Array contains rows the inner Arrays carry the header definitions||
 |rows| string or number[][] or any[]| An array of strings, numbers or Components OR an array of objects. object keys correlate directly to last index id of header rows. otherwise, columns are related to array index.|
 |options| [TableOptions]() | Customizable table options|
 |onSort| function | callback that overrides the client side sorting capability and returns the current sortState as an array of \[\[id,-1\\]]
 |HeaderProps ->id|string|control id for the table. if using array of objects in rows., this id is directly related to the row key/value pair|
 |HeaderProps ->title|string, component|Display title of component|
 |HeaderProps ->options|object| and object that further defines the capabilities of the table|
 |HeaderProps ->options.colSpan|number|sets the colspan of grouped headers|
 |HeaderProps ->options.headerClass|string|Sets custom class for header cell|
 |HeaderProps ->options.columnClass|string|Sets className for every cell within the body for the given column|
 |HeaderProps ->options.sortable|boolean| Sets header to sortable state. displays sort Arrows|
 |HeaderProps ->options.initialSort|string('asc','ascending','desc','descending')|if the table is presorted, this option will set the sort arrows in the proper direction on mount|
 |HeaderProps ->options.initialSortIdx|number|In the case where you have multiple initialSort options defined on different headers, you can define if the table will sort on first name then last name or last name then first name.|
 |HeaderProps ->options.sortId|string|This options defines which column or name value pair to sort with. Useful if passing a component to the table cells.| 
 |HeaderProps ->options.colGroupClass|string|Sets the classname of the col element for the respective header index|
 |TableOptions ->icons|[icons]()|sets custom icons for pager and sort|
 |TableOptions ->paged|boolean|turns on paging footer|
 |TableOptions ->pageOptions|number[]|sets paging row count of 10, 25, 50 rows etc|
 |TableOptions ->pageSize|number|initial page size to set when table mounts|
 |icons ->sortAsc|component,svg| sets the up arrow icon for sort|
 |icons ->sortDesc|component,svg| sets the down arrow icon for sort|
 |icons ->pageNext|component,svg| sets the inner right icon for paging|
 |icons ->pagePrev|component,svg| sets the inner left icon for paging|
 |icons ->pageEnd|component,svg| sets the outer right icon for paging|
 |icons ->pageStart|component,svg| sets the outer left icon for paging|
 
 
 
 
 ## CSS

```css
.react-table-container {
  .react-table {
    .header {
      .header_row {
        .cell {
          .content {}
          &--sortable {
            > .content {}
            > .sort {
              .sort {
                &--up, &--down {}
              }
            }
          }
        }
      }
    }
    .hidden {}
  }
  .pager_container {
    .pager_grid {}
    .pager_position {}
    .pager_select {
      &_value {}
      &_button {}
      &_dropdown {
        .dropdown_valuegroup {
          .dropdown_item {
            &.selected {}
            &:hover {}
          }
        }
      }
    }
    .paging_button {
      &:focus, &:hover {}
      &--disabled {}
    }
  }
}
```

 