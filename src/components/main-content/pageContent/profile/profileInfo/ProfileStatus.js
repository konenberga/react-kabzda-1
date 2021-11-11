import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        // this.state.editMode = true
        this.setState(
            {editMode: true}
            )
    }

    deActivateEditMode = () => {
        this.setState(
            {editMode: false}
        )
        if (this.state.status != false && this.state.status.length < 100) {
            this.props.updateUserStatus(this.state.status)
        }
    }

    onStatusChange = (event) => {
        this.setState({status: event.currentTarget.value})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }


    render() {
        return (
            <div>
                {
                    (this.state.editMode === false)
                        ? <div><span onDoubleClick={this.activateEditMode}>{this.props.status}</span></div>
                        : <div><input autoFocus={true} onChange={this.onStatusChange} onBlur={this.deActivateEditMode} type="text" value={this.state.status}/></div>
                }
            </div>
        )
    }
}

export default ProfileStatus