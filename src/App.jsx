import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ReactLenis } from '@studio-freight/react-lenis';

import Main from './dom/Main';
import Gallery from './three/Gallery';

export default function App() {
  return (
    <ReactLenis root>
      <Suspense fallback={null}>
        {/* DOM */}
        <Main />
        {/* WEBGL */}
        <div className='canvas__wrapper'>
          <Canvas>
            <Gallery />
          </Canvas>
        </div>
      </Suspense>
    </ReactLenis>
  );
}
