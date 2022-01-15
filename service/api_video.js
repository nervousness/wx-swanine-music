import swanRequest from './index'

export function getTopMV(offset, limit = 10) {
  return swanRequest.get("/top/mv", {
    offset,
    limit
  })
}