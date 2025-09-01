//=============================================================================
// Candle Plugin
// Candle.js
//=============================================================================
const darknessOn = $gameSwitches.value(2);
const lanternInUse = $gameSwitches.value(4);
const equipSlot1 = $gameParty.leader().equips()[0]?.id;
const equipSlot2 = $gameParty.leader().equips()[1]?.id;
const pageup = Input.isPressed("pageup");
const pagedown = Input.isPressed("pagedown");
const candleId = 1;

function activateLantern() {
    if (darknessOn === true) {
      if (lanternInUse === false) {
        AudioManager.playSe({ name: "Fire1", volume: 90, pitch: 100, pan: 0 });
        $gameScreen.startTint([-88, -88, -88, 0], 60);
        $gameSwitches.setValue(4, true);
      } else {
        $gameMessage.add("Lantern is already lit.");
      }
    } else {
      $gameMessage.add("You don't need to use a lantern right now.");
    }
      }
if (equipSlot1 === candleId && pageup) {
        activateLantern();
        this.wait(60);
}
if (equipSlot2 === candleId && pagedown) {
      activateLantern();
      this.wait(60);
}
this.setWaitMode("message");
//=============================================================================
$gameSwitches.setValue(2, false);
$gameSwitches.setValue(3, false);
$gameSwitches.startTint([0, 0, 0, 0], 60);


