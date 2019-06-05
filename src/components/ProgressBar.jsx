import React from 'react';

class Progressbar extends React.Component {

    state = {
        showDetails: false
    }

    render() {
        const { className, showProgress, progress } = this.props;
        return (
            <div className={className}
                style={{ visibility: showProgress ? 'visible' : 'hidden' }}
                onClick={this.toggleDetails}
            >
                <div className="progress-details"
                    style={{
                        opacity: this.state.showDetails ? '1' : '0'
                    }}
                >
                    <p>Tasks in queue: 6</p>
                    <p>Tasks completed: 18</p>
                    <p>Average task time: 12s</p>
                    <p>Time remaining: 01:12</p>
                </div>
                <div className="progress-complete"
                    style={{ width: `${progress}%` }}
                >
                </div>
            </div>
        )
    }

    toggleDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }
}

export default Progressbar;