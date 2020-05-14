import React from 'react';

class ImageComponent extends React.Component {

    constructor(props) {
        super();
        console.log(props)

        this.state = {imgSrc : props.imgSrc}
    }

    render() {
        var url = this.state != null ? this.state.imgSrc : "./image-placeholder.png";
        return(
            <div className="imageComponent">
                <img src={url} alt="" width="350" className="imageThumb"/>
            </div>
        )
    }
}

export default ImageComponent;