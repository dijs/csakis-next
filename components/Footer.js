import React from 'react';
import Logo from '../images/logo-whiteCsakis2019.svg';
import PhotoGallery from '../icons/photo-gallery.svg';
import Information from '../icons/information.svg';
import Facebook from '../icons/facebook.svg';
import Mail from '../icons/mail-icon.svg';

export default function FeaturedText() {
  return (
    <div className="footer">
      <a href="https://csakis.net">
        <Logo className="logo" />
      </a>
      <div className="icons">
        <a href="https://csakis.net">
          <Information />
        </a>
        <a href="mailto:chakisromania@gmail.com">
          <Mail />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.facebook.com/csakiscsaladban/"
        >
          <Facebook />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.facebook.com/pg/csakiscsaladban/photos/?tab=album&album_id=2578809232397440"
        >
          <PhotoGallery />
        </a>
      </div>
    </div>
  );
}
