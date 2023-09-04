export default {
  type: "object",
  properties: {
    sku: { type: 'string' }
  },
  required: ['sku']
} as const;
