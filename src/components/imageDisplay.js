import React, { useState } from 'react'
import Box from '@mui/material/Box'
import imageProduct1 from '../images/image-product-1.jpg';
import imageProduct1thumb from '../images/image-product-1-thumbnail.jpg';
import imageProduct2 from '../images/image-product-2.jpg';
import imageProduct2thumb from '../images/image-product-2-thumbnail.jpg';
import imageProduct3 from '../images/image-product-3.jpg';
import imageProduct3thumb from '../images/image-product-3-thumbnail.jpg';
import imageProduct4 from '../images/image-product-4.jpg';
import imageProduct4thumb from '../images/image-product-4-thumbnail.jpg';

const classes = {
  displayImage: {
    width: 'inherit',
    borderRadius: '20px'
  },
  thumbnailImage: {
    width: '25%',
    padding: 6,
    borderRadius: '13px',
  },
}

function ImageDisplay() {
  const [displayImage, setDisplayImage] = useState(imageProduct1);
  
    return (  
        <Box sx={{marginX: 15, width: '60%'}}>
          <Box sx={{width: 400}}>
            <img style={classes.displayImage} src={displayImage}></img>
          </Box>
          <Box marginTop="10px">
            <img onClick={() => setDisplayImage(imageProduct1)} style={classes.thumbnailImage} src={imageProduct1thumb}></img>
            <img onClick={() => setDisplayImage(imageProduct2)} style={classes.thumbnailImage} src={imageProduct2thumb}></img>
            <img onClick={() => setDisplayImage(imageProduct3)} style={classes.thumbnailImage} src={imageProduct3thumb}></img>
            <img onClick={() => setDisplayImage(imageProduct4)} style={classes.thumbnailImage} src={imageProduct4thumb}></img>
          </Box>
        </Box>
    )
}

export default ImageDisplay
