import FormField from './FormField';
import './ProfessionalInfo.css';

function ProfessionalInfo({ profile, isEditing, onChange }) {
    return (
        <div className="profile-section">
            <h3>Professional Information</h3>
            <FormField
                label="Company"
                name="company"
                type="text"
                value={profile.company}
                onChange={onChange}
                disabled={!isEditing}
                isEditing={isEditing}
                placeholder="Enter company name"
            />
            
            <FormField
                label="Website"
                name="website"
                type="url"
                value={profile.website}
                onChange={onChange}
                disabled={!isEditing}
                isEditing={isEditing}
                placeholder="https://example.com"
            />
        </div>
    );
}

export default ProfessionalInfo;
