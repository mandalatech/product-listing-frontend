function resolve(path, obj) {
  return path.split('.').reduce(function(prev, curr) {
    return prev ? prev[curr] : null
  }, obj)
}

export default resolve
