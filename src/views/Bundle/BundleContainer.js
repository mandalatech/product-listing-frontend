import CIcon from '@coreui/icons-react'
import { CButton } from '@coreui/react'
import { connect } from 'react-redux'
import { addBundleItems } from 'src/reducers/actions/bundle.actions'
import { freeSet } from '@coreui/icons'
import BundleRecord from './BundleRecord'

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
    </div>
  )
}

const mapStatetoProps = (state) => {
  return {
    bundleItems: state.bundle.bundleItems,
  }
}

export default connect(mapStatetoProps, { addBundleItems })(BundleContainer)
