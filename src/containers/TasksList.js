import { connect } from 'react-redux'
import { TasksList } from '../components'
import { getTasks, getSelectedTask } from '../selectors'
import {
  deleteTask,
  editTask,
  selectTask,
  openModal,
  setInitialValues,
  createTask,
} from '../actions'

const mapStateToProps = state => ({
  tasks: getTasks(state),
  selectedTaskId: getSelectedTask(state),
})

const mapDispatchToProps = {
  deleteTask,
  editTask,
  selectTask,
  openModal,
  createTask,
  setInitialValuesOnModal: setInitialValues,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksList)
