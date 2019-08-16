import React from "react";
import Pagination from "../lib/Pagination";
// import "./app.css";

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
            <div>
                <div className="container">
                    <h1>React Pagination</h1>
                    <p>
                        current Page: <strong>{this.state.currentPage}</strong>
                    </p>
                    <hr />
                    <h3>Default</h3>

                    <Pagination
                        currentPage={this.state.currentPage}
                        totalPages={10}
                        changeCurrentPage={this.changeCurrentPage}
                        theme="default"
                        showFirstLastPages={true}
                    />
                    <h3>Dark</h3>
                    <Pagination
                        currentPage={this.state.currentPage}
                        totalPages={10}
                        changeCurrentPage={this.changeCurrentPage}
                        theme="dark"
                        showFirstLastPages={true}
                    />


                    <h3>Border Bottom</h3>

                    <Pagination
                        currentPage={this.state.currentPage}
                        totalPages={10}
                        changeCurrentPage={this.changeCurrentPage}
                        theme="border-bottom"
                    />

                    <h3>Bootstrap</h3>

                    <Pagination
                        currentPage={this.state.currentPage}
                        totalPages={10}
                        changeCurrentPage={this.changeCurrentPage}
                        theme="bootstrap"
                    />


                    <h3>Circle</h3>

                    <Pagination
                        currentPage={this.state.currentPage}
                        totalPages={10}
                        changeCurrentPage={this.changeCurrentPage}
                        theme="circle"
                    />

                </div>
            </div>
        );
    }
}
export default App;