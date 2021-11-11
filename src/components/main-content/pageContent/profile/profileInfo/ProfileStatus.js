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
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (event) => {
        this.setState({status: event.currentTarget.value})
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