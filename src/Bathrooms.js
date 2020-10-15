import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery2';

import bathroom1 from './img/bathroom1.jpg';
import bathroom2 from './img/bathroom2.jpg';
import bathroom3 from './img/bathroom3.jpg';
import bathroom4 from './img/bathroom4.jpg';
import bathroom5 from './img/bathroom5.jpg';
import bathroom6 from './img/bathroom6.jpg';
import bathroom7 from './img/bathroom7.jpg';
import bathroom8 from './img/bathroom8.jpg';
import bathroom9 from './img/bathroom9.jpg';
import bathroom10 from './img/bathroom10.jpg';
import bathroom11 from './img/bathroom11.jpg';
import bathroom12 from './img/bathroom12.jpg';
import bathroom13 from './img/bathroom13.jpg';
import bathroom14 from './img/bathroom14.jpg';
import bathroom15 from './img/bathroom15.jpg';
import bathroom16 from './img/bathroom16.jpg';
import bathroom17 from './img/bathroom17.jpg';
import bathroom18 from './img/bathroom18.jpg';
import bathroom19 from './img/bathroom19.jpg';
import bathroom20 from './img/bathroom20.jpg';
import bathroom21 from './img/bathroom21.jpg';
import bathroom22 from './img/bathroom22.jpg';
import bathroom23 from './img/bathroom23.jpg';
import bathroom24 from './img/bathroom24.jpg';
import bathroom25 from './img/bathroom25.jpg';
import bathroom26 from './img/bathroom26.jpg';
import bathroom27 from './img/bathroom27.jpg';
import bathroom28 from './img/bathroom28.jpg';
import bathroom29 from './img/bathroom29.jpg';



class Bathrooms extends React.Component {
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

Bathrooms.propTypes = {
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

Bathrooms.defaultProps = {
    images: ([
        {
            src: bathroom1,
            thumbnail: bathroom1,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: bathroom2,
            thumbnail: bathroom2,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: bathroom3,
            thumbnail: bathroom3,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: bathroom4,
            thumbnail: bathroom4,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: bathroom5,
            thumbnail: bathroom5,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: bathroom6,
            thumbnail: bathroom6,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: bathroom7,
            thumbnail: bathroom7,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: bathroom8,
            thumbnail: bathroom8,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: bathroom9,
            thumbnail: bathroom9,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: bathroom10,
            thumbnail: bathroom10,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: bathroom11,
            thumbnail: bathroom11,
            orientation: true,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "8H (gratisography.com)"
        },
        {
            src: bathroom12,
            thumbnail: bathroom12,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: bathroom13,
            thumbnail: bathroom13,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "315H (gratisography.com)"
        },
        {
            src: bathroom14,
            thumbnail: bathroom14,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "201H (gratisography.com)"
        },
        {
            src: bathroom15,
            thumbnail: bathroom15,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
        },
        {
            src: bathroom16,
            thumbnail: bathroom16,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "Big Ben (Tom Eversley - isorepublic.com)"
        },
        {
            src: bathroom17,
            thumbnail: bathroom17,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
        },
        {
            src: bathroom18,
            thumbnail: bathroom18,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
        },
        {
            src: bathroom19,
            thumbnail: bathroom19,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
        },
        {
            src: bathroom20,
            thumbnail: bathroom11,
            orientation: true,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "8H (gratisography.com)"
        },
        {
            src: bathroom21,
            thumbnail: bathroom21,
            orientation: true,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "8H (gratisography.com)"
        },
        {
            src: bathroom22,
            thumbnail: bathroom22,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "286H (gratisography.com)"
        },
        {
            src: bathroom23,
            thumbnail: bathroom23,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "315H (gratisography.com)"
        },
        {
            src: bathroom24,
            thumbnail: bathroom24,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "201H (gratisography.com)"
        },
        {
            src: bathroom25,
            thumbnail: bathroom25,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
        },
        {
            src: bathroom26,
            thumbnail: bathroom26,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "Big Ben (Tom Eversley - isorepublic.com)"
        },
        {
            src: bathroom27,
            thumbnail: bathroom27,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
        },
        {
            src: bathroom28,
            thumbnail: bathroom28,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
        },
        {
            src: bathroom29,
            thumbnail: bathroom29,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
        }
    ])
};

export default Bathrooms;
