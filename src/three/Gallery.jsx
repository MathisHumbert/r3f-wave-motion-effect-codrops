import React, { useLayoutEffect, useState } from 'react';
import * as THREE from 'three';

import Media from './Media';

export default function Gallery() {
  const [itemElements, setItemElements] = useState([]);
  const planeGeometry = new THREE.PlaneGeometry(1, 1, 16, 16);

  useLayoutEffect(() => {
    const items = document.querySelectorAll('.item');
    setItemElements([...items]);
  }, []);

  return (
    <>
      {itemElements.length > 0
        ? itemElements.map((item, index) => {
            const img = item.querySelector('.item__img');
            const element = item.querySelector('.item__fig');

            return (
              <Media
                key={index}
                element={element}
                img={img}
                geometry={planeGeometry}
              />
            );
          })
        : null}
    </>
  );
}
