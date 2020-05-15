
import React from 'react';
import StackGrid from 'react-stack-grid';
import ImageComponent from './Components/ImageComponent';

class PhotoGridComponent extends React.Component {

    constructor(props) {
        super();

        this.state = {
            imageResources : props.imageResources
        }
    }

    render() 
    {
        return(
            <StackGrid columnWidth={355} 
            { 
              this.state.imageResources.map( resource => 
                (
                  <div key={resource.id}>
                    
                    <ImageComponent imgSrc={resource.urls.small} imgAlt=""  />
                  </div>
                )
              )
            } 
            </StackGrid>
        )
    }
}
    
export default PhotoGridComponent;