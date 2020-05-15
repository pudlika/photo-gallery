
import React from 'react';
import StackGrid from 'react-stack-grid';
import ImageComponent from './ImageComponent';

class PhotoGridComponent extends React.Component {

    constructor(props) {
        super();

        this.state = {
            imageResources : props.resources
        }
    }

    render() 
    {
        return(
            <div>
              <StackGrid columnWidth={355} duration={300}>
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
            </div>
        )
    }
}
    
export default PhotoGridComponent;