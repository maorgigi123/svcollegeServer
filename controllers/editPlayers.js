const EditPlayers = (User) => (req,res) => {
    const {username , player } = req.body;
    console.log(username, player)
    User.findOne({username:username}).then(user =>{
        if(!user)
            res.status(400).json('user not found')
        let playerID = 0
        user.players.filter((user,id) => user.id === player._id && (playerID = id))
        user.players[playerID] = player;
        user.save();
        res.json(user)
    })

    
}

module.exports = EditPlayers