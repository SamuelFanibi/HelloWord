import FormField from './FormField';
import './AddressInfo.css';

function AddressInfo({ profile, isEditing, onChange }) {
    return (
        <div className="profile-section">
            <h3>Address</h3>
            <FormField
                label="Address"
                name="address.street"
                type="text"
                value={profile.address.street}
                onChange={onChange}
                disabled={!isEditing}
                isEditing={isEditing}
                placeholder="123 Samuel Street"
            />
            
            <FormField
                label="Suite/Apt"
                name="address.suite"
                type="text"
                value={profile.address.suite}
                onChange={onChange}
                disabled={!isEditing}
                isEditing={isEditing}
                placeholder="Suite 100"
            />
            
            <div className="form-row">
                <FormField
                    label="City"
                    name="address.city"
                    type="text"
                    value={profile.address.city}
                    onChange={onChange}
                    disabled={!isEditing}
                    isEditing={isEditing}
                    placeholder="New York"
                />
                
                <FormField
                    label="ZIP Code"
                    name="address.zipcode"
                    type="text"
                    value={profile.address.zipcode}
                    onChange={onChange}
                    disabled={!isEditing}
                    isEditing={isEditing}
                    placeholder="10001"
                />
            </div>
        </div>
    );
}

export default AddressInfo;
