const handleAddPlayer = (User) => async(req,res) => {
    const { username, player } = req.body;
    // TO DO : get the data of the player and update it
    User.findOne({username:username}).then(user => {
        if(!user)
            res.status(400).json('user not found')
        user.players =  [...user.players,player];  
        user.save(); 
        res.json(user)
    })
    .catch( _ => res.status(400).json('user not found'))
}

module.exports = handleAddPlayer;