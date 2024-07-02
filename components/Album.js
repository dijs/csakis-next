import React from 'react';

export default function Album({ images = [] }) {
  return (
    <div className="group-photos">
      <img src="/group/Csakis-2023HU-group.jpg" alt="group photo" />
      <img src="/group/Csakis-2023EN-group.jpg" alt="group photo" />
      <img src="/group/Csakis-2022-group.jpg" alt="group photo" />
      <img src="/group/Csakis-2021-group.jpg" alt="group photo" />
      <img src="/group/Csakis-2020-group.jpg" alt="group photo" />
      <img src="/group/Csakis-2019KI-group.jpg" alt="group photo" />
      <img src="/group/Csakis-2019-group.jpg" alt="group photo" />
      <img src="/group/Csakis-2016FE-group.jpg" alt="group photo" />
    </div>
  );
}
