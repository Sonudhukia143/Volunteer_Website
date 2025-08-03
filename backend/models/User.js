import mongoose from "mongoose";
import Joi from "joi";

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        unique: true
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
    },
    country: {
        type: String,
        enum: ['Canada', 'Mexico', 'United States']
    },
    Address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zip: {
        type: Number
    },
    registeredAt: {
        type:Date,
        default:Date.now
    }
});


const User = mongoose.model("Registers", UserSchema);

const validateUser = (user) => {
    const schema = Joi.object({
        firstname: Joi.required(),
        lastname: Joi.required(),
        email: Joi.required(),
        country: Joi.required(),
        Address: Joi.required(),
        city: Joi.required(),
        state: Joi.required(),
        zip: Joi.required()
    });
    return schema.validate(user);
};

export { User, validateUser };