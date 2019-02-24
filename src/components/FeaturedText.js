import React from 'react';

export default function FeaturedText({ title, subtitle, content = [] }) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p className="content">{content}</p>
    </div>
  );
}
