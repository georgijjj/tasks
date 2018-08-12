import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
`

const StyledButtonContainer = styled.div`
  display: flex;
`

class RangeModal extends React.Component {
  constructor() {
    super()

    this.state = {
      titleError: '',
      descriptionError: '',
    }
  }

  render() {
    const { closeModal, isOpen, title, description } = this.props
    return (
      <Dialog onClose={closeModal} open={isOpen}>
        <StyledForm noValidate autoComplete="off">
          <TextField
            error={this.state.titleError}
            value={title}
            onChange={this._onChangeTitle}
            label="title"
            margin="normal"
          />
          <TextField
            error={this.state.descriptionError}
            value={description}
            onChange={this._onChangeDescription}
            label="description"
            margin="normal"
          />
          <StyledButtonContainer>
            <Button onClick={this._onSaveClick}>Сохранить</Button>
            <Button onClick={closeModal}>Отмена</Button>
          </StyledButtonContainer>
        </StyledForm>
      </Dialog>
    )
  }

  _onChangeTitle = ({ target: { value: title } }) => {
    const { changeTitle } = this.props
    changeTitle(title)

    if (this.state.titleError && title) {
      this.setState({ titleError: '' })
    }
  }

  _onChangeDescription = ({ target: { value: description } }) => {
    const { changeDescription } = this.props
    changeDescription(description)

    if (this.state.descriptionError && description) {
      this.setState({ descriptionError: '' })
    }
  }

  _onSaveClick = () => {
    const { onSaveClick, title, description, closeModal } = this.props

    if (!title) {
      this.setState({ titleError: 'require' })
    }
    if (!description) {
      this.setState({ descriptionError: 'require' })
    }

    if (title && description) {
      onSaveClick({ title, description })
      closeModal()
    }
  }
}

export default RangeModal
