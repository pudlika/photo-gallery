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
          
          {/* {!this.state.searchDynamically && 
            <button onClick={this.buttonSubmittedHandler}>
              <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAADsklEQVQ4T53UX0yVdRgH8O/z/M6Lyt8mCK61ORHLTSkoGMo5ISDWtIDjUdDWX27ywkwuWnfNudbyomZuXWAXEdNWIBzPySIhBAzOmTH/UPivcotqNUGZjR2Ecw6/39NeGkcg4MLf1fvb+7yf93me93l/hDnrdFdwnYHZq4W2ssEaAziYzV8k3AORTyvLXF1zn5m5p+nNsQsXrPTR8GGCqYXhPlFohpFrxCpKxqwWYDsI5QDaTBQ1nmedw/PBU6CNZYyGfYDJA6jGfc55xrEuVGSY8gBYRHxDL1vW5k0+v4q0OUFACk1KUeUzrr/nolOg/2zgAyHzMpFy7rr1xEMi0iDKrBXQAAERaFoPhTAIB1pTAv5xK74dxHS5u9B16BCZWSXbPdMiVwCpqBrKHTYs3RDj1XH0FjxJ/5VVL0s5YayWtHlXSL3hX/Hj11GR60w44N7irJ8F+rt6j4imje6eQqfjsbEBYXNR70l+Zb7+cNPY6yT6qDaOR30Z/fsBKXWXOu22xBZ5OwNXiFBfdevxi8LSri16JJbZPCo3hgZAdNK3vP9bw+gzxpHmKSsYmQ4lX0dgXEg8O+/krAfkBbM76anFxsLRGDqiCVlnUgJ7xq3EkAgV7NhS2BcDvR2BKCve5hnOzidIhd6dtGlR8MvQ+5rlybrMn5/PGA1HCOyqLN0UuJ9hZ88gCb/nGcm9g0nToMMJ6aihiYVQagx1KqC/ZUX/MQHdYG1WVWx9+o8Y6D8bOC5Aovte4Yvq3tjvQvjQVCceng90NI26RON7Viq/Oa1/sxjZ7y5zrZ79lTt6S4TpO6M4u2ooOxfaNIhS+0x1wiczA6cw4RYItXzBv9XGpd39RYiP7yhxvvO/X8/XGfhGgJXx0VDRtruul4j0RwK+yUAHBBOaUMDGFINUnc6If7Pp9lWOW/6P17DkKFLFlSWFN2Ml2xfetkA6WwgCZkiJqi4fzmFWUiOQfEDilNBVIvr848zrP9nxe/Pyoq2trUsiccktNmopq6R888Zf7Xuxw8Hf3vuwWNRsNDYwUx0bOblEh64NpqZGVo5OZAL0nN0zKB6I3E7eVV29IXIfpVxLqWIbjYG2fvCgcG5R8FUQ9gGYPY9GBkXRCRFTw6QuLYTOAmc219vxQyqRXsNEFunJP6dHw98VzNKiu5Xw5fBIys5YpktTviIgfkFwseE+fe782qi2UVyaRn2dvdsBOfVAoP2yaZQB+6Q6SkJvaxJ6YHDqHO0KZokxnxmhArAEHUq/9i+Ss8PsVhe+/gAAAABJRU5ErkJggg=="/>
            </button>
          } */}
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
