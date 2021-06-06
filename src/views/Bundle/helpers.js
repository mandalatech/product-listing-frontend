export const getProductTitle = (productList, productID) => {
  return productList.find((product) => product.id === productID)?.title
}
