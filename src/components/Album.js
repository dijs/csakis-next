import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function getPhotos(albumId, limit) {
  const [photos] = React.useState([
    {
      low:
        'https://res.cloudinary.com/csakis-fesztival/image/upload/c_fit,e_art:red_rock,h_500,w_500/v1551187816/Photos%20for%202019%20web%20promotion/Chakis%20Prev.%20Events/53145581_488454458351407_5148917626075873280_n.jpg'
    },
    {
      low:
        'https://res.cloudinary.com/csakis-fesztival/image/upload/c_fit,e_art:red_rock,h_500,w_500/v1551187815/Photos%20for%202019%20web%20promotion/Chakis%20Prev.%20Events/52730260_528634587657832_6640666759906983936_n.jpg'
    },
    {
      low:
        'https://res.cloudinary.com/csakis-fesztival/image/upload/c_fit,e_art:red_rock,h_500,w_500/v1551187812/Photos%20for%202019%20web%20promotion/Chakis%20Prev.%20Events/52930326_1075014279368083_8167480784131719168_n.jpg'
    },
    {
      low:
        'https://res.cloudinary.com/csakis-fesztival/image/upload/c_fit,e_art:red_rock,h_500,w_500/v1551187811/Photos%20for%202019%20web%20promotion/Chakis%20Prev.%20Events/53215230_360031404841527_810346692510482432_n.jpg'
    },
    {
      low:
        'https://res.cloudinary.com/csakis-fesztival/image/upload/c_fit,e_art:red_rock,h_500,w_500/v1551187808/Photos%20for%202019%20web%20promotion/Chakis%20Prev.%20Events/53043022_2496782990397011_6085219276833161216_n.jpg'
    },
    {
      low:
        'https://res.cloudinary.com/csakis-fesztival/image/upload/c_fit,e_art:red_rock,h_500,w_500/v1551187780/Photos%20for%202019%20web%20promotion/Chakis%20Prev.%20Events/53309078_2276800315922450_289756906312957952_n.jpg'
    }
  ]);
  if (!photos.length) {
    // Do something...
  }
  return photos;
}

function Photo({ high, low, id }) {
  return <img key={id || low} data-src={high} src={low} alt="Album" />;
}

export default function Album({ albumId }) {
  const photos = getPhotos(albumId);
  return (
    <div className="album">
      <Carousel showIndicators={false} showThumbs={false}>
        {photos.map(Photo)}
      </Carousel>
    </div>
  );
}
