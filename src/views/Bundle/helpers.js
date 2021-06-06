export const getProductTitle = (productList, productID) => {
  return productList.find((product) => product.id === productID)?.title
}

export const getProductStock = (productList, productID) => {
  return productList.find((product) => product.id === productID)
    ?.total_available_stock
}

export const getProductThumbnail = (productList, productID) => {
  return productList.find((product) => product.id === productID)?.thumbnail
}
