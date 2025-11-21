import FormField from '../FormFields/FormField';
import './PersonalInfo.css';

function PersonalInfo({ profile, isEditing, onChange }) {
    return (
        <div className="profile-section">
            <h3>Personal Information</h3>
            <FormField
                label="Full Name"
                name="name"
                type="text"
                value={profile.name}
                onChange={onChange}
                disabled={!isEditing}
                isEditing={isEditing}
                required
            />
            
            <FormField
                label="Email"
                name="email"
                type="email"
                value={profile.email}
                onChange={onChange}
                disabled={!isEditing}
                isEditing={isEditing}
                required
            />
            
            <FormField
                label="Username"
                name="username"
                type="text"
                value={profile.username}
                onChange={onChange}
                disabled={!isEditing}
                isEditing={isEditing}
                required
            />
            
            <FormField
                label="Phone"
                name="phone"
                type="tel"
                value={profile.phone}
                onChange={onChange}
                disabled={!isEditing}
                isEditing={isEditing}
                placeholder="+1 (555) 123-4567"
                
            />
        </div>
    );
}

export default PersonalInfo;
