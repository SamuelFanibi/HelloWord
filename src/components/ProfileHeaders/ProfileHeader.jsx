import './ProfileHeader.css';

function ProfileHeader({ isEditing, onEdit, onSave, onCancel, title = 'User Profile' }) {
    return (
        <div className="profile-header">
            <h2>{title}</h2>
            <div className="profile-actions">
                {!isEditing ? (
                    <button 
                        className="edit-btn"
                        onClick={onEdit}
                    >
                        Edit Profile
                    </button>
                ) : (
                    <div className="edit-actions">
                        <button 
                            className="save-btn"
                            onClick={onSave}
                        >
                            Save
                        </button>
                        <button 
                            className="cancel-btn"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfileHeader;
