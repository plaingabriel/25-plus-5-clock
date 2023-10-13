export const Break = () => {
    return (
        <div id="break"
        className="column-center fs-3">
            <div id="break-label">Break Length</div>
            <div id="break-btn"
            className="row-center">
                <button id="break-decrement"
                className="me-3">
                    <i className="fa-solid fa-arrow-down"></i>
                </button>
                <div id="break-length">5</div>
                <button id="break-increment"
                className="ms-3">
                <i className="fa-solid fa-arrow-up"></i>
                </button>
            </div>
        </div>
    )
}

export const Session = () => {
    return (
        <div id="session"
        className="column-center fs-3">
            <div id="session-label">Session Length</div>
            <div id="session-btn"
            className="row-center">
                <button id="session-decrement"
                className="me-3">
                <i className="fa-solid fa-arrow-down"></i>
                </button>
                <div id="session-length">25</div>
                <button id="session-increment"
                className="ms-3">
                <i className="fa-solid fa-arrow-up"></i>
                </button>
            </div>
        </div>
    )
}

export const Timer = () => {
    return (
        <div id="timer">
            <div id="timer-display"
            className="column-center border border-dark border-4 rounded">
                <div id="timer-label"
                className="fs-3">Session</div>
                <div id="time-left">25:00</div>
            </div>
            <div id="timer-btn"
            className="row-center fs-3">
                <button id="start_stop"
                className="me-2">
                    <i className="fa-solid fa-play"></i>
                    <i className="fa-solid fa-pause"></i>
                </button>
                <button id="reset"
                className="ms-2">
                <i className="fa-solid fa-rotate"></i>
                </button>
            </div>
        </div>
    )
}