//=============================================================================
// Bottle (Empty)

const { use } = require("react");

//=============================================================================
const terrainX = $gamePlayer.x;
const terrainY = $gamePlayer.y;
const terrainYDown = $gamePlayer.y + 1;
const terrainYUp = $gamePlayer.y - 1;
const terrainXLeft = $gamePlayer.x - 1;
const terrainXRight = $gamePlayer.x + 1;

function useBottle() {
  AudioManager.playSe({ name: "Water1", volume: 90, pitch: 100, pan: 0 });
  $gameParty.loseItem($dataWeapons[2], 1, true);
  $gameParty.gainItem($dataWeapons[3], 1);
}

if ($gameParty.leader().equips()[0]?.id === 2 && Input.isPressed("pageup")) {
  if (
    $gameMap.terrainTag(terrainX, terrainYDown) === 1 &&
    $gamePlayer.direction() === 2
  ) {
    useBottle();
    $gameActors.actor(1).changeEquip(0, $dataWeapons[3]);
    this.wait(60);
  }
  if (
    $gameMap.terrainTag(terrainXLeft, terrainY) === 1 &&
    $gamePlayer.direction() === 4
  ) {
    useBottle();
    $gameActors.actor(1).changeEquip(0, $dataWeapons[3]);
    this.wait(60);
  }
  if (
    $gameMap.terrainTag(terrainXRight, terrainY) === 1 &&
    $gamePlayer.direction() === 6
  ) {
    useBottle();
    $gameActors.actor(1).changeEquip(0, $dataWeapons[3]);
    this.wait(60);
  }
  if (
    $gameMap.terrainTag(terrainX, terrainYUp) === 1 &&
    $gamePlayer.direction() === 8
  ) {
    useBottle();
    $gameActors.actor(1).changeEquip(0, $dataWeapons[3]);
    this.wait(60);
  }
}
if ($gameParty.leader().equips()[1]?.id === 2 && Input.isPressed("pagedown")) {
  if (
    $gameMap.terrainTag(terrainX, terrainYDown) === 1 &&
    $gamePlayer.direction() === 2
  ) {
    useBottle();
    $gameActors.actor(1).changeEquip(1, $dataWeapons[3]);
    this.wait(60);
  }
  if (
    $gameMap.terrainTag(terrainXLeft, terrainY) === 1 &&
    $gamePlayer.direction() === 4
  ) {
    useBottle();
    $gameActors.actor(1).changeEquip(1, $dataWeapons[3]);
    this.wait(60);
  }
  if (
    $gameMap.terrainTag(terrainXRight, terrainY) === 1 &&
    $gamePlayer.direction() === 6
  ) {
    useBottle();
    $gameActors.actor(1).changeEquip(1, $dataWeapons[3]);
    this.wait(60);
  }
  if (
    $gameMap.terrainTag(terrainX, terrainYUp) === 1 &&
    $gamePlayer.direction() === 8
  ) {
    useBottle();
    $gameActors.actor(1).changeEquip(1, $dataWeapons[3]);
    this.wait(60);
  }
}
//=============================================================================
// Bottle (Full)
//=============================================================================
const x = $gamePlayer.x;
const y = $gamePlayer.y;

if ($gameMap.regionId(x, y) === 2 && $gameParty.leader().equips()[0]?.id === 3 && Input.isPressed("pageup")) {
    AudioManager.playSe({ name: "Water1", volume: 90, pitch: 100, pan: 0 });
    $gameParty.loseItem($dataWeapons[3], 1, true);
    $gameParty.gainItem($dataWeapons[2], 1);
    $gameActors.actor(1).changeEquip(0, $dataWeapons[2]);
    this.wait(60);
}


function useBottleFull() {
    if ($gameMap.regionId($gamePlayer.x, $gamePlayer.y) === 2) {
    AudioManager.playSe({ name: "Water1", volume: 90, pitch: 100, pan: 0 });
    $gameParty.loseItem($dataWeapons[3], 1, true);
    $gameParty.gainItem($dataWeapons[2], 1);
    $gameSwitches.setValue(7, true);
    $gameSwitches.setValue(9, true);
    }
}

if ($gameParty.leader().equips()[0]?.id === 3 && Input.isPressed("pageup")) {
    useBottleFull();
    $gameActors.actor(1).changeEquip(0, $dataWeapons[2]);
    this.wait(60);
}
if ($gameParty.leader().equips()[1]?.id === 3 && Input.isPressed("pagedown")) {
  useBottleFull();
  $gameActors.actor(1).changeEquip(1, $dataWeapons[2]);
  this.wait(60);
}