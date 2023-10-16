export const Break = ({ count, increase, decrease, play  }) => {
    return (
        <div id="break"
        className="column-center fs-3">
            <div id="break-label">Break Length</div>
            <div id="break-btn"
            className="row-center">
                <button id="break-decrement"
                disabled={ play }
                onClick={ decrease }
                className="me-3">
                    <i className="fa-solid fa-arrow-down"></i>
                </button>
                <div id="break-length">{ count }</div>
                <button id="break-increment"
                disabled={ play }                
                onClick={ increase }
                className="ms-3">
                <i className="fa-solid fa-arrow-up"></i>
                </button>
            </div>
        </div>
    )
}

export const Session = ({ count , increase, decrease, play }) => {
    return (
        <div id="session"
        className="column-center fs-3">
            <div id="session-label">Session Length</div>
            <div id="session-btn"
            className="row-center">
                <button id="session-decrement"
                disabled={ play }
                onClick={ decrease }
                className="me-3">
                <i className="fa-solid fa-arrow-down"></i>
                </button>
                <div id="session-length"> { count } </div>
                <button id="session-increment"
                disabled={ play }
                onClick={ increase }
                className="ms-3">
                <i className="fa-solid fa-arrow-up"></i>
                </button>
            </div>
        </div>
    )
}

export const Timer = ({ title, timeFormatter, handlePlay, reset }) => {
    return (
        <div id="timer">
            <div id="timer-display"
            className="column-center border border-dark border-4 rounded">
                <div id="timer-label"
                className="fs-3">{ title }</div>
                <div id="time-left">{ timeFormatter }</div>
            </div>
            <div id="timer-btn"
            className="row-center fs-3">
                <button id="start_stop"
                onClick={ handlePlay }
                className="me-2">
                    <i className="fa-solid fa-play"></i>
                    <i className="fa-solid fa-pause"></i>
                </button>
                <button id="reset"
                onClick={ reset }
                className="ms-2">
                <i className="fa-solid fa-rotate"></i>
                </button>
            </div>
        </div>
    )
}