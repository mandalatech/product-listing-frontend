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

export const getProductWeight = (productList, productID) => {
  return productList.find((product) => product.id === productID)?.weight
    .major_weight
}

export const getProductPrice = (productList, productID) => {
  return productList.find((product) => product.id === productID)?.price
}

export const getBundleMinimumQuantity = (products, bundleItems) => {
  const minQuantity = Math.min(
    ...bundleItems.map((item) =>
      Math.floor(getProductStock(products, item.product) / item.quantity || 0)
    )
  )
  if (Number.isNaN(minQuantity)) {
    return 0
  } else {
    return minQuantity
  }
}

export const getTotalBundleCost = (products, bundleItems) => {
  const bundleCosts = bundleItems.map(
    (item) => item.quantity * getProductPrice(products, item.product)
  )
  return bundleCosts.reduce((a, b) => a + b, 0)
}

export const getBundleTotalWeight = (products, bundleItems) => {
  const bundleWeights = bundleItems.map(
    (item) => item.quantity * getProductWeight(products, item.product)
  )
  return bundleWeights.reduce((a, b) => a + b, 0)
}

export const getSelectedProductIDs = (bundleItems) => {
  const selectedIDs = bundleItems.map((item) => item.product)
  return selectedIDs
}

export const getDisabledSelectedProductsList = (products, bundleItems) => {
  const prList = products.map((pr) => {
    const tinyOption = {
      name: pr.title,
      id: pr.id,
    }
    return tinyOption
  })
  const newList = prList.map((pr) => {
    if (getSelectedProductIDs(bundleItems).includes(pr.id)) {
      pr.disabled = true
    }
    return pr
  })
  return newList
}
