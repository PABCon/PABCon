# CSS Cheat Sheet

This document will be updated with useful CSS syntax that i learn throught out my learning (working hopefully) journey!
Feel free to consult it and propose your recommendations as well.

## Table

### Border

1. Single Border:

```border-collapse: collapse;```

2. Border type:

``` border: 1px solid black;```

## Cursor

### Cursor Type
1. Pointer:

```cursor: pointer;```

## Buttons

## Input

1. Remove the changes in input box when selected:

```outline-width: 0;```

### Number

1. Allow only positive:

```min="0"```directly on html.

## Grid CSS

### General

* Set the container:
```display: grid;```

* Set the gap between elements:
```grid-column-gap:$value```
```grid-row-gap:$value```

* Gap for both column and row:
```grid-gap:$value```

* Span keyword:
```grid-column: span 3; ``` -> start at 1 postion and expand for 3 columns

### Columns

```grid-template-columns: ;```

You need pass how you want to break the columns. Options are:

* % -> ```grid-template-columns: 50% 50%;```.

* fr -> ```grid-template-columns: 1fr 1fr;```.

* repeat -> ```grid-template-columns: repeat(3,1fr);``` -> repeate 3 times 1fr.


### Rows

* ```grid-auto-rows: $value```- fixes the height of rows and doesn't care about content.

Options are:

* minmax() -> sets the minimum height and what could be the max -> ```minmax(200px,auto)```-> that is minimun is 200px, but auto if there is content

* ```grid-template-rows: $value```

Options are:

*  ```grid-template-rows: 10vh 80vh 10vh;```

### Grid Lines

You can use grid lines to position your div in specific place of your grid.
<pre>
.class_name{
    grid-column-start: $position;
    grid-column-end:$position;
    grid-column: $position 1 / position 2; < replaces 2 lines above
}
</pre>

### Justifying and Aligning Items (applies to content inside the divs)

* ```align-items:$ value``` - only up and down

Options:

* start
* end
* strech

* ```justify-items: $value``` - only right or left

options:

* start
* end


* ```justify-self``` - for invidual item right or left

* ```align-self``` - for individual item top or bottom
