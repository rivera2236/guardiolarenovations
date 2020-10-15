import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

import image2 from './img/remodeling-banner2.jpg';

function Pictures(){
	const IMAGES =
	[{
	        src: image2,
	        thumbnail: image2,
	        thumbnailWidth: 320,
	        thumbnailHeight: 174,
	        isSelected: false,
	        caption: "After Rain (Jeshu John - designerspics.com)",
	        orientation: true, 
	        id: "kitchen",
	        enableImageSelection: false,
	},
	{
	        src: image2,
	        thumbnail: image2,
	        thumbnailWidth: 320,
	        thumbnailHeight: 212,
	        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
	        caption: "Boats (Jeshu John - designerspics.com)"
	},

	{
	        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
	        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
	        thumbnailWidth: 320,
	        thumbnailHeight: 212,
	        enableImageSelection: false
	}]

	return(
	        <Gallery images={IMAGES} backdropClosesModal={true}/>
	);
}

export default Pictures;