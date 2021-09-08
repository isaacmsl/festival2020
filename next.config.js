module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.festivalfelintolucio.com.br', 
        permanent: true,
      },
    ]
  },
}