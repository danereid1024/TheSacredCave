$gameMessage.setChoices(["Normal", "Fast", "Very fast", "Nevermind"], 0, 3);
$gameMessage.setChoiceBackground(1);
$gameMessage.setChoicePositionType(1);
$gameMessage.setChoiceCallBack(n => {
    $gameVariables.setValue(5, n);
});
this.setWaitMode("message");

switch($gameVariables.value(1)) {
    case 0:
        $gamePlayer.setMoveSpeed(3);
        break;
    case 2:
        $gamePlayer.setMoveSpeed(4);
        break;
    case 3:
        $gamePlayer.setMoveSpeed(5);
        break;
    case 4:
        break;
}