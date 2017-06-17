import React, {Component} from 'react';

export default React.createClass({
	
	getInitialState: function () {
		return ({
			searchTerm: '',
			numberOfRecords: 0,
			startYear: '',
			endYear: ''
			})
	//	this.handleSubmit = this.handleSubmit.bind(this)
	}, 
	handleSubmit: function (event){
		event.preventDefault()
		this.props.submitSearch({
			searchTerm: this.state.searchTerm,
			numberOfRecords: this.state.numberOfRecords,
			startYear: this.state.startYear,
			endYear: this.state.endYear})
	},
	onClear: function(){
		this.setState( {
			searchTerm: '',
			numberOfRecords: 0,
			startYear: '',
			endYear:''
			})
  },
  searchChange: function(event){
	  this.setState({searchTerm: event.target.value})
  },
  numRecordsChange: function(event){
	  this.setState({numberOfRecords: event.target.value})
  },
  startYearChange: function(event){
	  this.setState({startYear: event.target.value})
  },
  endYearChange: function(event){
	  this.setState({endYear: event.target.value})
  },
  render: function() {
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa  fa-list-alt"></i>
                Search Parameters</strong>
            </h3>
          </div>
          <div className="panel-body">
            <form  onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="search">Search Term:</label>
                <input type="text" 
				 className="form-control" 
				 id="search-term" 
				 autoComplete='off'
				 value = {this.state.searchTerm}
				 onChange={this.searchChange}
				/>
              </div>

              <div className="form-group">
                <label htmlFor="pwd">Number of Records to Retrieve:</label>
                <select className="form-control"
					id="num-records-select" 
					value = {this.state.numberOfRecords}
					onChange={this.numRecordsChange}>
                  <option value="1">1</option>
                  <option value="5" defaultValue>5</option>
                  <option value="10">10</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="start-year">Start Year (Optional):</label>
                <input type="text" 
					className="form-control" 
					id="start-year" 
					value={this.state.startYear}
					onChange ={this.startYearChange}
				/>
              </div>

              <div className="form-group">
                <label htmlFor="end-year">End Year (Optional):</label>
                <input type="text" 
					className="form-control" 
					id="end-year" 
					value={this.state.endYear} 
					onChange={this.endYearChange}
				/>
              </div>

              <button type="submit" 
				className="btn btn-default" 
				id="run-search">
                <i className="fa fa-search"></i>
                Search</button>
              <button type="button" className="btn btn-default" id="clear-all">
                <i className="fa fa-trash"></i>
                Clear Results</button>

            </form>
          </div>
        </div>
      </div>
    );
  }
})
