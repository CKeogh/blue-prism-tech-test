import React from 'react';

class AddTaskModal extends React.Component {

    state = {
        title: '',
        desc: '',
    }
    render() {
        const { showModal, className, handleNewTask } = this.props;
        return (
            <div
                className={className}
                style={{
                    opacity: showModal ? '1' : '0',
                    transform: showModal ? 'translateY(0vw)' : 'translateY(-35vw)',
                }}
            >
                <label htmlFor="input-title">Title: </label>
                <input type="text" id="input-title" onChange={(e) => this.handleChange(e, 'title')} />
                <label htmlFor="input-desc">Description: </label>
                <input type="text" id="input-desc" onChange={(e) => this.handleChange(e, 'desc')} />
                <button className="submit-button" onClick={() => handleNewTask(this.state.title, this.state.desc)} >Submit</button>
            </div>
        )
    }

    handleChange(e, label) {
        this.setState({
            [label]: e.target.value
        })
    }
}

export default AddTaskModal;