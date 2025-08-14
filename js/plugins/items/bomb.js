const bombEvent = {
  id: 8,
  eventId: $gameMap.event(23),
  x: $gameMap.event(23).x,
  y: $gameMap.event(23).y,
};
const equipSlot1 = $gameParty.leader().equips()[0]?.id;
const equipSlot2 = $gameParty.leader().equips()[1]?.id;
const pageup = Input.isPressed("pageup");
const pagedown = Input.isPressed("pagedown");

function useBomb() {
    bombEvent.eventId.locate($gamePlayer.x, $gamePlayer.y);   
}

  if (equipSlot1 === bombEvent.id && pageup) {
    useBomb();
    this.wait(60);
    };