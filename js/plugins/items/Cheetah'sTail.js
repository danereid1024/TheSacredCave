const equipSlot1 = $gameParty.leader().equips()[0]?.id;
const equipSlot2 = $gameParty.leader().equips()[1]?.id;
const pageup = Input.isPressed("pageup");
const pagedown = Input.isPressed("pagedown");

$gameMessage.setChoices(["Normal", "Fast", "Very fast", "Nevermind"], 0, 3);
$gameMessage.setChoiceBackground(1);
$gameMessage.setChoicePositionType(1);
$gameMessage.setChoiceCallBack((n) => {
  $gameVariables.setValue(5, n);
});
this.setWaitMode("message");

switch ($gameVariables.value(5)) {
  case 0:
    $gamePlayer.setMoveSpeed(4);
    break;
  case 1:
    $gamePlayer.setMoveSpeed(5);
    break;
  case 2:
    $gamePlayer.setMoveSpeed(6);
    break;
    default:
      $gamePlayer.setMoveSpeed(4);
    break;
}
