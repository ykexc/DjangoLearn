class AcGame {
    constructor(id) {
        this.id = id
        this.$ac_game = $('#' + id)
        this.menu = new AcGameMenu(this)
        this.playground = new AcGamePlayGround(this)
        this.start()
    }

    start(){

    }
}
