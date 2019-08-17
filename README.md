# react-pagination-js
![travis build](https://img.shields.io/travis/isaurssaurav/react-pagination-js?style=flat-square)

Simple and light weight pagination for react. This library is updated version of [react-pagination-library](https://github.com/isaurssaurav/react-pagination). It comes with five themes and are easy to customize.
1. default
2. dark
3. bootstrap
4. border-bottom
5. circle

## Demo

![Example](https://imge.to/images/2019/08/17/V8j1w.png)

[click here](https://isaurssaurav.github.io/react-pagination-js/) for live demo.

## Installation

```
$ npm install react-pagination-js
```

## Usage

```js
import React from "react";
import Pagination from "react-pagination-js";

class App extends React.Component {
  state = {
    currentPage: 1
  };
  changeCurrentPage = numPage => {
    this.setState({ currentPage: numPage });
    //fetch a data
    //or update a query to get data
  };
  render() {
    return (
      <div>
        <Pagination
          currentPage={this.state.currentPage}
          totalPages={10}
          changeCurrentPage={this.changeCurrentPage}
        />
        <h2>current Page:{this.state.currentPage}</h2>
      </div>
    );
  }
}
export default App;
```
## Props

| Name                | Type     | Default   | Description                                                          |
| ------------------- | -------- | --------- | -------------------------------------------------------------------- |
| `totalPages`        | Number   | `10`      | **Required.** Total number of pages which you are going to display   |
| `currentPage`       | Number   | `1`       | **Required.** Active page number                                     |
| `changeCurrentPage` | Function |           | **Required.** Page change handler. Receive current pageNumber as arg |
| `theme`             | string   | `default` | **Optional.** theme : `default`,`dark`, `bootstrap`, `border-bottom`, `circle` |
| `showFirstLastPages`| boolean   | `true`   |  **Optional.** Show or hide first and last page. |
| `firstPageText`       | string   | `«`   |  **Optional.** first page text. |
| `lastPageText`       | string   | `»`   |  **Optional.** last page text. |
| `nextPageText`       | string   | `⟩`   |  **Optional.** next page text. |
| `previousPageText`       | string   | `⟨`   |  **Optional.** previous page text. |

