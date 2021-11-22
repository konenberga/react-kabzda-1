import React, {useEffect, useState} from "react";


const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])


    const activateEditMode = () => setEditMode(true)
    const deActivateEditMode = () => {
        setEditMode(false)
        if (status != false && status.length < 100) {
            props.updateUserStatus(status)
        }

    }
    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }


    return (
        <div>
            {
                (editMode === false)
                    ? <div><span onDoubleClick={activateEditMode}>{props.status}</span></div>
                    : <div><input autoFocus={true} onChange={onStatusChange} onBlur={deActivateEditMode} type="text" value={status}/></div>
            }
        </div>
    )
}

export default ProfileStatus