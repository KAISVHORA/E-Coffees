const images = import.meta.glob('./assets/*', {
  eager: true,
  import: 'default',
  query: '?url',
})

export const asset = (filename) => images[`./assets/${filename}`]
