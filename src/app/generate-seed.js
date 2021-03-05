import Chance from 'chance'

function generateSeed() {
  // by default G54 has 5400 possible role configurations, so we should pick a hash size that could reasonable contain all these states
  // (5C1 communications * 5C1 finance * 6C1 force * 9C2 special interests)
  // if we wanted to be real clever we could calculate an appropriate hash size on the fly based on the roles database
  return new Chance().hash({length: 4})
}

export default generateSeed
