const equipSlot1 = $gameParty.leader().equips()[0]?.id;
const equipSlot2 = $gameParty.leader().equips()[1]?.id;
const pageup = Input.isPressed("pageup");
const pagedown = Input.isPressed("pagedown");
const sacredStaff = 11;
let maps = [];


//Transfers to each cavern
if ($gameVariables.value(6) === 0) {
  maps.push("Rock Cavern");
}
if ($gameVariables.value(6) === 1) {
    maps.push("Steel Cavern");
}
if ($gameVariables.value(6) === 2) {
    maps.push("Fire Cavern");
}
if ($gameVariables.value(6) === 3) {
    maps.push("Water Cavern")
}
if ($gameVariables.value(6) === 4) {
    maps.push("Grass Cavern");
}
if ($gameVariables.value(6) === 5) {
    maps.push("Gemini Cavern");
}
if ($gameVariables.value(6) === 6) {
    maps.push("In Body Cavern");
}
if ($gameVariables.value(6) === 7) {
    maps,push("Demonic Cavern");
}

maps = [];
$gameMessage.setChoices(maps, 0, -1);
$gameMessage.setChoiceCallback((n) => {
  $gameVariables.setValue(7, n);
});
this.setWaitMode("message");

if (equipSlot1 === sacredStaff && pageup) {
switch ($gameVariables.value(7)) {
  case 0:
    $gameMessage.add("You selected 'Rock Cavern'");
    break;
  case 1:
    $gameMessage.add("You selected 'Steel Cavern'");
    break;
  case 2:
    $gameMessage.add("You selected 'Lava Cavern'");
    break;
  case 3:
    $gameMessage.add("You've selected 'Ice Cavern'");
    break;
  case 4:
    $gameMessage.add("You've selected 'Grass Cavern'");
    break;
  case 5:
    $gameMessage.add("You've selected 'Gemini Cavern'");
      break;
  case 6:
    $gameMessage.add("You've selected 'In Body Cavern'");
    break;
  case 7:
    $gameMessage.add("You've selected 'Demonic Cavern'");
    break;  
    }
this.setWaitMode("message");
}