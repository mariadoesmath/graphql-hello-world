import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const fetchGiphy = gql`
  query GiphyGifs($query: String!) {
    giphy {
      search(query: $query, limit: 10) {
        id
        url
        images {
          original {
            url
          }
        }
      }
    }
  }
`;

class GiphySearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: false,
      inputValue: '',
    }
  }

  onSearch = () => {
    this.setState({search: true});
  }

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value,
      search: false,
    });
  }

  render() {
    return (
      <div className="App">
        <input value={this.state.inputValue} onChange={this.updateInputValue}/>
        <button onClick={this.onSearch}>Search</button>
        {this.state.search &&
        <Query query={fetchGiphy} variables={{query: this.state.inputValue}} onCompleted={this.onSearchComplete}>
            {({ data, loading }) => {
              if (loading) {
                  return <div>Loading ...</div>;
              }

              const images = [];
              for(let i = 0; i < data.giphy.search.length; i++){
                images.push(<img width={'100%'} src={data.giphy.search[i].images.original.url}/>);
              }

              return(images);
            }}
        </Query>}
      </div>
    );
  }
}

export default GiphySearch;
