//=============================================================================
// RPG Maker MZ - 
//=============================================================================
/*:
*  @target MZ
* @plugindesc 
* @author Dane Reid
*
* @help
*/
(() => {

// Replace 'sourceMapId' and 'targetMapId' with your actual map IDs
// Replace 'eventId' with the ID of the event you want to transfer

var sourceMapId = 1;  // Replace with the actual source map ID
var targetMapId = $dataVariables.value(17);  // Replace with the actual target map ID
var eventId = 37;      // Replace with the actual event ID

// Step 1: Get event data from the source map
var eventData = $dataMapInfos[sourceMapId].events[eventId];

// Step 2: Set the target map ID
// (Note: RPG Maker MZ doesn't have a direct method to add an event to a different map, so you'll need a custom solution)

// Step 3: Optionally, you can adjust the position of the new event
var newX = $gameVariables.value(1);  // Replace with the desired X coordinate
var newY = $gameVariables.value(2);  // Replace with the desired Y coordinate

// Step 4: (Optional) Create a custom function to add an event to a different map
function addEventToMap(eventData, targetMapId, x, y) {
    var newEvent = JsonEx.makeDeepCopy(eventData);
    newEvent.id = $dataMap.events.length;
    newEvent.x = x;
    newEvent.y = y;
    $dataMap.events.push(newEvent);
}

// Step 5: Call the custom function to add the event to the target map
addEventToMap(eventData, targetMapId, newX, newY);



})();
