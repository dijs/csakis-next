import React from 'react';

export default function FeaturedText({ eventTitle, subtitle, content = [] }) {
  return (
    <div className="featured">
      <h2>{eventTitle}</h2>
      <h3>{subtitle}</h3>
      <p className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
