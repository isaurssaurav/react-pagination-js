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
                    <h3>Bottom Border</h3>

                    <Pagination
                        currentPage={this.state.currentPage}
                        totalPages={2}
                        changeCurrentPage={this.changeCurrentPage}
                        theme="bottom-border"
                    />

                    <h3>Dark</h3>

                    <Pagination
                        currentPage={this.state.currentPage}
                        totalPages={10}
                        changeCurrentPage={this.changeCurrentPage}
                        theme="dark"
                    />


                </div>
            </div>
        );
    }
}
export default App;