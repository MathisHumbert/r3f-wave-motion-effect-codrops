precision mediump float;

attribute vec3 position;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform float uTime;
uniform float uHover;

varying vec2 vUv;
varying float vWave;

void main(){
  vec3 pos = position;

  pos.z += sin(pos.y * 5. + uTime) * 0.5 * uHover;

  vWave = pos.z;
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}