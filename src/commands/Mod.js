module.exports = {
  name: 'mod',
  requiredPerms: 2,
  run: function(main, arguments, peerid, p) {
    let player = main.players.get(peerid);
    player.addState('canWalkInBlocks');

    main.Packet.sendState(peerid);
  }
};