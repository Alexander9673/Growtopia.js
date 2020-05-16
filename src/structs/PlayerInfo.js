class PlayerInfo {
	#main;
	constructor(main) {
		this.#main = main;
		this.netID = 0;
		this.tankIDName = "";
		this.tankIDPass = "";
		this.requestedName = "";
		this.displayName = "";
		this.rawName = "";
		this.properName = "";
		this.country = "";
		this.email = "";
		this.currentWorld = "EXIT";
		this.x = 0;
		this.y = 0;
		this.x1 = 0;
		this.y1 = 0;
		this.ip = "";
		this.mac = "";
		this.platformID = 0;
		this.player_age = "";
		this.game_version = "";
		this.isGuest = false;
		this.permissions = 0;
		this.roles = [];
		this.temp = {
			peerid: "",
			MovementCount: 0
		};

		this.states = [];
	}

	addState(state) {
		if (!this.states.includes(state))
			this.states.push(state);

		this.#main.players.set(this.temp.peerid, this)
	}

	getState() {
		let state = 0;

		state |= this.states.includes('canWalkInBlocks') << 0;
		state |= this.states.includes('canDoubleJump') << 1;
		state |= this.states.includes('isInvis') << 2;

		return state;
	}
};

module.exports = PlayerInfo;