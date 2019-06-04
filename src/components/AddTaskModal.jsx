import React from 'react';

class AddTaskModal extends React.Component {
    render() {
        console.log(this.props.showModal)
        return (
            <div
                className={this.props.className}
                style={{ display: this.props.showModal ? 'block' : 'none' }}
            >
                MODAL
            </div>
        )
    }
}

export default AddTaskModal;