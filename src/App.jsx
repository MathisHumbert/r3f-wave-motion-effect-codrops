import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ReactLenis } from '@studio-freight/react-lenis';

import Main from './dom/Main';
import Gallery from './three/Gallery';

export default function App() {
  useEffect(() => {
    document.body.classList.remove('loading');
  }, []);

  return (
    <ReactLenis root>
      {/* DOM */}
      <Main />
      {/* WEBGL */}
      <div className='canvas__wrapper'>
        <Canvas>
          <Gallery />
        </Canvas>
      </div>
    </ReactLenis>
  );
}
