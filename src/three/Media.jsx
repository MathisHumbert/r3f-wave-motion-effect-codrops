import { useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useLenis } from '@studio-freight/react-lenis';
import { gsap } from 'gsap';

export default function Media({
  element,
  texture,
  geometry,
  vertex,
  fragment,
}) {
  const mesh = useRef();
  const bounds = useRef();
  const currentScroll = useRef();

  const { viewport, size } = useThree();

  useLenis(({ scroll }) => {
    if (bounds.current !== undefined) {
      updateY(scroll);
    }

    currentScroll.current = scroll;
  });

  const shaderArgs = useMemo(() => {
    return {
      uniforms: {
        uTexture: { value: texture },
        uTime: { value: 0 },
        uHover: { value: 0 },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    };
  }, [texture]);

  useEffect(() => {
    element.addEventListener('mouseenter', onMouseEnter);

    element.addEventListener('mouseleave', onMouseLeave);
  }, []);

  useEffect(() => {
    const rect = element.getBoundingClientRect();

    bounds.current = {
      top: rect.top + currentScroll.current,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    };

    updateScale();
    updateX();
    updateY(currentScroll.current);
  }, [viewport, size]);

  useFrame((state) => {
    if (mesh.current === undefined) return;

    mesh.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
  });

  const updateScale = () => {
    mesh.current.scale.x = (viewport.width * bounds.current.width) / size.width;
    mesh.current.scale.y =
      (viewport.height * bounds.current.height) / size.height;
  };

  const updateX = (x = 0) => {
    mesh.current.position.x =
      -viewport.width / 2 +
      mesh.current.scale.x / 2 +
      ((bounds.current.left - x) / size.width) * viewport.width;
  };

  const updateY = (y = 0) => {
    mesh.current.position.y =
      viewport.height / 2 -
      mesh.current.scale.y / 2 -
      ((bounds.current.top - y) / size.height) * viewport.height;
  };

  const onMouseEnter = () => {
    gsap.to(mesh.current.material.uniforms.uHover, {
      value: 1,
    });
  };

  const onMouseLeave = () => {
    gsap.to(mesh.current.material.uniforms.uHover, {
      value: 0,
    });
  };

  return (
    <mesh ref={mesh} geometry={geometry}>
      <rawShaderMaterial args={[shaderArgs]} />
    </mesh>
  );
}
