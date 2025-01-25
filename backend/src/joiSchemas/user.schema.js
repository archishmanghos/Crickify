import Joi from 'joi'

const register = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: true } })
        .required(),

    password: Joi.string()
        .min(8)
        .max(32)
        .pattern(/[A-Z]/, 'at least one uppercase letter')
        .pattern(/[a-z]/, 'at least one lowercase letter')
        .pattern(/[0-9]/, 'at least one digit')
        .pattern(/[!@#$%^&*(),.?":{}|<>]/, 'at least one special character')
        .required(),

    firstName: Joi.string()
        .min(2)
        .max(50)
        .pattern(/^[A-Za-z\s'-]+$/)
        .required()
        .messages({
            'string.base': 'First name must be a string.',
            'string.empty': 'First name is required.',
            'string.min': 'First name must be at least 2 characters long.',
            'string.max': 'First name cannot exceed 50 characters.',
            'string.pattern.base':
                'First name can only contain letters, spaces, apostrophes, and hyphens.',
            'any.required': 'First name is required.'
        }),

    lastName: Joi.string()
        .min(2)
        .max(50)
        .pattern(/^[A-Za-z\s'-]+$/)
        .optional()
        .messages({
            'string.base': 'Last name must be a string.',
            'string.min': 'Last name must be at least 2 characters long.',
            'string.max': 'Last name cannot exceed 50 characters.',
            'string.pattern.base':
                'Last name can only contain letters, spaces, apostrophes, and hyphens.'
        }),

    userName: Joi.string().alphanum().min(3).max(30).optional().messages({
        'string.base': 'Username must be a string.',
        'string.alphanum': 'Username can only contain letters and numbers.',
        'string.min': 'Username must be at least 3 characters long.',
        'string.max': 'Username cannot exceed 30 characters.'
    }),

    dob: Joi.date().less('now').optional().messages({
        'date.base': 'Date of birth must be a valid date.',
        'date.less': 'Date of birth must be in the past.'
    }),

    profilePic: Joi.string().uri().optional().messages({
        'string.base': 'Profile picture must be a string.',
        'string.uri': 'Profile picture must be a valid URL.'
    }),

    gender: Joi.string()
        .valid('male', 'female', 'other', 'prefer not to say')
        .optional()
        .messages({
            'string.base': 'Gender must be a string.',
            'any.only':
                'Gender must be one of [male, female, other, prefer not to say].'
        }),

    contactNumber: Joi.string()
        .pattern(/^\+?[1-9]\d{1,14}$/) // E.164 format
        .optional()
        .messages({
            'string.base': 'Contact number must be a string.',
            'string.pattern.base':
                'Contact number must be a valid phone number in E.164 format.'
        })
})

const UserSchema = { register }

export default UserSchema
