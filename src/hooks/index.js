export const useQueryParams = () => {
  const params = new URLSearchParams(window.location.search)

  return new Proxy(params, {
    get(target, prop) {
      return target.get(prop)
    },
  })
}
