const Store = require('electron-store')

class GameStorage extends Store{
    constructor(settings) {
        super(settings);
        this.games = this.get('games') || []
    }

    savesGames(){
        this.set('games', this.games)
        return this;
    }

    getGames(){
        this.games = this.get('games') || []
        return this
    }

    addGame(game){
        this.games = [ ...this.games, game]

        return this.savesGames()
    }

    deleteGame(game){
        this.games = this.games.filter(t => t !== game)
        return this.savesGames()
    }
}

module.exports = GameStorage