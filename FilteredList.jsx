import React, { Component } from 'react';

class FilterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  };

  render() {
    const filteredList = this.props.items.filter(item =>
      item.name.toLowerCase().includes(this.state.search)
    );

    return (
      <div className="filter-container">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          onChange={this.onSearch}
        />

        {/* Render the filtered items */}
        <ul>
          {filteredList.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FilterList;