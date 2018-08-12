import { connect } from 'react-redux'
import { closeModal, changeDescription, changeTitle } from '../actions'
import { getDescription, getTitle, getIsOpen } from '../selectors'
import { RangeModal } from '../components'

const mapStateToProps = state => ({
  title: getTitle(state),
  description: getDescription(state),
  isOpen: getIsOpen(state),
})

const mapDispatchToProps = {
  closeModal,
  changeDescription,
  changeTitle,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RangeModal)
