const hammerEvent = $gameMap.event(9);
const equipSlot1 = $gameParty.leader().equips()[0]?.id;
const equipSlot2 = $gameParty.leader().equips()[1]?.id;
const pageup = Input.isPressed("pageup");
const pagedown = Input.isPressed("pagedown");
const x = $gamePlayer.x;
const y = $gamePlayer.y;
function useHammer() {
switch ($gamePlayer.direction()) {
  case 2: // Down
  hammerEvent.locate(x, y + 1);
    break;
  case 4: // Left
    hammerEvent.locate(x - 1, y);
    break;
  case 6: // Right
   hammerEvent.locate(x + 1, y);
    break;
  case 8: // Up
    hammerEvent.locate(x, y - 1);
    break;
  default:
}
}
  if (equipSlot1 === 4 && pageup) {
    useHammer();
  }

  if ($gameMap.event(this.eventId()).x === hammerEvent.x && $gameMap.event(this.eventId()).y === hammerEvent.y) {
    AudioManager.playSe({
      name: "Earth1",
      volume: 90,
      pitch: 100,
    });
    $gameSelfSwitches.setValue([this._mapId, this.eventId(), "A"], true);
    this.wait(60);
  }