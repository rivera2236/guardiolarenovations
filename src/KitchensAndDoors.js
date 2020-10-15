import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery2';

import kitchen1 from './img/kitchen1.jpg';
import kitchen2 from './img/kitchen2.jpg';
import kitchen3 from './img/kitchen3.jpg';
import kitchen4 from './img/kitchen4.jpg';
import kitchen5 from './img/kitchen5.jpg';
import kitchen6 from './img/kitchen6.jpg';

import door1 from './img/door1.jpg';
import door2 from './img/door2.jpg';
import door3 from './img/door3.jpg';
import door4 from './img/door4.jpg';
import door5 from './img/door5.jpg';
import door6 from './img/door6.jpg';
import door7 from './img/door7.jpg';
import door8 from './img/door8.jpg';
import door9 from './img/door9.jpg';



class KitchensAndDoors extends React.Component {
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

KitchensAndDoors.propTypes = {
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

KitchensAndDoors.defaultProps = {
    images: ([
        {
            src: kitchen1,
            thumbnail: kitchen1,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: kitchen2,
            thumbnail: kitchen2,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: kitchen3,
            thumbnail: kitchen3,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: kitchen4,
            thumbnail: kitchen4,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: kitchen5,
            thumbnail: kitchen5,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: kitchen6,
            thumbnail: kitchen6,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: door1,
            thumbnail: door1,
            orientation: true,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "8H (gratisography.com)"
        },
        {
            src: door2,
            thumbnail: door2,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: door3,
            thumbnail: door3,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "315H (gratisography.com)"
        },
        {
            src: door4,
            thumbnail: door4,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "201H (gratisography.com)"
        },
        {
            src: door6,
            thumbnail: door6,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "Big Ben (Tom Eversley - isorepublic.com)"
        },
        {
            src: door5,
            thumbnail: door5,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
        },
        {
            src: door7,
            thumbnail: door7,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
        },
        {
            src: door8,
            thumbnail: door8,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
        },
        {
            src: door9,
            thumbnail: door9,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
        }
    ])
};

export default KitchensAndDoors;
