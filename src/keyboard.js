const kb  = require('./key_board')

module.exports={
    home:[
        [kb.home.films,kb.home.cinema],
        [kb.home.favorite]
    ],
    films:[
        [kb.films.action,kb.films.comedy],
        [kb.films.random],
        [kb.back]
    ]
}