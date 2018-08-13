import { connect } from 'react-redux'
import { Search } from '../components'
import { changeSearchValue } from '../actions'
import { getSearchValue } from '../selectors'

const mapStateToProps = state => ({
  value: getSearchValue(state),
})

const mapDispatchToProps = {
  changeSearchValue,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
