import './LoadingSpinner.css';

function LoadingSpinner({ message = 'Loading...', size = 'medium' }) {
    return (
        <div className="loading-spinner">
            <div className={`spinner spinner-${size}`}></div>
            <p className="loading-message">{message}</p>
        </div>
    );
}

export default LoadingSpinner;
