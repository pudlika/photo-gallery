import React              from 'react';
import TextField          from '@material-ui/core/TextField';
import Button             from '@material-ui/core/Button';

class SearchInputComponent extends React.Component {

    constructor(props) {
        super();

        this.state = 
        {
            searchDynamically : props.searchDynamically,
            isHintVisible : props.isHintVisible,
            phrase : props.phrase,
            buttonSubmittedHandler : props.buttonSubmittedHandler,
            searchInputHandler : props.searchInputHandler
        }
    }

    render() {
        return(
            <div className="inputContainer">
                <TextField
                    label="Search for photos" 
                    margin="dense" variant="outlined"
                    value={this.state.phrase}
                    onChange={(event) => this.state.searchInputHandler(event)}
                />
                {!this.state.searchDynamically && 
                    <Button variant="contained" 
                        size="medium" color="primary"
                        onClick={(event) => this.state.buttonSubmittedHandler(event)}
                    >
                    Search
                    </Button>
                }
                <label id="hint" className={this.state.isHintVisible ? "hint ": "hint hidden"}>
                    hit the button to run the searching
                </label> 
            </div>
        )
    }
}

export default SearchInputComponent;