import { User, validateUser } from "../models/User.js";

const RegisterCn = async (req, res) => {
    const { error } = validateUser(JSON.parse(req.body));
    if (error) return res.status(300).json({ "message": "Credentials are not valid" , "err":error.message});

    const {
        firstname,
        lastname,
        email,
        country,
        Address,
        city,
        state,
        zip
    } =
    JSON.parse(req.body);

    try {
        const account = await User.findOne({ firstname });
        if (account) return res.status(400).json({ message: 'FirstName already in existence' });

        const user = new User({
            firstname,
            lastname,
            email,
            country,
            Address,
            city,
            state,
            zip
        });
        if(!user) return res.status(404).json({message:"Error in Submitting User"});
        await user.save();

        return res.status(200).json({ message: 'Successfully Registered' ,user});
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
};

export default RegisterCn;