import React, {Component} from 'react';
import SearchParams from './Components/SearchParams';
import SearchResults from './Components/SearchResults';
import Footer from './Components/Footer';
import './App.css';

export default React.createClass({
  searchResults: [],

  executeSearch: function(searchCriteria) {
    console.log("Search")
	var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

	var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

	var queryURL = queryURLBase + searchCriteria.searchTerm;

	// If the user provides a startYear -- the startYear will be included in the queryURL
	if (parseInt(searchCriteria.startYear)) {
		queryURL = queryURL + "&begin_date=" + searchCriteria.startYear + "0101";
	}

	// If the user provides a endYear -- the endYear will be included in the queryURL
	if (parseInt(searchCriteria.endYear)) {
		queryURL = queryURL + "&end_date=" + searchCriteria.endYear + "0101";
	}

  },
  
  displayResults: function(){
	  return 
  },
  
  render: function() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <div className="jumbotron">
              <h1 className="text-center">
                <strong>
                  <i className="fa fa-newspaper-o"></i>
                  New York Times Search</strong>
              </h1>
            </div>
          </div>
        </div>
        <SearchParams  submitSearch={this.executeSearch.bind(this)} />
        <SearchResults/>
        <Footer/>
      </div>
    );
  }
})
