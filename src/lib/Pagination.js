import React from "react";
import "./Pagination.css";



export default class ReactPagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstThreeArray: [1],
            lastNumber: "",
            showEllipis: true
        };
    }
    /**
     * 
     */
    componentDidMount() {
        if (this.props.totalPages <= 5) {
            var fArray = [];

            for (var i = 1; i <= this.props.totalPages; i++) {
                fArray.push(i);
            }

            this.setState({ firstThreeArray: fArray });
        } else {
            if (this.props.currentPage < 3) {
                this.setState({ firstThreeArray: [1, 2, 3] });
            } else {
                var fArray = [];
                var index = 1;
                for (let j = this.props.currentPage; j >= 0; j--) {
                    fArray.push(j);
                    if (index === 3) {
                        break;
                    }
                    index++;
                }

                fArray.reverse();
                this.setState({ firstThreeArray: fArray });
            }
            this.setState({ lastNumber: this.props.totalPages });
        }
    }
    /**
     * 
     * 
     */
    componentWillReceiveProps(nextProps) {
        if (nextProps.totalPages <= 5) {
            var fArray = [];

            for (var i = 1; i <= nextProps.totalPages; i++) {
                fArray.push(i);
            }
            this.setState({ firstThreeArray: fArray });
        } else {
            if (
                this.props.currentPage !== nextProps.currentPage ||
                this.props.totalPages !== nextProps.totalPages
            ) {
                if (nextProps.currentPage < 3) {
                    this.setState({ firstThreeArray: [1, 2, 3] });
                } else {
                    var fArray = [];
                    fArray.push(nextProps.currentPage - 1);
                    fArray.push(nextProps.currentPage);
                    if (nextProps.currentPage + 1 < nextProps.totalPages) {
                        fArray.push(nextProps.currentPage + 1);
                    }
                    if (
                        nextProps.currentPage == nextProps.totalPages - 2 ||
                        nextProps.currentPage == nextProps.totalPages - 1 ||
                        nextProps.currentPage == nextProps.totalPages
                    ) {
                        this.setState({ showEllipis: false });
                    } else {
                        this.setState({ showEllipis: true });
                    }
                    this.setState({ firstThreeArray: fArray });
                }
                this.setState({ lastNumber: nextProps.totalPages });
            }
        }
    }
    /**
     * go to current - 1 page
     */
    prev = () => {
        if (this.props.currentPage > 1) {
            this.props.changeCurrentPage(this.props.currentPage - 1);
        }
    };
    /**
     * go to current + 1 page
     */
    next = () => {
        if (this.props.currentPage < this.props.totalPages) {
            this.props.changeCurrentPage(this.props.currentPage + 1);
        }
    };
    changeCurrentPage = no => {
        this.props.changeCurrentPage(no);
    };
    showEllipsis = () => {
        if (this.state.showEllipis) {
            return (
                <li className="pageElli">
                    <a >
                        ...
                </a>
                </li>
            );
        }
    };
    isactive = currentPage => {
        if (this.props.currentPage == currentPage) {
            return true;
        }
        return false;
    };
    showLastPagi = () => {
        if (this.props.currentPage !== this.props.totalPages) {
            return (
                <li className={this.isactive(this.props.totalPages) ? "is-active" : "page"}
                    onClick={() => {
                        this.changeCurrentPage(this.props.totalPages);
                    }}
                ><a


                >
                        {this.props.totalPages}
                    </a></li>
            );
        }
    };
    showPrev = () => {
        if (this.props.currentPage != 1) {
            return (
                <li className="page" onClick={this.prev}><a >
                    {this.props.previousPageText}
                </a></li >
            );
        }
    };
    showNext = () => {
        if (this.props.currentPage < this.props.totalPages) {
            return (
                <li className="page" onClick={this.next} ><a >
                    {this.props.nextPageText}
                </a></li>
            );
        }
    };

    showFirstPage = () => {
        return this.props.showFirstLastPages ? <li className="page" onClick={() => {
            this.changeCurrentPage(1);
        }}> <a


        >
                {this.props.firstPageText}
            </a> </li> : ""
    }

    showLastPage = () => {
        return this.props.showFirstLastPages ? <li className="page" onClick={() => {
            this.changeCurrentPage(this.props.totalPages);
        }}> <a


        >
                {this.props.lastPageText}
            </a></li> : ""
    }

    render() {
        return (
            <div className={`react-pagination-js-${this.props.theme}`}>
                <ul>
                    {this.showFirstPage()}
                    {this.showPrev()}
                    {this.props.totalPages <= 5 ? (
                        this.state.firstThreeArray.map((no, index) => {
                            return (
                                <li key={index} className={this.isactive(no) ? "is-active" : "page"} onClick={() => {
                                    this.changeCurrentPage(no);
                                }}>
                                    <a



                                    >
                                        {no}
                                    </a></li>
                            );
                        })
                    ) : (
                            <React.Fragment>
                                {this.state.firstThreeArray.map((no, index) => {
                                    return (
                                        <li key={index} className={this.isactive(no) ? "is-active" : "page"} onClick={() => {
                                            this.changeCurrentPage(no);
                                        }}>
                                            <a



                                            >
                                                {no}
                                            </a></li>
                                    );
                                })}
                                {this.showEllipsis()}

                                {this.showLastPagi()}
                            </React.Fragment>
                        )}
                    {this.showNext()}
                    {this.showLastPage()}
                </ul>
            </div>
        );
    }
}

ReactPagination.defaultProps = {
    theme: "default",
    currentPage: 1,
    totalPages: 15,
    showFirstLastPages: true,
    lastPageText: "»",
    firstPageText: "«",
    nextPageText: "⟩",
    previousPageText: "⟨"
};