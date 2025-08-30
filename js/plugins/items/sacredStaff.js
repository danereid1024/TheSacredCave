const equipSlot1 = $gameParty.leader().equips()[0]?.id;
const equipSlot2 = $gameParty.leader().equips()[1]?.id;
const pageup = Input.isPressed("pageup");
const pagedown = Input.isPressed("pagedown");
let maps = [];

if ($gameVariables.value(6) === 1) {
  maps.push("Rock Cavern");
}
if ($gameVariables.value(6) === 2) {
    maps.push("Steel Cavern");
}
if ($gameVariables.value(6) === 3) {
    maps.push("Fire Cavern");
}
if ($gameVariables.value(6) === 4) {
    maps.push("Water Cavern")
}
if ($gameVariables.value(6) === 5) {
    maps.push("Grass Cavern");
}
if ($gameVariables.value(6) === 6) {
    maps.push("Gemini Cavern");
}
if ($gameVariables.value(6) === 7) {
    maps.push("In Body Cavern");
}
if ($gameVariables.value(6) === 8) {
    maps,push("Demonic Cavern");
}