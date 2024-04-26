
const handleRegister = (User, bcrypt) => async(req,res) => {
    let {username, password, teamName} = req.body;
    // ------- check uername -------
    const have_user = await User.exists({ username: username})
    if(have_user)
        return res.status(404).json('this username is alerdy in used')

    const bcryptPassword =  bcrypt.hashSync(password);
    const user = new User({
        username:username,
        password:bcryptPassword,
        teamName:teamName 
    })
    user.save().then((user) => res.json(user));
}


module.exports = handleRegister;