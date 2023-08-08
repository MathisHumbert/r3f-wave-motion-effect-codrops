import { useLayoutEffect, useState } from 'react';
import * as THREE from 'three';

import Media from './Media';
import waveXVertex from '../shaders/wave-x-vertex.glsl';
import waveXFragment from '../shaders/wave-x-fragment.glsl';
import revealVertex from '../shaders/reveal-vertex.glsl';
import revealFragment from '../shaders/reveal-fragment.glsl';
import waveYVertex from '../shaders/wave-y-vertex.glsl';
import waveYFragment from '../shaders/wave-y-fragment.glsl';

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
            let vertex, fragment;

            if (index > 5) {
              vertex = waveYVertex;
              fragment = waveYFragment;
            } else if (index > 2) {
              vertex = revealVertex;
              fragment = revealFragment;
            } else {
              vertex = waveXVertex;
              fragment = waveXFragment;
            }

            return (
              <Media
                key={index}
                element={element}
                img={img}
                geometry={planeGeometry}
                vertex={vertex}
                fragment={fragment}
              />
            );
          })
        : null}
    </>
  );
}
