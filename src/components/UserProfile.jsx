import { useState, useEffect } from 'react';
import './UserProfile.css';
import ProfileHeader from './ProfileHeader';
import PersonalInfo from './PersonalInfo';
import ProfessionalInfo from './ProfessionalInfo';
import AddressInfo from './AddressInfo';
import LoadingSpinner from './LoadingSpinner';
import Header from './header';
import Layout from './Layout';

function UserProfile() {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        username: '',
        phone: '',
        website: '',
        company: '',
        address: {
            street: '',
            city: '',
            zipcode: '',
            suite: ''
        }
    });
    
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Load profile data on component mount
    useEffect(() => {
        // Simulate loading user profile data
        // In a real app, this would fetch from an API
        const loadProfile = () => {
            setIsLoading(true);
            // Simulate API call delay
            setTimeout(() => {
                setProfile({
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    username: 'johndoe',
                    phone: '+1 (555) 123-4567',
                    website: 'johndoe.com',
                    company: 'Tech Solutions Inc.',
                    address: {
                        street: '123 Main Street',
                        city: 'New York',
                        zipcode: '10001',
                        suite: 'Suite 100'
                    }
                });
                setIsLoading(false);
            }, 1000);
        };

        loadProfile();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setProfile(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value
                }
            }));
        } else {
            setProfile(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSave = () => {
        // In a real app, this would save to an API
        console.log('Saving profile:', profile);
        setIsEditing(false);
        // Show success message
        alert('Profile saved successfully!');
    };

    const handleCancel = () => {
        // Reset to original values
        setProfile({
            name: 'John Doe',
            email: 'john.doe@example.com',
            username: 'johndoe',
            phone: '+1 (555) 123-4567',
            website: 'johndoe.com',
            company: 'Tech Solutions Inc.',
            address: {
                street: '123 Main Street',
                city: 'New York',
                zipcode: '10001',
                suite: 'Suite 100'
            }
        });
        setIsEditing(false);
    };

    if (isLoading) {
        return (
            <div className="profile-container">
                <LoadingSpinner message="Loading profile..." />
            </div>
        );
    }

    return (
        <>
    <Layout>
        <div className="profile-container">
            <ProfileHeader
                isEditing={isEditing}
                onEdit={() => setIsEditing(true)}
                onSave={handleSave}
                onCancel={handleCancel}
            />

            <div className="profile-content">
                <PersonalInfo
                    profile={profile}
                    isEditing={isEditing}
                    onChange={handleInputChange}
                />

                <ProfessionalInfo
                    profile={profile}
                    isEditing={isEditing}
                    onChange={handleInputChange}
                />

                <AddressInfo
                    profile={profile}
                    isEditing={isEditing}
                    onChange={handleInputChange}
                />
            </div>
        </div>
        </Layout>
        </>
        
    );
}

export default UserProfile;
