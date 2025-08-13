//=============================================================================
// RPG Maker MZ - Game HUD
//=============================================================================
/*:
* @target MZ
* @plugindesc Displays player's health and items on the screen
* @author Dane Reid
*
* @help GameHUD.js
*
* This plugin shows the player's health on the screen during gameplay.
* It shows their current health and max health. This also shows the
* items the player has equiped.
*
* No parameters are needed for this plugin.
*/
(() => {
//=============================================================================
// Player Health
//=============================================================================
    class HealthWindow extends Window_Base {
        constructor(rect) {
            super(rect);
            this.refresh();
        }

        refresh() {
            this.contents.clear();
            this.drawText("HP: " + $gameParty.leader().hp + "/" + $gameParty.leader().mhp, 0, 0, this.contentsWidth(), 'center');
        }

        // Update the window contents
        update() {
            super.update();
            if (this.contents) {
                this.refresh();
            }
        }
    }

    // Add the window to the scene
    const _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
    Scene_Map.prototype.createAllWindows = function() {
        _Scene_Map_createAllWindows.call(this);
        this.createHealthWindow();
    };

    

    Scene_Map.prototype.createHealthWindow = function() {
        const rect = new Rectangle(0, 0, 160, 60);
        this._healthWindow = new HealthWindow(rect);
        this.addWindow(this._healthWindow);
    };

//=============================================================================
// Item One Window
//=============================================================================
    class ItemSlotOne extends Window_Base {
        constructor(rect) {
            super(rect);
            this.refresh();
            
        }

        refresh() {
            let weaponId = $gameParty.leader().equips()[0]?.id;
            this.contents.clear();
            if (weaponId) {
                const weapon = $dataWeapons[weaponId];
                this.drawText(weapon.name, 0, 0, this.contentsWidth(), 'center');
            }
            
        }

        update() {
            super.update();
            if (this.contents) {
                this.refresh();
            }
        }
    }

    const ItemSlotOne_Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
    Scene_Map.prototype.createAllWindows = function() {
        ItemSlotOne_Scene_Map_createAllWindows.call(this);
            this.createItemSlotOneWindow();
        };

        Scene_Map.prototype.createItemSlotOneWindow = function() {
            const screenWidth = Graphics.width;
            const rect = new Rectangle(screenWidth - 329, 0, 160, 60);
            this._itemSlotOne = new ItemSlotOne(rect);
            this.addWindow(this._itemSlotOne);
        };

//=============================================================================
// Item Two Window
//=============================================================================
        class ItemSlotTwo extends Window_Base {
            constructor(rect) {
                super(rect);
                this.refresh();
                
            }
    
            refresh() {
                let weaponId = $gameParty.leader().equips()[1]?.id;
                this.contents.clear();
                if (weaponId) {
                    const weapon = $dataWeapons[weaponId];
                    this.drawText(weapon.name, 0, 0, this.contentsWidth(), 'center');
                }
                
            }
    
            update() {
                super.update();
                if (this.contents) {
                    this.refresh();
                }
            }
        }
    
        const ItemSlotTwo_Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
        Scene_Map.prototype.createAllWindows = function() {
        ItemSlotTwo_Scene_Map_createAllWindows.call(this);
            this.createItemSlotTwoWindow();
        };

        Scene_Map.prototype.createItemSlotTwoWindow = function() {
            const screenWidth = Graphics.width;
            const rect = new Rectangle(screenWidth - 168, 0, 160, 60);
            this._itemSlotTwo = new ItemSlotTwo(rect);
            this.addWindow(this._itemSlotTwo);
        };
//=============================================================================
// Remove Hamburger Menu
//=============================================================================

        Scene_MenuBase.prototype.createButtons = function() {
            // if (ConfigManager.touchUI) { // Edit
                // if (this.needsCancelButton()) {
                    // this.createCancelButton();
                // }
                // if (this.needsPageButtons()) {
                    // this.createPageButtons();
                // }
            // }
        };
        
        Scene_Map.prototype.createButtons = function() {
            // if (ConfigManager.touchUI) { // Edit
                // this.createMenuButton();
            // }
        };
        
        Scene_Battle.prototype.createButtons = function() {
            // if (ConfigManager.touchUI) { // Edit
                // this.createCancelButton();
            // }
        };

        
})();
