import React from "react";
import Pagination from "../lib/Pagination";
import "./app.css";

// const App = () => (

class App extends React.Component {
    state = {
        currentPage: 1
    };
    changeCurrentPage = numPage => {
        this.setState({ currentPage: numPage });
    };
    render() {
        return (

            <div className="container">
                <a class="github-fork-ribbon" href="https://github.com/isaurssaurav/react-pagination-js" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
                <h1>React Pagination Js</h1>
                <h2>Simple and light weight</h2>
                {/* <p>
                    current Page: <strong>{this.state.currentPage}</strong>
                </p> */}
                <hr />
                <div className="box-theme">

                    <p>Theme : "<strong>bootstrap</strong>"</p>
                    <div className="demo">
                        <Pagination
                            currentPage={this.state.currentPage}
                            totalPages={10}
                            changeCurrentPage={this.changeCurrentPage}
                            theme="bootstrap"
                        />

                    </div>
                    <div className="code">
                        <code >{` <Pagination\n
                            currentPage={this.state.currentPage}\n
                            totalPages={10}\n
                            changeCurrentPage={this.changeCurrentPage}\n
                            theme="bootstrap"\n
                        />`}

                        </code>
                    </div>
                </div>
                <div className="box-theme">

                    <p>Theme : "<strong>default</strong>"</p>
                    <div className="demo">
                        <Pagination
                            currentPage={this.state.currentPage}
                            totalPages={10}
                            changeCurrentPage={this.changeCurrentPage}
                            theme="default"
                            showFirstLastPages={true}
                        />
                    </div>
                    <div className="code">
                        <code >{`<Pagination \n
                            currentPage={this.state.currentPage}\n
                            totalPages={10}\n
                            changeCurrentPage={this.changeCurrentPage}\n
                    />`}

                        </code>
                    </div>
                </div>
                <div className="box-theme">

                    <p>Theme : "<strong>dark</strong>"</p>
                    <div className="demo">
                        <Pagination
                            currentPage={this.state.currentPage}
                            totalPages={10}
                            changeCurrentPage={this.changeCurrentPage}
                            theme="dark"
                            showFirstLastPages={true}
                        />
                    </div>
                    <div className="code">
                        <code >{`<Pagination\n
                    currentPage={this.state.currentPage}\n
                    totalPages={10}\n
                    changeCurrentPage={this.changeCurrentPage}\n
                    theme="dark"\n
                />`}

                        </code>
                    </div>
                </div>


                <div className="box-theme">

                    <p>Theme : "<strong>border-bottom</strong>"</p>
                    <div className="demo">
                        <Pagination
                            currentPage={this.state.currentPage}
                            totalPages={10}
                            changeCurrentPage={this.changeCurrentPage}
                            theme="border-bottom"
                        />
                    </div>
                    <div className="code">
                        <code >{`<Pagination\n
                            currentPage={this.state.currentPage}\n
                            totalPages={10}\n
                            changeCurrentPage={this.changeCurrentPage}\n
                            theme="border-bottom"\n
                        />`}

                        </code>
                    </div>
                </div>


                <div className="box-theme">

                    <p>Theme : "<strong>circle</strong>"</p>
                    <div className="demo">

                        <Pagination
                            currentPage={this.state.currentPage}
                            totalPages={10}
                            changeCurrentPage={this.changeCurrentPage}
                            theme="circle"
                        />

                    </div>
                    <div className="code">
                        <code >{` 
                            <Pagination\n
                                currentPage={this.state.currentPage}\n
                                totalPages={10}\n
                                changeCurrentPage={this.changeCurrentPage}\n
                                theme="circle"\n    
                            />`}

                        </code>
                    </div>
                </div>

                <div className="box-theme">

                    <p> <strong>Hide first and last page</strong></p>
                    <div className="demo">

                        <Pagination
                            currentPage={this.state.currentPage}
                            totalPages={10}
                            changeCurrentPage={this.changeCurrentPage}

                            showFirstLastPages={false}
                        />

                    </div>
                    <div className="code">
                        <code >{` 
                                <Pagination\n 
                                currentPage={this.state.currentPage}\n 
                                totalPages={10}\n 
                                changeCurrentPage={this.changeCurrentPage}\n 
                                showFirstLastPages={false}\n 
                                />`}

                        </code>
                    </div>
                </div>

                <div className="box-theme">

                    <p> <strong>Change text of first, last, next and previous page text</strong></p>
                    <div className="demo">

                        <Pagination
                            currentPage={this.state.currentPage}
                            totalPages={10}
                            changeCurrentPage={this.changeCurrentPage}
                            firstPageText="first"
                            lastPageText="last"
                            showFirstLastPages={true}
                            nextPageText="next"
                            previousPageText="prev"
                        />

                    </div>
                    <div className="code">
                        <code >{`  <Pagination \n
                            currentPage={this.state.currentPage}\n
                            totalPages={10}\n
                            changeCurrentPage={this.changeCurrentPage}\n
                            firstPageText="first"\n
                            lastPageText="last"\n
                            showFirstLastPages={true}\n
                            nextPageText="next"\n
                            previousPageText="prev"\n
                        />
`}

                        </code>
                    </div>
                </div>

            </div>
        );
    }
}
export default App;

