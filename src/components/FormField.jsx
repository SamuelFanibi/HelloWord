import './FormField.css';

function FormField({ 
    label, 
    name, 
    type = 'text', 
    value, 
    onChange, 
    disabled = false, 
    isEditing = false,
    placeholder = '',
    required = false
}) {
    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}
                {required && <span className="required">*</span>}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                placeholder={placeholder}
                className={isEditing ? 'editable' : 'readonly'}
                required={required}
            />
        </div>
    );
}

export default FormField;
