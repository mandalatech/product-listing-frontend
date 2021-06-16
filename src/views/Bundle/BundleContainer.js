import CIcon from '@coreui/icons-react'
import { CButton } from '@coreui/react'
import { connect } from 'react-redux'
import { addBundleItems } from 'src/reducers/actions/bundle.actions'
import { freeSet } from '@coreui/icons'
import BundleRecord from './BundleRecord'
import {
  getBundleMinimumQuantity,
  getBundleTotalWeight,
  getTotalBundleCost,
} from './helpers'
import HorizontalRule from 'src/components/HorizontalRule'
import isEmpty from 'src/validations/isEmpty'

const BundleContainer = (props) => {
  const handleAddBundleItem = () => {
    // Handle the add bundle item button click.
    const newRecordID = Math.floor(Math.random() * 100000000 + 1)
    const newRecord = {
      id: newRecordID,
      product: null,
      quantity: null,
    }
    props.addBundleItems(newRecord)
  }

  return (
    <div>
      {props.bundleItems.map((record) => (
        <BundleRecord key={record.id} record={record} edit={props.edit} />
      ))}
      <CButton
        className="mb-0"
        style={{ display: 'flex', alignItems: 'center' }}
        onClick={handleAddBundleItem}
      >
        <div style={{ marginRight: 14 }}>
          <CIcon content={freeSet.cilPlus} size={'lg'} />
        </div>
        Add Bundle Item
      </CButton>
      {isEmpty(props.bundleItems) ? null : (
        <table
          className="table table-sm table-striped mt-5 mb-2"
          style={{ width: '30%' }}
        >
          <tbody>
            <tr>
              <th scope="row"> Bundle Quantity</th>
              <td>
                {getBundleMinimumQuantity(props.products, props.bundleItems)}
              </td>
            </tr>

            <tr>
              <th scope="row">Bundle Weight</th>
              <td>{getBundleTotalWeight(props.products, props.bundleItems)}</td>
            </tr>

            <tr>
              <th scope="row"> Bundle Price</th>
              <td>{getTotalBundleCost(props.products, props.bundleItems)}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

const mapStatetoProps = (state) => {
  return {
    products: state.root.products,
    bundleItems: state.bundle.bundleItems,
  }
}

export default connect(mapStatetoProps, { addBundleItems })(BundleContainer)
