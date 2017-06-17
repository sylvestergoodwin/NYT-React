import React, { Component } from 'react';

class SearchResults extends Component {
  render() {
    return (
	<div >
        <div className='panel panel-primary'>
          <div className='panel-heading'>
            <h3 className='panel-title'><strong><i className='fa fa-table'></i>   Top Articles</strong></h3>
          </div>

          <div className='panel-body' id='well-section'>
          </div>
        </div>

	</div>  
    );
  }
}

export default SearchResults;