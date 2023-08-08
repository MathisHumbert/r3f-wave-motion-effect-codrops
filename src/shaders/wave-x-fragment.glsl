precision mediump float;

uniform sampler2D uTexture;
uniform float uHover;

varying vec2 vUv;
varying float vWave;

void main(){
  float wave = vWave * 2.;

  float r = texture2D(uTexture, vUv + vec2(0., 0.) + uHover * wave *  -0.05).r;
  float g = texture2D(uTexture, vUv + vec2(0., 0.) + uHover * wave *  0.).g;
  float b = texture2D(uTexture, vUv + vec2(0., 0.) + uHover * wave *  -0.02).b;

  vec3 texture = vec3(r, g, b);
  gl_FragColor = vec4(texture, 1.);
}