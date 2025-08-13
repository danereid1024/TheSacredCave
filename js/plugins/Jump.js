//=============================================================================
// RPG Maker MZ - Jump
//=============================================================================

/*:
 * @target MZ
 * @plugindesc This plugin allows the player to jump.
 * @author DevByDane
 *
 * @help Jump.js
 * Need to create a way to disable it until the player gets the ability to
 * jump or when they receive an item to allow them to do so.
 *
 * EDIT: I figured it out!
 */
(() => {

    Game_Player.prototype.jumpTile = function(x, y) {
        const regionId = $gameMap.regionId(x, y);
        const forbiddenRegionIds = [1]; // Add the forbidden region IDs here
    
        // Check if the region ID is present in the forbidden region IDs array
        if (forbiddenRegionIds.includes(regionId)) {
            return false; // Player cannot jump to a forbidden region
        }
    
        // Check if any adjacent tiles are forbidden regions
        const adjacentTiles = [
            { dx: 0, dy: 1 }, // Tile above
            { dx: 0, dy: -1 }, // Tile below
            { dx: -1, dy: 0 }, // Tile to the left
            { dx: 1, dy: 0 } // Tile to the right
        ];
        
    
        for (const tile of adjacentTiles) {
            const adjacentRegionId = $gameMap.regionId(x + tile.dx, y + tile.dy);
            if (forbiddenRegionIds.includes(adjacentRegionId)) {
                return false; // Player cannot jump if adjacent tile is a forbidden region
            }
        }
    
        return true; // Player can jump to the tile
    };

    Game_Player.prototype.triggerTouchAction = function() {
        if ($gameParty.leader().equips()[1]?.id === 7 && Input.isTriggered("pagedown")) {
            const x1 = this.x;
            const y1 = this.y;
            const x2 = $gameMap.roundXWithDirection(x1, this.direction());
            const y2 = $gameMap.roundYWithDirection(y1, this.direction());

            if (this.jumpTile(x1, y1)) {
                $gamePlayer.jump(2 * (x2 - x1), 2 * (y2 - y1));
                AudioManager.playSe({ name: 'Jump1', volume: 90, pitch: 100, pan: 0 }); // plays jump SE
            } else {
                $gamePlayer.jump(0, 0); // Prevent jumping in forbidden regions
                AudioManager.playSe({ name: 'Jump1', volume: 90, pitch: 100, pan: 0 });
            }
        
        return false;
    } else if ($gameParty.leader().equips()[0]?.id === 7 && Input.isTriggered("pageup")) {

        const x1 = this.x;
            const y1 = this.y;
            const x2 = $gameMap.roundXWithDirection(x1, this.direction());
            const y2 = $gameMap.roundYWithDirection(y1, this.direction());

            if (this.jumpTile(x1, y1)) {
                $gamePlayer.jump(2 * (x2 - x1), 2 * (y2 - y1));
                AudioManager.playSe({ name: 'Jump1', volume: 90, pitch: 100, pan: 0 }); // plays jump SE
            } else {
                $gamePlayer.jump(0, 0); // Prevent jumping in forbidden regions
                AudioManager.playSe({ name: 'Jump1', volume: 90, pitch: 100, pan: 0 });
            }
        
        return false;
    };
};
    
})();