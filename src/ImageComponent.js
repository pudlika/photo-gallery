import React from 'react';

class ImageComponent extends React.Component {

    constructor(props) {
        super();
        console.log(props)

        this.state = {imgSrc : props.imgSrc, alt : props.imgAlt}
    }

    render() {
        var url = this.state != null ? this.state.imgSrc : "./image-placeholder.png";
        return(
            <img src={url} alt={this.state.alt} width="350" className="imageThumb"/>
        )
    }
}

export default ImageComponent;