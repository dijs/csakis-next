import React from 'react';

export default function Logo({ title }) {
  return <header>{title ? <h1>{title}</h1> : null}</header>;
}
