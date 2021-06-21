export const cubeVertexCount = 36;

// prettier-ignore
export const cubeVertexArray = new Float32Array([
  // float4 position, float4 color, float2 uv,
  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,
  -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,
  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,
  1, -1, -1, 1,  1, 0, 0, 1,  1, 0,
  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,
  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,

  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,
  1, -1, 1, 1,   1, 0, 1, 1,  0, 1,
  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,
  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,
  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,
  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,

  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,
  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,
  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,
  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,
  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,
  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,

  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,
  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,
  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,
  -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,
  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,
  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,

  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,
  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,
  -1, -1, 1, 1,  0, 0, 1, 1,  0, 0,
  -1, -1, 1, 1,  0, 0, 1, 1,  0, 0,
  1, -1, 1, 1,   1, 0, 1, 1,  1, 0,
  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,

  1, -1, -1, 1,  1, 0, 0, 1,  1, 1,
  -1, -1, -1, 1, 0, 0, 0, 1,  0, 1,
  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,
  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,
  1, -1, -1, 1,  1, 0, 0, 1,  1, 1,
  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,
]);

export const triangleVertexCount = 19;

// prettier-ignore
export const triangleVertexArray = new Float32Array([
  // float4 position, float4 color, float2 uv,
  0, 1, 0, 1,    0, 0, 1, 1,  1, 1,
  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,
  1, -1, 1, 1,   0, 0, 1, 1,  1, 1,

  1, -1, -1, 1,  0, 1, 0, 1,  1, 1,
  0, 1, 0, 1,    0, 1, 0, 1,  1, 1,
  1, -1, 1, 1,   0, 1, 0, 1,  1, 1,

  -1, -1, -1, 1,  1, 1, 0, 1,  1, 1,
  1, -1, -1, 1,   1, 1, 0, 1,  1, 1,
  1, -1, 1, 1,    1, 1, 0, 1,  1, 1,

  -1, -1, 1, 1,   0, 1, 1, 1,  1, 1,
  -1, -1, -1, 1,  0, 1, 1, 1,  1, 1,
  1, -1, 1, 1,    0, 1, 1, 1,  1, 1,

  -1, -1, -1, 1,  1, 0.5, 0, 1,  1, 1, // bridge

  -1, -1, 1, 1,   1, 0.5, 0, 1,  1, 1,
  0, 1, 0, 1,     1, 0.5, 0, 1,  1, 1,
  -1, -1, -1, 1,  1, 0.5, 0, 1,  1, 1,

  0, 1, 0, 1,    1, 0, 0, 1,  1, 1,
  1, -1, -1, 1,  1, 0, 0, 1,  1, 1,
  -1, -1, -1, 1, 1, 0, 0, 1,  1, 1,
]);