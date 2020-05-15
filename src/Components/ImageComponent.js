import React from 'react';

class ImageComponent extends React.Component {

    constructor(props) {
        super();
        this.state = {imgSrc : props.imgSrc, alt : props.imgAlt, height : props.imgHeight}
    }

    render() {
        var url = this.state != null ? this.state.imgSrc : "./image-placeholder.png";
        return(
            <img src={url} alt={this.state.alt} 
                width="350" height={this.state.height ? this.state.height : 400} 
                className="imageThumb"/>
        )
    }
}

export default ImageComponent;