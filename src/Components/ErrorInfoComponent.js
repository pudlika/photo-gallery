import React from 'react';
import ImageComponent from './ImageComponent';

function ErrorInfoComponent () {

    return (
        <div>
            <label>Sorry, an error appeared </label>
            <br /><br />
            <ImageComponent imgSrc="/photo-gallery/image-placeholder.png" />
        </div>
    )

}

export default ErrorInfoComponent;