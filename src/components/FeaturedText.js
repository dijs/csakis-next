import React from 'react';

export default function FeaturedText({ title, subtitle, content = [] }) {
  return (
    <div className="featured">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
