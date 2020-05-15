
import React from 'react';
import FormControlLabel   from '@material-ui/core/FormControlLabel';
import Checkbox           from '@material-ui/core/Checkbox';

class SearchDynamicallyControlComponent extends React.Component {

    constructor(props) {
        super();

        this.state = {
            searchDynamically : props.searchDynamically,
            searchDynamicallyChangeHandler : props.onChange
        }
    }

    render() 
    {
        return(
            <FormControlLabel 
                control={
                    <Checkbox
                        checked={this.state.searchDynamically}
                        onChange={(event) => this.state.searchDynamicallyChangeHandler(event)}
                        color="primary"
                    />
                }
                label="search dynamically"
            />
        )
    }
}
    
export default SearchDynamicallyControlComponent;