import { User } from "../models/User.js";

const AdminCn = async (req, res) => {
    try {
        const {username,password} = JSON.parse(req.body);
        if(!username || !password) return res.status(404).json({message:"Input fields cannot be empty"})
        if(username != "admin" || password != "admin") return res.status(401).json({message:"Unauthorized Admin Credentials."});

        const users = await User.find();

        return res.status(200).json({ message: 'Successfully LoggedIn As Admin', users });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
};

export default AdminCn;