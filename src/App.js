import React from 'react';
import './App.css';
import ImageComponent from './ImageComponent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
       // apiUrl : "https://api.imgflip.com/get_memes"
    }
    this.searchInputHandler = this.searchInputHandler.bind(this);
    this.searchForPhotos = this.searchForPhotos.bind(this);
    this.searchDynamicallyChangeHandler = this.searchDynamicallyChangeHandler.bind(this);
    this.searchForPhotos = this.searchForPhotos.bind(this);
    this.buttonSubmittedHandler = this.buttonSubmittedHandler.bind(this);
  }

  searchDynamicallyChangeHandler(event) {
    this.setState({searchDynamically : event.target.checked, isHintVisible: false})
  }

  componentDidMount() {
    this.setState({isLoaded: false, wasError: false});

    this.searchForPhotos("lion");
  }
 
  searchInputHandler(event) {
    var phrase = event.target.value;
    this.setState({searchedPhrase: phrase});
    
    console.log("searchedPhrase: " + event.target.value +";" + this.state.searchedPhrase + " phrase: "+phrase);
    console.log(this.state);

    if (this.state.searchDynamically) {
      this.setState({isLoaded: false, wasError: false, searchedPhrase: phrase});
      this.searchForPhotos(phrase);
    }
    else {
      this.setState({isHintVisible: true});
    }
  }

  searchForPhotos(phrase) {
    fetch(this.state.apiUrl + phrase)
      .then(response => response.json())
      .then(
        data => {
              var results = [];
              results = data.results;
              var url = results.length > 0 ? results[0].urls.small : "./image-big.png"
              this.setState({isLoaded: true, testData: url, allImgs: results
          })},
        error => {this.setState({isLoaded: true, testData: "./image-big.png", wasError : true })}
        )
      .catch(e => console.log(e));
  }

  buttonSubmittedHandler(event) {
    console.log("button submitted");
    console.log("searchedPhrase: " + this.state.searchedPhrase);

    this.setState({isLoaded: false, wasError: false});
    this.searchForPhotos(this.state.searchedPhrase);
  }


  render() {
    return (
      <div className="container">
        <header className="App-header">
          <label id="mainLabel" >Photo gallery</label>

          <label className="checkboxLabel"><input type="checkbox" 
            checked={this.state.searchDynamically} onChange={this.searchDynamicallyChangeHandler}/>
            search dynamically
          </label> 
          
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
          {!this.state.isLoaded && <label>Loading...</label>}

          {(!this.state.wasError && this.state.isLoaded) && 
          //<ImageComponent imgSrc={this.state.testData} alt="" />
            this.state.allImgs.map( resource => <ImageComponent imgSrc={resource.urls.small} alt="" />)
          }


          {this.state.wasError && <ImageComponent imgSrc="./image-big.png"/>}

          
        </div>
      </div>
    );
  }
}

export default App;
