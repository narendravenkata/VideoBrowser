import React, { Component } from 'react';



class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { searchInput: '' };
    }

    handleInputChange(e) {
        this.setState({ searchInput: e.target.value });
    }

    
    render() {
        return (
            <div>
            <input onChange={this.handleInputChange.bind(this)} />
            </div>
        );
    }

   
}


export default SearchBar;