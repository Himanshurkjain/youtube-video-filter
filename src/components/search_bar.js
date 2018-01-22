import React, { Component } from 'react';

class SearchBar extends Component{

    constructor(props) {
        super(props);

        // functional components do not have state only class based components do
        this.state = { term: ''};
    }

    render() {
        // return <input onChange={event => console.log(event.target.value)}/>;
        return (
            <div className="search-bar">
                <input value={this.state.term}

                       onChange={event => this.onInputChange(event.target.value)}
                    // onChange={event => this.setState({ term: event.target.value })}
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
        console.log(event.target.value)
    }
}

export default SearchBar;