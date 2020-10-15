import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery2';

import image1 from './img/bfCloset.jpg';
import image2 from './img/bfKitchen.jpg';
import image3 from './img/bfKitchen2.jpg';
import image4 from './img/bfKitchen3.jpg';
import image5 from './img/bfKitchen4.jpg';
import image6 from './img/bfStairs.jpg';



class BeforeAndAfterGallery extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: this.props.images
        };
    }

    render () {
        return (
                <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    border: "1px solid #ddd",
                    overflow: "auto"}}>
                <Gallery
            images={this.state.images}
            enableImageSelection={false}/>
                </div>
        );
    }
}

BeforeAndAfterGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.string,
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired,
            isSelected: PropTypes.bool
        })
    ).isRequired
};

BeforeAndAfterGallery.defaultProps = {
    images: ([
        {
            src: image1,
            thumbnail: image1,
            orientation: true,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "8H (gratisography.com)"
        },
        {
            src: image2,
            thumbnail: image2,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: image3,
            thumbnail: image3,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "315H (gratisography.com)"
        },
        {
            src: image4,
            thumbnail: image4,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "201H (gratisography.com)"
        },
        {
            src: image5,
            thumbnail: image5,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "Big Ben (Tom Eversley - isorepublic.com)"
        },
        {
            src: image6,
            thumbnail: image6,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
        }
    ])
};

export default BeforeAndAfterGallery;
