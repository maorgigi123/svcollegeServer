const showAllPlayers = (User) => (req,res) => {
    const { username } = req.body;
    User.findOne({username:username}).then(user => {
        if(!user)
            res.status(400).json('something go wrong try again');

        return res.json(user.players)
    }).catch( _ => res.status(400).json('something go wrong try again'))
}
module.exports = showAllPlayers;