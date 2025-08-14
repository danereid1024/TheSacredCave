const equipSlot1 = $gameParty.leader().equips()[0]?.id;
const equipSlot2 = $gameParty.leader().equips()[1]?.id;
const pageup = Input.isPressed("pageup");
const pagedown = Input.isPressed("pagedown");
const x = $gamePlayer.x;
const y = $gamePlayer.y;
const faceDown = $gamePlayer.direction() === 2;
const faceLeft = $gamePlayer.direction() === 4;
const faceRight = $gamePlayer.direction() === 6;
const faceUp = $gamePlayer.direction() === 8;


function useSpringShoes() {
    //faceDown
    if ($gameMap.terrainTag(x, y + 1) === 1 && faceDown) {
      $gamePlayer.jump(0, 0);
      AudioManager.playSe({ name: "Jump1", volume: 90, pitch: 100, pan: 0 });
    } else if ($gameMap.terrainTag(x, y + 2) === 1 && faceDown) {
      $gamePlayer.jump(0, 1);
      AudioManager.playSe({ name: "Jump1", volume: 90, pitch: 100, pan: 0 });
    } else if (faceDown) {
      $gamePlayer.jump(0, 2);
      AudioManager.playSe({ name: "Jump1", volume: 90, pitch: 100, pan: 0 });
    }
    //faceLeft
    if ($gameMap.terrainTag(x - 1, y) === 1 && faceLeft) {
      $gamePlayer.jump(0, 0);
      AudioManager.playSe({ name: "Jump1", volume: 90, pitch: 100, pan: 0 });
    } else if ($gameMap.terrainTag(x - 2, y) === 1 && faceLeft) {
      $gamePlayer.jump(-1, 0);
      AudioManager.playSe({ name: "Jump1", volume: 90, pitch: 100, pan: 0 });
    } else if (faceLeft) {
      $gamePlayer.jump(-2, 0);
      AudioManager.playSe({ name: "Jump1", volume: 90, pitch: 100, pan: 0 });
    }
    //faceRight
    if ($gameMap.terrainTag(x + 1, y) === 1 && faceRight) {
      $gamePlayer.jump(0, 0);
      AudioManager.playSe({ name: "Jump1", volume: 90, pitch: 100, pan: 0 });
    } else if ($gameMap.terrainTag(x + 2, y) === 1 && faceRight) {
      $gamePlayer.jump(1, 0);
      AudioManager.playSe({ name: "Jump1", volume: 90, pitch: 100, pan: 0 });
    } else if (faceRight) {
      $gamePlayer.jump(2, 0);
      AudioManager.playSe({ name: "Jump1", volume: 90, pitch: 100, pan: 0 });
    }
    //faceUp
    if ($gameMap.terrainTag(x, y - 1) === 1 && faceUp) {
      $gamePlayer.jump(0, 0);
      AudioManager.playSe({ name: "Jump1", volume: 90, pitch: 100, pan: 0 });
    } else if ($gameMap.terrainTag(x, y - 2) === 1 && faceUp) {
      $gamePlayer.jump(0, -1);
      AudioManager.playSe({ name: "Jump1", volume: 90, pitch: 100, pan: 0 });
    } else if (faceUp) {
      $gamePlayer.jump(0, -2);
      AudioManager.playSe({ name: "Jump1", volume: 90, pitch: 100, pan: 0 });
    }
}

if (equipSlot1 === 7 && pageup) {
    useSpringShoes();
    this.wait(30);
}
