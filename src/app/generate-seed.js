import sha1 from 'sha1'

function generateSeed() {
  return sha1(Math.random()).slice(0, 8)
}

export default generateSeed
