const handleSignIn = (User, bcrypt) => (req,res) => {
    const {username, password} = req.body;
        User.findOne({username:username})
        .then(data => {
            const isValid = bcrypt.compareSync(password, data.password);
            if(isValid){
                 return res.json(data)
            }
            else 
                return res.status(400).json('wrong credentials')
        })
        .catch( _ => res.status(400).json('wrong credentials'))
    
        
}   

module.exports = {
    handleSignIn
}