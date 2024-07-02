import React from 'react';

export default function FeaturedText({ eventTitle, subtitle, content = [] }) {
  return (
    <div className="featured">
      <h1 className="hide">
        CSAKIS <span className="adorn larger">{eventTitle}</span>
      </h1>
      <h3>{subtitle}</h3>
      <p className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
