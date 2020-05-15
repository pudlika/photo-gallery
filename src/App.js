import React              from 'react';
import TextField          from '@material-ui/core/TextField';
import Button             from '@material-ui/core/Button';
import StackGrid          from "react-stack-grid";
import FormControlLabel   from '@material-ui/core/FormControlLabel';
import CircularProgress from '@material-ui/core/CircularProgress';


import SearchDynamicallyControlComponent  from './Components/SearchDynamicallyControlComponent';
import ImageComponent                     from './Components/ImageComponent';
import ErrorInfoComponent                 from './Components/ErrorInfoComponent';

import './App.css';

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
        isLoaded : false,
        searchedPhrase : "",
        allImgs: [],
        wasError: false,
        testData : null,
        isHintVisible :false,
        searchDynamically : true,
        apiUrl : "https://api.unsplash.com/search/photos?client_id=LiGO4cdLZe7UYuHpFLWU5DTKdIUYIhNdNuenXH9rHjI&query="
       //apiUrl : "https://api.imgflip.com/get_memes"
    }
    this.searchInputHandler = this.searchInputHandler.bind(this);
    this.searchForPhotos = this.searchForPhotos.bind(this);
    this.searchDynamicallyChangeHandler = this.searchDynamicallyChangeHandler.bind(this);
    this.buttonSubmittedHandler = this.buttonSubmittedHandler.bind(this);
  }

  componentDidMount() {
    this.setState({isLoaded: false, wasError: false});

    this.searchForPhotos("lion", 0);
  }
  
  searchDynamicallyChangeHandler(event) {
    this.setState({searchDynamically : event.target.checked, isHintVisible: false})
  }
 
  searchInputHandler(event) {
    var phrase = event.target.value;
    this.setState({searchedPhrase: phrase});

    if (this.state.searchDynamically) {
      this.setState({isLoaded: false, wasError: false, searchedPhrase: phrase});
      this.searchForPhotos(phrase, 1000);
    }
    else {
      this.setState({isHintVisible: true});
    }
  }

  searchForPhotos(phrase, delay) {
    fetch(this.state.apiUrl + phrase)
      .then(response => response.json())
      .then(
        data => {
              var results = [];
              results = data.results;
              var url = results.length > 0 ? results[0].urls.small : "./image-big.png"
              this.setState({testData: url, allImgs: results})
              setTimeout(() => {
                this.setState({isLoaded: true});
              }, delay);
            },
        error => {this.setState({isLoaded: true, testData: "./image-big.png", wasError : true })}
        )
      .catch(e => console.log(e));
  }

  buttonSubmittedHandler(event) {
    this.setState({isLoaded: false, wasError: false});
    this.searchForPhotos(this.state.searchedPhrase, 0);
  }

  render() {
    var loading = !this.state.isLoaded;
    var resultsLoaded = (!this.state.wasError && this.state.isLoaded);

    return (
      <div className="container">
        <header className="App-header">
          <label id="mainLabel">Photo gallery</label>

          <SearchDynamicallyControlComponent 
            key={this.state.searchDynamically}
            searchDynamically={this.state.searchDynamically} 
            onChange={this.searchDynamicallyChangeHandler}/>
        </header>

        <div className="inputContainer">
          <TextField
            label="Search for photos" 
            margin="dense" variant="outlined"
            onChange={this.searchInputHandler}
          />
          {!this.state.searchDynamically && 
            <Button variant="contained" size="medium" color="primary"
              onClick={this.buttonSubmittedHandler}
            >
            Search
          </Button>
          }
          <label id="hint" className={this.state.isHintVisible ? "hint ": "hint hidden"}>
            hit the button to run the searching
          </label> 
        </div>
        
        <div className="App">
          {loading && 
            <div>
              <br/><label>Loading...</label><br/><br/>
              <CircularProgress />
            </div>
          }

          {resultsLoaded && 
            <div>
              <StackGrid columnWidth={355} duration={500}> 
              { 
                this.state.allImgs.map( resource => (
                    <div key={resource.id}>
                      <ImageComponent imgSrc={resource.urls.small} imgAlt=""
                        imgHeight={350 * resource.height/resource.width}/>
                    </div>
                  )
                )
              } 
              </StackGrid>
            </div>
          }

          {this.state.wasError && 
            <ErrorInfoComponent />
          }
          
        </div>
      </div>
    );
  }
}

export default App;
