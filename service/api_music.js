import swanRequest from './index'

export function getBanner() {
  return swanRequest.get("/banner", {
    type: 2
  })
}