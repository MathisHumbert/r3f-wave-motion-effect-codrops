precision mediump float;

uniform sampler2D uTexture;
uniform float uHover;

varying vec2 vUv;
varying float vWave;

void main(){
  vec2 uv = vec2(vUv.x, vUv.y + vWave * 0.25);

  float r = texture2D(uTexture, uv + vec2(0., 0.) ).r;
  float g = texture2D(uTexture, uv + vec2(0., 0.) ).g;
  float b = texture2D(uTexture, uv + vec2(0., -0.02) * uHover).b;

  vec3 texture = vec3(r, g, b);
  gl_FragColor = vec4(texture, 1.);
}