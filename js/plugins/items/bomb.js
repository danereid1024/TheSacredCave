const bombEvent = {
  id: 8,
  bombId: $gameMap.event(23),
  radius1Id: $gameMap.event(15),
  radius2Id: $gameMap.event(16),
  radius3Id: $gameMap.event(17),
  radius4Id: $gameMap.event(18),
  radius5Id: $gameMap.event(19),
  radius6Id: $gameMap.event(20),
  radius7Id: $gameMap.event(21),
  radius8Id: $gameMap.event(22)
};
const equipSlot1 = $gameParty.leader().equips()[0]?.id;
const equipSlot2 = $gameParty.leader().equips()[1]?.id;
const pageup = Input.isPressed("pageup");
const pagedown = Input.isPressed("pagedown");

function useBomb() {
    function radius() {
            bombEvent.radius1Id.locate(
              bombEvent.bombId.x - 1,
              bombEvent.bombId.y - 1
            );
            bombEvent.radius2Id.locate(
              bombEvent.bombId.x,
              bombEvent.bombId.y - 1
            );
            bombEvent.radius3Id.locate(
              bombEvent.bombId.x + 1,
              bombEvent.bombId.y - 1
            );
            bombEvent.radius4Id.locate(
              bombEvent.bombId.x - 1,
              bombEvent.bombId.y
            );
            bombEvent.radius5Id.locate(
              bombEvent.bombId.x + 1,
              bombEvent.bombId.y
            );
            bombEvent.radius6Id.locate(
              bombEvent.bombId.x - 1,
              bombEvent.bombId.y + 1
            );
            bombEvent.radius7Id.locate(
              bombEvent.bombId.x,
              bombEvent.bombId.y + 1
            );
            bombEvent.radius8Id.locate(
              bombEvent.bombId.x + 1,
              bombEvent.bombId.y + 1
            );
    }
    switch ($gamePlayer.direction()) {
        case 2: // Down
    bombEvent.bombId.locate($gamePlayer.x, $gamePlayer.y + 1);
    radius();
    break;
        case 4: // Left
    bombEvent.bombId.locate($gamePlayer.x - 1, $gamePlayer.y);
    radius();
    break;
        case 6: // Right
    bombEvent.bombId.locate($gamePlayer.x + 1, $gamePlayer.y);
    radius();
    break;
        case 8: // Up
    bombEvent.bombId.locate($gamePlayer.x, $gamePlayer.y - 1);
    radius();
    break;
}
}

  if (equipSlot1 === bombEvent.id && pageup) {
    useBomb();
    this.wait(180);
var self = interpreter;
self._character = character;
self._character.requestAnimation(3);
self.setWaitMode("animation");
    };