/*Tinkers Construct Mod*/ 
/*made by NESbeat & Minecraftmuse3*/ 

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
var GUI; 
var xGUI; 
var xCUI; 
var g = false; 
var gi = false; 
var exitNumber;
var fryingPanDmg;
var ready = false;
var mp = new android.media.MediaPlayer();
var worldLoaded = false;
var m1 = false;
var diary = false;
pageNum = 0;

//worldLoaded = ModPE.readData(Level.getWorldDir() +"Loaded");
//if(worldLoaded == false){
//Player.setInventorySlot(Player.getSelectedSlotId(), 410, 1, 0);
//worldLoaded = true;
//}


 ModPE.downloadFile = function(url, fileName) {
	var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/ModScript/Tinker's Construct/" + fileName);
	file.createNewFile();
	var fos = new java.io.FileOutputStream(file);
	var response = android.net.http.AndroidHttpClient.newInstance("ModPE.downloadFile()").execute(new org.apache.http.client.methods.HttpGet(url)).getEntity().writeTo(fos);
	fos.close();
};

/*
ModPE.downloadFile = function(filename,url){
	var file=new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/ModScript/Tinker's Construct/"+filename);
	file.createNewFile();
	var fos=new java.io.FileOutputStream(file);
	var response=android.net.http.AndroidHttpClient.newInstance("ModPE.downloadFile()").execute(new org.apache.http.client.methods.HttpGet(url)).getEntity().writeTo(fos);
	fos.close();
	};
*/

var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/ModScript/Tinker's Construct/";
if(!java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/ModScript/Tinker's Construct/book_bg.png").exists()){
	try{
		java.io.File(path).mkdirs();
		print("Please wait...downloading Sounds...");	
ModPE.downloadFile("http://imgur.com/Ifodcrj.png", "book_bg.png");
		print("Done!");
		}
	catch(err){
		print(err);
		}
	}

function leaveGame(){
if(m1 == true){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable(
			{
			run: function()
				{
					info.dismiss();
				}
			}));
m1=false;
}
if(diary == true){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable(
			{
			run: function()
				{
					info.dismiss();
				}
			}));
diary=false;
}
ready=false;
ModPE.saveData(Level.getWorldDir() +"Loaded", worldLoaded);
}
/*
function newLevel(){ 
clientMessage(ChatColor.GREEN + "Tinkers' Construct" + ChatColor.WHITE + " by" + ChatColor.RED + " minecraftmuse3" + ChatColor.WHITE + " &" + ChatColor.BLUE + " NESbeat"); 
ready=false;
addItemInventory(410, 1);
}

*/
/*Custom Blocks*/
Block.defineBlock(160, "Grout", ["grout", 0], 0, false);
Item.addShapedRecipe(160, 1, 0, ["cc ", "g  ", "   "], ["g", 13, 0, "c", 337, 0]);
Block.setDestroyTime(160, 1);
Player.addItemCreativeInv(160, 1);

//Removed Tool Forge, too buggy at the moment
/*
Block.defineBlock(255, "Tool Forge", [["iron_block",0], ["dragon_egg", 0],["iron_block",0], ["iron_block",0],["iron_block",0], ["iron_block",0]], false, 0);
Item.addShapedRecipe(255, 1, 0, ["ipi", "iwi", "i i"], ["i", 42, 0, "p", 496, 0, "w", 5, 0]);
Block.setDestroyTime(255, 3);
*/

Block.defineBlock(254, "Diamond Brick", ["brick_diamond", 0], 0, false); 
Block.setDestroyTime(254, 4); 
Player.addItemCreativeInv(254, 1);

Block.defineBlock(253, "Obsidian Brick", ["brick_obsidian", 0], 0, false); 
Block.setDestroyTime(253, 4); 
Player.addItemCreativeInv(253, 1);

Block.defineBlock(252, "Lapis Brick", ["brick_lapis", 0], 0, false); 
Block.setDestroyTime(252, 4); 
Player.addItemCreativeInv(252, 1);

Block.defineBlock(251, "Iron Brick", ["brick_iron", 0], 0, false); 
Block.setDestroyTime(251, 4); 
Player.addItemCreativeInv(251, 1);

Block.defineBlock(250, "Gold Brick", ["brick_gold", 0], 0, false); 
Block.setDestroyTime(250, 4); 
Player.addItemCreativeInv(250, 1);

Block.defineBlock(249, "Frying Pan", [["cauldron_inner",0], ["cauldron_top",0],["cauldron_inner",0], ["cauldron_inner",0],["cauldron_inner",0],["iron_block",0]]); 
Block.setDestroyTime(249, 2); 
Block.setShape(249, 0, 0, 0, 1, 4/16, 1);

Block.defineBlock(248, "Handle", [["cauldron_inner", 0], ["iron_block", 0],["iron_block", 0], ["iron_block", 0],["cauldron_inner", 0], ["cauldron_inner", 0]]); 
Block.setDestroyTime(248, 2); 
Block.setShape(248, 0, 0, 7/16, 1, 2/16, 9/16);

Block.defineBlock(222, "Seared Brick", ["seared_brick", 0]);
Block.setDestroyTime(222, 2); 
//Item.addShapedRecipe(222, 4, 0, ["ss ", "ss  ", "   "], ["s", 472, 0]);
//Item.addCraftRecipe(222, 4, 0, [472, 4, 0]);
Item.setCategory(222, 1);
Player.addItemCreativeInv(222, 1);

Block.defineBlock(236, "Fancy Obsidian Brick", ["brick_obsidian_fancy", 0], 0, false); 
Block.setDestroyTime(236, 4); 
Player.addItemCreativeInv(236, 1);

Block.defineBlock(244, "Fancy Lapis Brick", ["brick_lapis_fancy", 0], 0, false); 
Block.setDestroyTime(244, 4); 
Player.addItemCreativeInv(244, 1);

Block.defineBlock(235, "Fancy Iron Brick", ["brick_iron_fancy", 0], 0, false); 
Block.setDestroyTime(235, 4); 
Player.addItemCreativeInv(235, 1);

Block.defineBlock(242, "Fancy Gold Brick", ["brick_gold_fancy", 0], 0, false); 
Block.setDestroyTime(242, 4); 
Player.addItemCreativeInv(242, 1);

Block.defineBlock(241, "Fancy Diamond Brick", ["brick_diamond_fancy", 0], 0, false); 
Block.setDestroyTime(241, 4); 
Player.addItemCreativeInv(241, 1);

Block.defineBlock(240, "Netherrack Brick", ["brick_netherrack", 0], 0, false); 
Block.setDestroyTime(240, 4); 
Player.addItemCreativeInv(240, 1);

Block.defineBlock(239, "Fancy Netherrack Brick", ["brick_netherrack_fancy", 0], 0, false); 
Block.setDestroyTime(239, 4); 
Player.addItemCreativeInv(239, 1);

Block.defineBlock(238, "Clay Brick", ["brick_clay", 0], 0, false); 
Block.setDestroyTime(238, 4); 
Player.addItemCreativeInv(238, 1);

Block.defineBlock(237, "Fancy Clay Brick", ["brick_clay_fancy", 0], 0, false); 
Block.setDestroyTime(237, 4); 
Player.addItemCreativeInv(237, 1);

Block.defineBlock(235, "Slimy Blue Grass", [["dirt_slime_blue", 0], ["grass_slime_top", 0], ["grass_slime_side", 0], ["grass_slime_side", 0], ["grass_slime_side", 0], ["grass_slime_side", 0]], 0, false); 
Block.setDestroyTime(235, 0.25); 
Player.addItemCreativeInv(235, 1);

Block.defineBlock(234, "Slimy Blue Dirt", ["dirt_slime_blue", 0], 0, false); 
Block.setDestroyTime(234, 0.25); 
Player.addItemCreativeInv(234, 1);

Block.defineBlock(233, "Seared Tank Full", [["seared_brick", 0], ["seared_brick", 0], ["lava_tank_full", 0], ["lava_tank_full", 0], ["lava_tank_full", 0], ["lava_tank_full", 0]], 0, false); 
Block.setDestroyTime(233, 4); 
Block.setLightLevel(233, 15);

Block.defineBlock(232, "Seared Tank", [["seared_brick", 0], ["seared_brick", 0], ["lava_tank_empty", 0], ["lava_tank_empty", 0], ["lava_tank_empty", 0], ["lava_tank_empty", 0]], 0, false); 
Block.setDestroyTime(232, 4); 
//Item.addShapedRecipe(232, 1, 0, ["sgs", "sgs", "sgs"], ["g", 20, 0, "s", 472, 0]);
Item.setCategory(232, ItemCategory.MATERIAL);
Player.addItemCreativeInv(232, 1);

Block.defineBlock(231, "Smeltery Controller Active", [["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0], ["smeltery_controller_on", 0], ["seared_brick", 0], ["seared_brick", 0]], 0, false); 
Block.setDestroyTime(231, 4); 
Block.setLightLevel(231, 15);

Block.defineBlock(230, "Smeltery Controller", [["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0], ["smeltery_controller_off", 0], ["seared_brick", 0], ["seared_brick", 0]], 0, false); 
Block.setDestroyTime(230, 4); 
//Item.addShapedRecipe(230, 1, 0, ["sss", "s s", "sss"], ["s", 472, 0, "f", 61, 0]);
Item.setCategory(230, ItemCategory.MATERIAL);
Player.addItemCreativeInv(230, 1);

Block.defineBlock(229, "Casting Table", [["seared_brick", 0], ["casting_table", 0], ["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0]], 0, false); 
Block.setDestroyTime(229, 4); 
//Item.addShapedRecipe(229, 1, 0, ["sss", "s s", "s s"], ["s", 472, 0]);
Item.setCategory(229, ItemCategory.MATERIAL);
Player.addItemCreativeInv(229, 1);

Block.defineBlock(228, "Casting Table Ingot Cast", [["seared_brick", 0], ["ingot_cast", 0], ["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0]], 0, false); 
Block.setDestroyTime(228, 4); 

Block.defineBlock(227, "Seared Drain", [["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0], ["drain", 0], ["seared_brick", 0]], 0, false); 
Block.setDestroyTime(227, 4); 
//Item.addShapedRecipe(227, 1, 0, ["s s", "s s", "sss"], ["s", 472, 0]);
Item.setCategory(229, ItemCategory.MATERIAL);
Player.addItemCreativeInv(227, 1);

Block.defineBlock(225, "Seared Faucet", [["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0]], 0, false); 
Block.setDestroyTime(225, 4); 
Player.addItemCreativeInv(225, 1);
//Item.addShapedRecipe(229, 1, 0, ["s s", "s s", "s s"], ["s", 472, 0]);
Block.setShape(225, 0.35, 0.25, 0.25, 1, 0.75, 0.75);

Block.defineBlock(213, "Liquid Gold", ["molten_gold", 0]);

Block.defineBlock(212, "Liquid Gold_Half", ["molten_gold", 0]);
Block.setShape(212,0,0,0,1,0.5,1);

Block.defineBlock(224, "Frying Pan", [["cauldron_inner",0], ["cauldron_top",0],["cauldron_inner",0], ["cauldron_inner",0],["cauldron_inner",0],["iron_block",0]]); 
Block.setDestroyTime(224, 2); 
Block.setShape(224, 0, 0, 0, 1, 4/16, 1);

Block.defineBlock(223, "Handle", [["cauldron_inner", 0], ["iron_block", 0],["iron_block", 0], ["iron_block", 0],["cauldron_inner", 0], ["cauldron_inner", 0]]); 
Block.setDestroyTime(223, 2); 
Block.setShape(223, 0, 0, 7/16, 1, 2/16, 9/16);

Block.defineBlock(211,"Liquid Iron", ["molten_iron", 0]);

Block.defineBlock(210,"Liquid Iron_half", ["molten_iron", 0]);
Block.setShape(210,0,0,0,1,0.5,1);


//8, true, 7
/*Custom Items*/
ModPE.setItem(410, "tinkerbook_blue", 0, "Materials and You - Part 1", 1); 
Item.setCategory(410, 2); 
Player.addItemCreativeInv(410, 1);
Item.addCraftRecipe(410, 1, 0, [17, 1, 0]);
Item.addCraftRecipe(410, 1, 0, [17, 1, 1]);
Item.addCraftRecipe(410, 1, 0, [17, 1, 2]);
Item.addCraftRecipe(410, 1, 0, [17, 1, 3]);
Item.addCraftRecipe(410, 1, 0, [162, 1, 0]);
Item.addCraftRecipe(410, 1, 0, [162, 1, 1]);

ModPE.setItem(412, "tinkerbook_diary", 0, "The Diary of a Wandering Tinkerer", 1); 
Item.setCategory(412, 2); 
Player.addItemCreativeInv(412, 1);
Item.addCraftRecipe(412, 1, 0, [410, 1, 0]);

ModPE.setItem(411, "ingot_cast", 0, "Ingot Cast"); 
Item.setCategory(411, 2); 
Item.addShapedRecipe(411, 1, 0, ["i  ", "   ", "  i"], ["i", 265, 0]);
Player.addItemCreativeInv(411, 1);

ModPE.setItem(472, "seared_brick", 0, "Seared Brick");  
//Item.addFurnaceRecipe(160, 472, 0);
Player.addItemCreativeInv(472, 1);

ModPE.setItem(470, "cactus_crossbar", 0, "Cactus Crossbar", 64); 
//Item.addShapedRecipe(470, 1, 0, ["   ", "cpc", "   "], ["p", 496, 0, "c", 81, 0]); 
//Item.addShapedRecipe(470, 1, 0, ["   ", "cpc", "   "], ["c", 81, 0,"p", 496, 0]); 
Item.setCategory(470, 2); 

ModPE.setItem(467, "cactus_largeplate", 0, "Cactus Large Plate"); 
//Item.addShapedRecipe(467, 1, 0, ["ccc", "cpc", "ccc"], ["p", 496, 0, "c", 81, 0]); 

ModPE.setItem(466, "cactus_lumberaxe_head", 0, "Cactus Lumber Axe Head"); 
//Item.addShapedRecipe(466, 1, 0, ["cc ", "cp ", "   "], ["p", 496, 0, "c", 81, 0]); 

ModPE.setItem(465, "cactus_binding_reinforced", 0, "Cactus Tough Bind"); 
//Item.addShapedRecipe(465, 1, 0, ["c c", " p ", "c c"], ["p", 496, 0, "c", 81, 0]); 

ModPE.setItem(464, "cactus_rod_reinforced", 0, "Cactus Tough Rod"); 
//Item.addShapedRecipe(464, 1, 0, ["ptp", "ptp", "ptp"], ["p", 467, 0, "c", 459, 0]); 

ModPE.setItem(460, "cactus_wideguard", 0, "Cactus Wide Guard"); 
//Item.addShapedRecipe(460, 1, 0, ["c c", "cpc", "   "], ["p", 496, 0, "c", 81, 0]); 
Item.setCategory(460, 2); 

ModPE.setItem(459, "cactus_rod", 0, "Cactus Tool Rod"); 
Item.setCategory(459, 2); 
//Item.addShapedRecipe(459, 1, 0, [" c ", " p ", " c "], ["p", 496, 0, "c", 81, 0]); 
//Item.addShapedRecipe(459, 1, 0, [" p ", " c ", " c "], ["c", 81, 0,"p", 496, 0]); 

ModPE.setItem(458, "cactus_blade", 0, "Cactus Sword Blade"); 
Item.setCategory(458, 2); 
//Item.addShapedRecipe(458, 1, 0, [" c ", " c ", " p "], ["c", 81, 0,"p", 496, 0]); 

ModPE.setItem(463, "cactus_chiselhead", 0, "Cactus Chisel Head"); 
Item.setCategory(463, 2); 
//Item.addShapedRecipe(463, 1, 0, [" c ", " c ", " p "], ["p", 496, 0, "c", 81, 0]); 

ModPE.setItem(462, "cactus_chisel", 0, "Cactus Chisel", 1); 
Item.setCategory(462, 2); 
//Item.addShapedRecipe(462, 1, 0, ["   ", " h ", " t "], ["h", 463, 0, "t", 459, 0]); 
Item.setMaxDamage(462, 150);
Player.addItemCreativeInv(462, 1);

ModPE.setItem(461, "cactus_panhead", 0, "Cactus Pan"); 
Item.setCategory(461, 2); 
//Item.addShapedRecipe(461, 1, 0, ["cc ", "cp ", "   "], ["c", 81, 0, "p", 496, 0]); 

ModPE.setItem(457, "cactus_frypan", 0, "Cactus Frying Pan", 1); 
Item.setCategory(457, 2); 
//Item.addShapedRecipe(457, 1, 0, ["   ", " p ", " t "], ["p", 461, 0, "t", 459, 0]); 
Item.setMaxDamage(457, 150);
Player.addItemCreativeInv(457, 1);

ModPE.setItem(454, "cactus_pickaxe", 0, "Cactus Pickaxe", 1);
//Item.addShapedRecipe(454, 1, 0, [" h ", " b ", " t "], ["h", 455, 0, "t", 459, 0, "b", 456, 0]); 
Item.setMaxDamage(454, 150);
Player.addItemCreativeInv(454, 1);

ModPE.setItem(455, "cactus_pickaxehead", 0, "Cactus Pickaxe Head");
//Item.addShapedRecipe(455, 1, 0, ["ccc", " p ", "   "], ["p", 496, 0, "c", 81, 0]); 

ModPE.setItem(456, "cactus_binding", 0, "Cactus Pickaxe Binding");
//Item.addShapedRecipe(456, 1, 0, ["c c", " p ", "c c"], ["p", 496, 0, "c", 81, 0]); 

//Item.addShapedRecipe(400, 1, 0, ["www", "w w", "   "], ["w", 17, 0]);
//Item.addShapedRecipe(401, 1, 0, ["w w", "www", "www"], ["w", 17, 0]);
//Item.addShapedRecipe(402, 1, 0, ["www", "w w", "w w"], ["w", 17, 0]);
//Item.addShapedRecipe(403, 1, 0, ["   ", "w w", "w w"], ["w", 17, 0]);

Item.defineArmor(400, "wood_helmet", 0, "Wood Helmet",
"armor/wood_2.png", 1, 31, ArmorType.helmet);

Item.defineArmor(401, "wood_chestplate", 0, "Wood Chestplate",
"armor/wood_1.png", 2, 31, ArmorType.chestplate);

Item.defineArmor(402, "wood_leggings", 0, "Wood Leggings",
"armor/wood_2.png", 1, 31, ArmorType.leggings);

Item.defineArmor(403, "wood_boots", 0, "Wood Boots",
"armor/wood_1.png", 1, 31, ArmorType.boots);


ModPE.setItem(496, "pattern", 0, "Pattern"); 
//Item.addShapedRecipe(496, 1, 0, ["sw ", "ws ", " "], ["w" ,5, 0, "s", 280, 0]); 
//Item.addShapedRecipe(496, 1, 0, ["sw ", "ws ", " "], ["w" ,5, 1, "s", 280, 0]); 
//Item.addShapedRecipe(496, 1, 0, ["sw ", "ws ", " "], ["w" ,5, 2, "s", 280, 0]); 
//Item.addShapedRecipe(496, 1, 0, ["sw ", "ws ", " "], ["w" ,5, 3, "s", 280, 0]); 
//Item.addShapedRecipe(496, 1, 0, ["sw ", "ws ", " "], ["w" ,5, 4, "s", 280, 0]); 
Item.addShapedRecipe(496, 1, 0, ["sw ", "ws ", " "], ["w" ,5, 5, "s", 280, 0]); 
Player.addItemCreativeInv(496, 1);

ModPE.setItem(499, "stone_blade", 0, "Stone Sword Blade"); 
//Item.addShapedRecipe(499, 1, 0, [" c ", " c ", " p "], ["c", 4, 0,"p", 496, 0]); 
Item.setCategory(499, 2); 

ModPE.setItem(498, "stone_crossbar", 0, "Stone Crossbar"); 
//Item.addShapedRecipe(498, 1, 0, ["   ", "cpc", "   "], ["c", 4, 0,"p", 496, 0]); 
Item.setCategory(498, 2); 

ModPE.setItem(497, "stone_rod", 0, "Stone Tool Rod"); 
//Item.addShapedRecipe(497, 1, 0, [" p ", " c ", " c "], ["c", 4, 0,"p", 496, 0]); 
Item.setCategory(497, 2); 

ModPE.setItem(501, "blaze_rod", 0, "Blaze Rod"); 
//Item.addCraftRecipe(501, 1, 0, [266, 2, 0]); 
Item.setCategory(501, 2); 
Player.addItemCreativeInv(501, 1);

ModPE.setItem(502, "blaze_powder", 0, "Blaze Powder"); 
//Item.addCraftRecipe(502, 3, 0, [501, 1, 0]); 
Item.setCategory(502, 2); 
Player.addItemCreativeInv(502, 1);

ModPE.setItem(500, "stone_rapier", 0, "Stone Rapier", 1); 
//Item.addShapedRecipe(500, 1, 0, [" s ", " c ", " t "], ["s", 499, 0, "c", 498, 0, "t", 497, 0]); 
Item.setCategory(500, ItemCategory.TOOL, 0); 
Item.setMaxDamage(500, 131); 
Player.addItemCreativeInv(500, 1);

ModPE.setItem(469, "cactus_rapier", 0, "Cactus Rapier", 1); 
//Item.addShapedRecipe(469, 1, 0, [" s ", " c ", " t "], ["c", 470, 0, "t", 459, 0, "s", 458, 0]); 
Item.setCategory(469, 2); 
Item.setMaxDamage(469, 150); 
Player.addItemCreativeInv(469, 1);

ModPE.setItem(413, "cactus_rapier_sharp", 0, "Rapier Sharpness I", 1); 
Item.setMaxDamage(413, 150); 
//Item.addShapedRecipe(413, 1, 0, [ " ", " b ", " r "], ["b", 406, 0, "r", 469, 0]);
//Item.addShapedRecipe(413, 1, 0, ["   ", " q ", " r "], ["r", 469, 0, "q", 406, 0]);
Player.addItemCreativeInv(413, 1);

ModPE.setItem(414, "cactus_rapier_sharp", 0, "Rapier Sharpness II", 1); 
Item.setMaxDamage(414, 150); 
//Item.addShapedRecipe(414, 1, 0, [ " ", " b ", " r "], ["b", 406, 0, "r", 413, 0]);
//Item.addShapedRecipe(414, 1, 0, ["   ", " q ", " r "], ["r", 413, 0, "q", 406, 0]);
Player.addItemCreativeInv(414, 1);

ModPE.setItem(415, "cactus_rapier_sharp", 0, "Rapier Sharpness III", 1); 
Item.setMaxDamage(415, 150); 
//Item.addShapedRecipe(415, 1, 0, [ " ", " b ", " r "], ["b", 406, 0, "r", 414, 0]);
//Item.addShapedRecipe(415, 1, 0, ["   ", " q ", " r "], ["r", 414, 0, "q", 406, 0]);
Player.addItemCreativeInv(415, 1);

ModPE.setItem(503, "stone_rapier_sharp", 0, "Rapier Sharpness I", 1); 
Item.setMaxDamage(503, 131); 
//Item.addShapedRecipe(503, 1, 0, [ " ", " b ", " r "], ["b", 406, 0, "r", 500, 0])
//Item.addShapedRecipe(503, 1, 0, ["   ", " r ", " q "], ["r", 500, 0, "q", 406, 0]);
Player.addItemCreativeInv(503, 1);


ModPE.setItem(505, "stone_rapier_sharp", 0, "Rapier Sharpness II", 1); 
Item.setMaxDamage(505, 131); 
//Item.addShapedRecipe(505, 1, 0, [ " ", " b ", " r "], ["b", 406, 0, "r", 503, 0])
//Item.addShapedRecipe(505, 1, 0, ["   ", " r ", " q "], ["r", 503, 0, "q", 406, 0]);
Player.addItemCreativeInv(505, 1);

ModPE.setItem(506, "stone_rapier_sharp", 0, "Rapier Sharpness III", 1);
Item.setMaxDamage(506, 131); 
//Item.addShapedRecipe(506, 1, 0, [ " ", " b ", " r "], ["b", 406, 0, "r", 505, 0]); 
//Item.addShapedRecipe(506, 1, 0, ["   ", " r ", " q "], ["r", 505, 0, "q", 406, 0]);
Player.addItemCreativeInv(506, 1);

ModPE.setItem(504, "stone_rapier_firey", 0, "Rapier Firey I", 1); 
Item.setMaxDamage(504, 131); 
//Item.addShapedRecipe(504, 1, 0, [ " ", " b ", " r "], ["b", 502, 0, "r", 500, 0]); 
//Item.addShapedRecipe(504, 1, 0, ["   ", " q ", " r "], ["r", 500, 0, "q", 502, 0]);
Player.addItemCreativeInv(504, 1);

ModPE.setItem(507, "stone_rapier_firey", 0, "Rapier Firey II", 1); 
Item.setMaxDamage(507, 131); 
//Item.addShapedRecipe(507, 1, 0, [ " ", " b ", " r "], ["b", 502, 0, "r", 504, 0]); 
//Item.addShapedRecipe(507, 1, 0, ["   ", " q ", " r "], ["r", 504, 0, "q", 502, 0]);
Player.addItemCreativeInv(507, 1);

ModPE.setItem(508, "stone_rapier_firey", 0, "Rapier Firey III", 1); 
Item.setMaxDamage(508, 131); 
//Item.addShapedRecipe(508, 1, 0, [ " ", " b ", " r "], ["b", 502, 0, "r", 507, 0]); 
//Item.addShapedRecipe(508, 1, 0, ["   ", " q ", " r "], ["r", 507, 0, "q", 502, 0]);
Player.addItemCreativeInv(508, 1);

ModPE.setItem(416, "cactus_rapier_firey", 0, "Rapier Firey I", 1); 
Item.setMaxDamage(416, 150); 
//Item.addShapedRecipe(416, 1, 0, [ " ", " b ", " r "], ["b", 502, 0, "r", 469, 0]); 
//Item.addShapedRecipe(416, 1, 0, ["   ", " q ", " r "], ["r", 469, 0, "q", 502, 0]);
Player.addItemCreativeInv(416, 1);

ModPE.setItem(417, "cactus_rapier_firey", 0, "Rapier Firey II", 1); 
Item.setMaxDamage(417, 150); 
//Item.addShapedRecipe(417, 1, 0, [ " ", " b ", " r "], ["b", 502, 0, "r", 416, 0]); 
//Item.addShapedRecipe(417, 1, 0, ["   ", " q ", " r "], ["r", 416, 0, "q", 502, 0]);
Player.addItemCreativeInv(417, 1);

ModPE.setItem(418, "cactus_rapier_firey", 0, "Rapier Firey III", 1); 
Item.setMaxDamage(418, 150); 
//Item.addShapedRecipe(418, 1, 0, [ " ", " b ", " r "], ["b", 502, 0, "r", 417, 0]); 
//Item.addShapedRecipe(418, 1, 0, ["   ", " q ", " r "], ["r", 417, 0, "q", 502, 0]);
Player.addItemCreativeInv(418, 1);

ModPE.setItem(509, "stone_pan", 0, "Stone Pan"); 
//Item.addCraftRecipe(509, 1, 0, [496, 1, 0, 4, 2, 0]); 
Item.setCategory(509, 2); 

ModPE.setItem(510, "stone_frypan", 0, "Stone Frying Pan", 1); 
//Item.addShapedRecipe(510, 1, 0, ["   ", " p ", " t "], ["p", 509, 0, "t", 497, 0]); 
Item.setCategory(510, 2); 
Item.setMaxDamage(510, 131); 
Player.addItemCreativeInv(510, 1);

ModPE.setItem(511, "stone_wideguard", 0, "Stone Wide Guard"); 
//Item.addShapedRecipe(511, 1, 0, ["c c", "cpc", "   "], ["c", 4, 0,"p", 496, 0]); 
Item.setCategory(511, 2); 

ModPE.setItem(495, "stone_broadsword", 0, "Stone Broadsword", 1); 
//Item.addShapedRecipe(495, 1, 0, [" s ", " w ", " t "], ["s", 499, 0, "w", 511, 0, "t", 497, 0]); 
Item.setCategory(495, 2); 
Item.setMaxDamage(495, 131); 
Item.setHandEquipped(495, true);
Player.addItemCreativeInv(495, 1);

ModPE.setItem(430, "stone_broadsword_firey", 0, "Broadsword Firey I", 1); 
Item.setMaxDamage(430, 131); 
//Item.addShapedRecipe(430, 1, 0, [ " ", " b ", " r "], ["b", 502, 0, "r", 495, 0]); 
//Item.addShapedRecipe(430, 1, 0, ["   ", " q ", " r "], ["r", 495, 0, "q", 502, 0]);
Item.setHandEquipped(430, true);
Player.addItemCreativeInv(430, 1);

ModPE.setItem(431, "stone_broadsword_firey", 0, "Broadsword Firey II", 1); 
Item.setMaxDamage(431, 131); 
//Item.addShapedRecipe(431, 1, 0, [ " ", " b ", " r "], ["b", 502, 0, "r", 430, 0]); 
//Item.addShapedRecipe(431, 1, 0, ["   ", " q ", " r "], ["r", 430, 0, "q", 502, 0]);
Item.setHandEquipped(431, true);
Player.addItemCreativeInv(431, 1);

ModPE.setItem(432, "stone_broadsword_firey", 0, "Broadsword Firey III", 1); 
Item.setMaxDamage(432, 131); 
//Item.addShapedRecipe(432, 1, 0, [ " ", " b ", " r "], ["b", 502, 0, "r", 431, 0]); 
//Item.addShapedRecipe(432, 1, 0, ["   ", " q ", " r "], ["r", 431, 0, "q", 502, 0]);
Item.setHandEquipped(432, true);
Player.addItemCreativeInv(432, 1);

ModPE.setItem(476, "cactus_broadsword", 0, "Cactus Broadsword", 1); 
//Item.addShapedRecipe(476, 1, 0, [" s ", " w ", " t "], ["s", 458, 0, "w", 459, 0, "t", 460, 0]); 
Item.setCategory(476, 2); 
Item.setMaxDamage(476, 150); 
Item.setHandEquipped(476, true);
Player.addItemCreativeInv(476, 1);

ModPE.setItem(494, "stone_broadsword_sharp", 0, "Broadsword Sharpness I", 1); 
Item.setMaxDamage(494, 131); 
//Item.addShapedRecipe(494, 1, 0, ["   ", " q ", " r "], ["r", 495, 0, "q", 406, 0]);
Item.setHandEquipped(494, true);
Player.addItemCreativeInv(494, 1);

ModPE.setItem(493, "stone_broadsword_sharp", 0, "Broadsword Sharpness II", 1); 
Item.setMaxDamage(493, 131); 
//Item.addShapedRecipe(493, 1, 0, ["   ", " q ", " r "], ["r", 494, 0, "q", 406, 0]);
Item.setHandEquipped(493, true);
Player.addItemCreativeInv(493, 1);

ModPE.setItem(492, "stone_broadsword_sharp", 0, "Broadsword Sharpness III", 1); 
Item.setMaxDamage(492, 131); 
//Item.addShapedRecipe(492, 1, 0, ["   ", " q ", " r "], ["r", 493, 0, "q", 406, 0]);
Item.setHandEquipped(492, true);
Player.addItemCreativeInv(492, 1);

ModPE.setItem(419, "cactus_broadsword_sharp", 0, "Broadsword Sharpness I", 1); 
Item.setMaxDamage(419, 150); 
//Item.addShapedRecipe(419, 1, 0, ["   ", " q ", " r "], ["r", 476, 0, "q", 406, 0]);
Item.setHandEquipped(419, true);
Player.addItemCreativeInv(419, 1);

ModPE.setItem(420, "cactus_broadsword_sharp", 0, "Broadsword Sharpness II", 1); 
Item.setMaxDamage(420, 150); 
//Item.addShapedRecipe(420, 1, 0, ["   ", " q ", " r "], ["r", 419, 0, "q", 406, 0]);
Item.setHandEquipped(420, true);
Player.addItemCreativeInv(420, 1);

ModPE.setItem(421, "cactus_broadsword_sharp", 0, "Broadsword Sharpness III", 1); 
Item.setMaxDamage(421, 150); 
//Item.addShapedRecipe(421, 1, 0, ["   ", " q ", " r "], ["r", 420, 0, "q", 406, 0]);
Item.setHandEquipped(421, true);
Player.addItemCreativeInv(421, 1);

ModPE.setItem(491, "stone_knifehead", 0, "Stone Knife Blade"); 
//Item.addShapedRecipe(491, 1, 0, [" p", " c ", "c  "], ["c", 4, 0,"p", 496, 0]); 
Item.setCategory(491, 2); 

ModPE.setItem(490, "stone_dagger", 0, "Stone Dagger", 1); 
//Item.addShapedRecipe(490, 1, 0, [" k ", " c ", " t "], ["k", 491, 0, "c", 498, 0, "t", 497, 0]); 
Item.setCategory(490, 2); 
Item.setMaxDamage(490, 131); 
Item.setHandEquipped(490, true);
Player.addItemCreativeInv(490, 1);


 ModPE.setItem(433, "stone_dagger_firey", 0, "Dagger Firey I", 1); 
Item.setMaxDamage(433, 131); 
//Item.addShapedRecipe(433, 1, 0, [ " ", " b ", " r "], ["b", 502, 0, "r", 490, 0]); 
//Item.addShapedRecipe(433, 1, 0, ["   ", " q ", " r "], ["r", 490, 0, "q", 502, 0]);
Player.addItemCreativeInv(433, 1);
Item.setHandEquipped(433, true);

ModPE.setItem(434, "stone_dagger_firey", 0,  "Dagger Firey II", 1); 
Item.setMaxDamage(434, 131); 
//Item.addShapedRecipe(434, 1, 0, [ " ", " b ", " r "], ["b", 502, 0, "r", 433, 0]); 
//Item.addShapedRecipe(434, 1, 0, ["   ", " q ", " r "], ["r", 433, 0, "q", 502, 0]);
Item.setHandEquipped(434, true);
Player.addItemCreativeInv(434, 1);

ModPE.setItem(435, "stone_dagger_firey", 0, "Dagger Firey III", 1); 
Item.setMaxDamage(435, 131); 
//Item.addShapedRecipe(435, 1, 0, [ " ", " b ", " r "], ["b", 502, 0, "r", 434, 0]); 
//Item.addShapedRecipe(435, 1, 0, ["   ", " q ", " r "], ["r", 434, 0, "q", 502, 0]);
Item.setHandEquipped(435, true);
Player.addItemCreativeInv(435, 1);

ModPE.setItem(489, "stone_dagger_sharp", 0, "Dagger Sharpness I", 1); 
Item.setMaxDamage(489, 131); 
//Item.addShapedRecipe(489, 1, 0, ["   ", " q ", " r "], ["r", 490, 0, "q", 406, 0]);
Player.addItemCreativeInv(489, 1);
Item.setHandEquipped(489, true);

ModPE.setItem(488, "stone_dagger_sharp", 0, "Dagger Sharpness II", 1); 
Item.setMaxDamage(488, 131); 
//Item.addShapedRecipe(488, 1, 0, ["   ", " q ", " r "], ["r", 489, 0, "q", 406, 0]);
Item.setHandEquipped(488, true);
Player.addItemCreativeInv(488, 1);

ModPE.setItem(487, "stone_dagger_sharp", 0, "Dagger Sharpness III", 1); 
Item.setMaxDamage(487, 131); 
//Item.addShapedRecipe(487, 1, 0, ["   ", " q ", " r "], ["r", 488, 0, "q", 406, 0]);
Item.setHandEquipped(487, true);
Player.addItemCreativeInv(487, 1);

ModPE.setItem(428, "cactus_knifehead", 0, "Cactus Knife Blade", 1); 
//Item.addShapedRecipe(428, 1, 0, [" p", " c ", "c  "], ["c", 81, 0,"p", 496, 0]); 
Item.setCategory(428, 2); 

ModPE.setItem(429, "cactus_dagger", 0, "Cactus Dagger", 1); 
//Item.addCraftRecipe(429, 1, 0, [428, 1, 0], [459, 1, 0], [470, 1, 0]); 
Item.setMaxDamage(429, 150); 
Item.setHandEquipped(429, true);
Player.addItemCreativeInv(429, 1);

ModPE.setItem(424, "cactus_dagger_sharp", 0, "Dagger Sharpness I", 1); 
Item.setMaxDamage(424, 150); 
//Item.addShapedRecipe(424, 1, 0, ["   ", " q ", " r "], ["r", 429, 0, "q", 406, 0]);
Item.setHandEquipped(424, true);
Player.addItemCreativeInv(424, 1);

ModPE.setItem(425, "cactus_dagger_sharp", 0, "Dagger Sharpness II", 1); 
Item.setMaxDamage(425, 150); 
//Item.addShapedRecipe(425, 1, 0, ["   ", " q ", " r "], ["r", 424, 0, "q", 406, 0]);
Item.setHandEquipped(425, true);
Player.addItemCreativeInv(425, 1);

ModPE.setItem(426, "cactus_dagger_sharp", 0, "Dagger Sharpness III", 1); 
Item.setMaxDamage(426, 150); 
//Item.addShapedRecipe(426, 1, 0, ["   ", " q ", " r "], ["r", 425, 0, "q", 406, 0]);
Item.setHandEquipped(426, true);
Player.addItemCreativeInv(426, 1);

ModPE.setItem(486, "stone_axehead", 0, "Stone Axe Head"); 
//Item.addShapedRecipe(486, 1, 0, ["cc ", "cp ", "   "], ["c", 4, 0,"p", 496, 0]); 
Item.setCategory(486, 2); 

ModPE.setItem(485, "stone_shovelhead", 0, "Stone Shovel Head"); 
//Item.addShapedRecipe(485, 1, 0, [" c ", " p ", "   "], ["c", 4, 0,"p", 496, 0]); 
Item.setCategory(485, 2); 

ModPE.setItem(484, "stone_mattock", 0, "Stone Mattock", 1); 
//Item.addShapedRecipe(484, 1, 0, ["s a", " t ", "   "], ["s", 485, 0,"a", 486, 0, "t", 497, 0]); 
Item.setCategory(484, 2); 
Item.setMaxDamage(484, 131); 
Item.setHandEquipped(484, true);
Player.addItemCreativeInv(484, 1);

ModPE.setItem(483, "stone_chiselhead", 0, "Stone Chisel Head"); 
//Item.addShapedRecipe(483, 1, 0, [" c ", " p ", "   "], ["c", 4, 0,"p", 496, 0]); 
Item.setCategory(483, 2); 

ModPE.setItem(482, "stone_chisel", 0, "Stone Chisel", 1); 
//Item.addShapedRecipe(482, 1, 0, ["   ", " h ", " t "], ["h", 483, 0,"t", 497, 0]); 
Item.setCategory(482, 2); 
Item.setMaxDamage(482, 131); 
Player.addItemCreativeInv(482, 1);

ModPE.setItem(481, "stone_lumberaxe", 0, "Stone Lumber Axe", 1); 
//Item.addShapedRecipe(481, 1, 0, [" h ", " b ", " t "], ["h", 480, 0, "b", 478, 0, "t", 477, 0]); 
Item.setMaxDamage(481, 131);
Item.setHandEquipped(481, true);
Player.addItemCreativeInv(481, 1);

ModPE.setItem(468, "cactus_lumberaxe", 0, "Cactus Lumber Axe", 1); 
//Item.addShapedRecipe(468, 1, 0, [" h ", " b ", " r "], ["h", 466, 0, "b", 465, 0, "r", 464, 0]);
Item.setMaxDamage(468, 150);
Item.setHandEquipped(468, true);
Player.addItemCreativeInv(468, 1);

ModPE.setItem(480, "stone_lumberaxehead", 0, "Stone Lumber Axe Head"); 

//Item.addShapedRecipe(480, 1, 0, ["cc ", "cp ", "   "], ["c", 4, 0, "p", 496, 0]); 

ModPE.setItem(479, "stone_largeplate", 0, "Stone Large Plate"); 
//Item.addShapedRecipe(479, 1, 0, ["ccc", "cpc", "ccc"], ["c", 4, 0, "p", 496, 0]); 

ModPE.setItem(478, "stone_binding_reinforced", 0, "Stone Tough Binding"); 
//Item.addShapedRecipe(478, 1, 0, ["c c", " p ", " c "], ["c", 4, 0, "p", 496, 0]); 

ModPE.setItem(477, "stone_rod_reinforced", 0, "Stone Tough Rod"); 
//Item.addShapedRecipe(477, 1, 0, ["ptp", "ptp", "ptp"], ["p", 479, 0, "t", 497, 0]); 

ModPE.setItem(422, "stone_hammer", 0, "Stone Hammer", 1); 
//Item.addShapedRecipe(422, 1, 0, ["lhl", " t  ", "  "], ["h", 423, 0, "l", 479, 0, "t", 497, 0]); 
//Item.addShapedRecipe(422, 1, 0, ["lhl"," t ", "   "], ["h", 423, 0, "l", 479, 0, "t", 497, 0]); 
Item.setMaxDamage(422, 131);
Item.setHandEquipped(422, true);
Player.addItemCreativeInv(422, 1);

ModPE.setItem(423, "stone_hammerhead", 0, "Stone Hammer Head"); 
//Item.addShapedRecipe(423, 1, 0, ["sss", " p  ", "  "], ["p", 496, 0, "s", 4, 0]); 

function attackHook(a, v){ 
try {
        if(mp) if(mp.isPlaying()) {
            mp.pause();
            mp.reset();
        }
        mp = new android.media.MediaPlayer();
    } catch(e) {
        clientMessage("Error: " + e);
    }
/*Cactus Lumberaxe Attack*/
if(Player.getCarriedItem()==481){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 481, Player.getCarriedItemCount(), Player.getCarriedItemData() + 2); 
else{ 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); 
} 
}
/*Cactus Pickaxe Attack*/
if(Player.getCarriedItem()==454){ 
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(a, 454, Player.getCarriedItemCount(), Player.getCarriedItemData() + 2); 
else{ 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); 
} 
}
/*Rapier*/ 
if(Player.getCarriedItem()==500){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 500, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 1); } 

if(Player.getCarriedItem()==503){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 503, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 2); }  

if(Player.getCarriedItem()==505) { 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 505, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 3); } 

if(Player.getCarriedItem()==506){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 506, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 4); } 

if(Player.getCarriedItem()==413){ 
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(a, 413, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 2); }  

if(Player.getCarriedItem()==414) { 
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(a, 414, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 3); } 

if(Player.getCarriedItem()==415){ 
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(a, 415, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 4); } 

if(Player.getCarriedItem()==504){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 504, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 1); 
Entity.setFireTicks(v, 1); } 

if(Player.getCarriedItem()==507){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 507, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 1); 
Entity.setFireTicks(v, 2); } 


if(Player.getCarriedItem()==508){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 508, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 1); 
Entity.setFireTicks(v, 3); } 

if(Player.getCarriedItem()==416){ 
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(a, 416, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 1); 
Entity.setFireTicks(v, 1); } 

if(Player.getCarriedItem()==417){ 
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(a, 417, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 1); 
Entity.setFireTicks(v, 2); } 


if(Player.getCarriedItem()==418){ 
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(a, 418, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 1); 
Entity.setFireTicks(v, 3); } 


if(Player.getCarriedItem()==469){
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(a, 469, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 1); }

/*Frying Pan*/ 
if(Player.getCarriedItem()==510){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 510, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 2); 
Level.playSoundEnt(v, "random.break", 0.25, 1); 
setVelX(v, 2 * Math.cos((getYaw()+90)*(Math.PI/180))); 
setVelY(v, 1); 
setVelZ(v, 2 * Math.sin((getYaw()+90)*(Math.PI/180))); } 

if(Player.getCarriedItem()==457){ 
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(a, 457, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 2); 
Level.playSoundEnt(v, "random.break", 0.25, 1); 
setVelX(v, 2 * Math.cos((getYaw()+90)*(Math.PI/180))); 
setVelY(v, 1); 
setVelZ(v, 2 * Math.sin((getYaw()+90)*(Math.PI/180))); 
} 

/*Broadsword*/ 
if(Player.getCarriedItem()==495){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 495, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 4); } 

if(Player.getCarriedItem()==494){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 494, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 5); } 

if(Player.getCarriedItem()==493){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 493, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 6); } 

if(Player.getCarriedItem()==492){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 492, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 4); } 

if(Player.getCarriedItem()==476){ 
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(a, 476, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 7); } 

if(Player.getCarriedItem()==419){ 
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(a, 419, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 4); } 

if(Player.getCarriedItem()==420){ 
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(a, 420, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 5); } 

if(Player.getCarriedItem()==421){ 
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(a, 421, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 6); } 

if(Player.getCarriedItem()==430){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 430, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 1); 
Entity.setFireTicks(v, 2); } 

if(Player.getCarriedItem()==431){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 431, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 1); 
Entity.setFireTicks(v, 3); } 

if(Player.getCarriedItem()==432){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 432, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 1); 
Entity.setFireTicks(v, 4); } 

/*Dagger*/
if(Player.getCarriedItem()== 490){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 490, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v)); } 

if(Player.getCarriedItem()== 489){ if(Player.getCarriedItemData() < 130) Entity.setCarriedItem(a, 489, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); else { Level.playSoundEnt(a, "random.break", 100, 100); Player.clearInventorySlot(Player.getSelectedSlotId()); } Entity.setHealth(v,Entity.getHealth(v) - 1); } 

if(Player.getCarriedItem()== 488){ if(Player.getCarriedItemData() < 130) Entity.setCarriedItem(a, 488, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); else { Level.playSoundEnt(a, "random.break", 100, 100); Player.clearInventorySlot(Player.getSelectedSlotId()); } Entity.setHealth(v,Entity.getHealth(v) - 2); } 

if(Player.getCarriedItem()== 487){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 487, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else{ 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); }
Entity.setHealth(v,Entity.getHealth(v) - 3); 
} 

if(Player.getCarriedItem()== 429){ 
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(a, 429, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v)); } 

if(Player.getCarriedItem()== 424){ 
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(a, 424, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 1); } 

if(Player.getCarriedItem()== 425){ 
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(a, 425, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 2); } 

if(Player.getCarriedItem()== 426){ 
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(a, 426, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else{ 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); }
Entity.setHealth(v,Entity.getHealth(v) - 3); 
}
 
 if(Player.getCarriedItem()==433){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 433, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 1); 
Entity.setFireTicks(v, 1); } 

if(Player.getCarriedItem()==434){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 434, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 1); 
Entity.setFireTicks(v, 2); } 

if(Player.getCarriedItem()==435){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(a, 435, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else { 
Level.playSoundEnt(a, "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); } 
Entity.setHealth(v,Entity.getHealth(v) - 1); 
Entity.setFireTicks(v, 3); } 
}

function useItem(x, y, z, itemId, blockId, side, itemDamage, blockDamage){
/*Smeltery Stuff*/
if(itemId == 411 && blockId == 229 && Level.getGameMode() != 1){
if(Player.getCarriedItemCount != 1){
setTile(x, y, z, 228);
addItemInventory(411, -1);
//Entity.setCarriedItem(getPlayerEnt, 411, Player.getCarriedItemCount()-1, Player.getCarriedItemData());
}
else if(Player.getCarriedItemCount() == 1){
setTile(x, y, z, 228);
//Player.clearInventorySlot(Player..getSelectedSlotId());
Player.removeItemInventory(411, 1, 0);
}
}
if(itemId == 325 && blockId == 232 && Level.getGameMode() != 1 && itemDamage == 10){
if(Player.getCarriedItemCount != 1){
preventDefault();
setTile(x, y, z, 233);
addItemInventory(325, -1, 10);
//Entity.setCarriedItem(getPlayerEnt, 411, Player.getCarriedItemCount()-1, Player.getCarriedItemData());
}
else if(Player.getCarriedItemCount() == 1){
preventDefault();
setTile(x, y, z, 233);
//Player.clearInventorySlot(Player..getSelectedSlotId());
Player.removeItemInventory(325, 1, 10);
}
}
//Iron to half
if(blockId == 227 &&
Level.getTile(x+1, y, z) == 211 &&
Level.getTile(x+2, y, z) == 211 &&
Level.getTile(x+3, y, z) == 211 &&
Level.getTile(x+1, y, z-1) == 211 &&
Level.getTile(x+2, y, z-1) == 211 &&
Level.getTile(x+3, y, z-1) == 211 &&
Level.getTile(x+1, y, z+1) == 211 &&
Level.getTile(x+2, y, z+1) == 211 &&
Level.getTile(x-1, y-1, z) == 228 &&
Level.getTile(x+3, y, z+1) == 211){
setTile(x+1, y, z, 210);
setTile(x+2, y, z, 210);
setTile(x+3, y, z, 210);
setTile(x+1, y, z+1, 210);
setTile(x+2, y, z+1, 210);
setTile(x+3, y, z+1, 210);
setTile(x+1, y, z-1, 210);
setTile(x+2, y, z-1, 210);
setTile(x+3, y, z-1, 210);
Level.dropItem(x-1, y-1, z, 0.5, 265, 1);
}
//Gold to half
else if(blockId == 227 &&
Level.getTile(x+1, y, z) == 213 &&
Level.getTile(x+2, y, z) == 213 &&
Level.getTile(x+3, y, z) == 213 &&
Level.getTile(x+1, y, z-1) == 213 &&
Level.getTile(x+2, y, z-1) == 213 &&
Level.getTile(x+3, y, z-1) == 213 &&
Level.getTile(x+1, y, z+1) == 213 &&
Level.getTile(x+2, y, z+1) == 213 &&
Level.getTile(x-1, y-1, z) == 228 &&
Level.getTile(x+3, y, z+1) == 213){
setTile(x+1, y, z, 212);
setTile(x+2, y, z, 212);
setTile(x+3, y, z, 212);
setTile(x+1, y, z+1, 212);
setTile(x+2, y, z+1, 212);
setTile(x+3, y, z+1, 212);
setTile(x+1, y, z-1, 212);
setTile(x+2, y, z-1, 212);
setTile(x+3, y, z-1, 212);
Level.dropItem(x-1, y-1, z, 0.5, 266, 1);
}
//Gold to air
else if(blockId == 227 &&
Level.getTile(x+1, y, z) == 212 &&
Level.getTile(x+2, y, z) == 212 &&
Level.getTile(x+3, y, z) == 212 &&
Level.getTile(x+1, y, z-1) == 212 &&
Level.getTile(x+2, y, z-1) == 212 &&
Level.getTile(x+3, y, z-1) == 212 &&
Level.getTile(x+1, y, z+1) == 212 &&

Level.getTile(x+2, y, z+1) == 212 &&
Level.getTile(x-1, y-1, z) == 228 &&
Level.getTile(x+3, y, z+1) == 212){
setTile(x+1, y, z, 0);
setTile(x+2, y, z, 0);
setTile(x+3, y, z, 0);
setTile(x+1, y, z+1, 0);
setTile(x+2, y, z+1, 0);
setTile(x+3, y, z+1, 0);
setTile(x+1, y, z-1, 0);
setTile(x+2, y, z-1, 0);
setTile(x+3, y, z-1, 0);
Level.dropItem(x-1, y-1, z, 0.5, 266, 1);
}
//Iron to air
else if(blockId == 227 &&
Level.getTile(x+1, y, z) == 210 &&
Level.getTile(x+2, y, z) == 210 &&
Level.getTile(x+3, y, z) == 210 &&
Level.getTile(x+1, y, z-1) == 210 &&
Level.getTile(x+2, y, z-1) == 210 &&
Level.getTile(x+3, y, z-1) == 210 &&
Level.getTile(x+1, y, z+1) == 210 &&
Level.getTile(x+2, y, z+1) == 210 &&
Level.getTile(x-1, y-1, z) == 228 &&
Level.getTile(x+3, y, z+1) == 210){
setTile(x+1, y, z, 0);
setTile(x+2, y, z, 0);
setTile(x+3, y, z, 0);
setTile(x+1, y, z+1, 0);
setTile(x+2, y, z+1, 0);
setTile(x+3, y, z+1, 0);
setTile(x+1, y, z-1, 0);
setTile(x+2, y, z-1, 0);
setTile(x+3, y, z-1, 0);
Level.dropItem(x-1, y-1, z, 0, 265, 1);
}
//Ore melting
if(Level.getTile(x, y, z) == 230 && 
Level.getTile(x, y-1, z-1) == 222 && 
Level.getTile(x, y-1, z-2) == 222 && 
Level.getTile(x, y-1, z-3) == 222 && 
Level.getTile(x, y, z-4) == 222 && 
Level.getTile(x-1, y, z) == 222 &&
Level.getTile(x-1, y-1, z-1) == 222 && 
Level.getTile(x-1, y-1, z-2) == 222 && 
Level.getTile(x-1, y-1, z-3) == 222 && 
Level.getTile(x-1, y, z-4) == 222 &&
Level.getTile(x+1, y, z) == 233 &&
Level.getTile(x+1, y-1, z-1) == 222 && 
Level.getTile(x+1, y-1, z-2) == 222 && 
Level.getTile(x+1, y-1, z-3) == 222 && 
Level.getTile(x+1, y, z-4) == 222 &&
Level.getTile(x+2, y, z-1) == 222 && 
Level.getTile(x+2, y, z-2) == 222 && 
Level.getTile(x+2, y, z-3) == 222 &&
Level.getTile(x-2, y, z-1) == 222 && 
Level.getTile(x-2, y, z-2) == 227 && 
Level.getTile(x-2, y, z-3) == 222 ){
//Melt Gold
if(getTile(x, y, z-2) == 14){
setTile(x-1, y, z-1, 213);
setTile(x-1, y, z-2, 213);
setTile(x-1, y, z-3, 213);
setTile(x, y, z-1, 213);
setTile(x, y, z-2, 213);
setTile(x, y, z-3, 213);
setTile(x+1, y, z-1, 213);
setTile(x+1, y, z-2, 213);
setTile(x+1, y, z-3, 213);
}
//Melt Iron
if(getTile(x, y, z-2) == 15){
setTile(x-1, y, z-1, 211);
setTile(x-1, y, z-2, 211);
setTile(x-1, y, z-3, 211);
setTile(x, y, z-1, 211);
setTile(x, y, z-2, 211);
setTile(x, y, z-3, 211);
setTile(x+1, y, z-1, 211);
setTile(x+1, y, z-2, 211);
setTile(x+1, y, z-3, 211);
}
}
if(itemId == 484 && blockId == 2){
setTile(x, y, z, 60);
}
if(itemId == 484 && blockId == 3){
setTile(x, y, z, 60);
}
if(itemId == 484 && blockId == 235){
setTile(x, y, z, 60);
}
if(itemId == 484 && blockId == 234){
setTile(x, y, z, 60);
}
/*Netherrack Chiseling*/
if(itemId == 462 && blockId == 87){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 240);
}
if(itemId == 482 && blockId == 87){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 240);
}
if(itemId == 462 && blockId == 240){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 239);
}
if(itemId == 482 && blockId == 240){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 239);
}
if(itemId == 462 && blockId == 239){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 239);
}
if(itemId == 482 && blockId == 239){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 239);
}
/*Hardened Clay Chiseling*/
if(itemId == 462 && blockId == 172){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 238);
}
if(itemId == 482 && blockId == 172){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 238);
}
if(itemId == 462 && blockId == 238){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 237);
}
if(itemId == 482 && blockId == 238){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 237);
}
if(itemId == 462 && blockId == 237){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 237);
}
if(itemId == 482 && blockId == 237){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 237);
}
/*Stone Chiseling*/
if(itemId==462 && blockId == 1){
if(blockDamage == 0){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 98); 
} 
if(blockDamage==1){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 1, 2);
}
if(blockDamage==2){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 1, 2);
}
if(blockDamage==3){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 1, 4);
}
if(blockDamage==4){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 1, 4);
}
if(blockDamage==5){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 1, 6);
}
if(blockDamage==6){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 1, 6);
}
}
if(itemId==482 && blockId == 1){
if(blockDamage == 0){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 98); 
} 

if(blockDamage==1){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 1, 2);
}
if(blockDamage==2){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 1, 2);
}
if(blockDamage==3){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 1, 4);
}
if(blockDamage==4){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 1, 4);
}
if(blockDamage==5){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 1, 6);
}
if(blockDamage==6){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 1, 6);
}
}
if(itemId == 462 && blockId == 98){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 98, 3); 
} 
if(itemId == 482 && blockId == 98){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 98, 3); 
} 
if(blockId == 24 && itemId== 462){ 
if(blockDamage == 0){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 24, 2); 
} 
if(blockDamage == 1){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 24, 1);
}
if(blockDamage == 2){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 24, 1); 
} 
} 
/*Sandstone Chiseling*/
if(blockId == 24 && itemId == 482){ 
if(blockDamage == 0){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 24, 2); 
} 
if(blockDamage == 1){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 24, 1);
}
if(blockDamage == 2){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 24, 1); 
} 
} 
if(itemId == 462 && blockId == 57){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 254); 
} 
if(itemId == 482 && blockId == 57){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 254); 
} 
if(itemId == 462 && blockId == 254){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 57); 
} 
if(itemId == 482 && blockId == 254){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 57); 
} 
if(itemId == 462 && blockId == 49){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 253); 
} 
if(itemId == 482 && blockId == 49){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 253); 
} 
if(itemId == 462 && blockId == 253){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 49); 

} 
if(itemId == 482 && blockId == 253){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 49); 
} 
if(itemId == 462 && blockId == 22){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 252); 
} 
if(itemId == 482 && blockId == 22){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 252); 
} 
if(itemId == 462 && blockId == 252){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 22); 
} 
if(itemId == 482 && blockId == 252){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 22); 
} 
if(itemId == 462 && blockId == 42){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 251); 
} 
if(itemId == 482 && blockId == 42){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 251); 
} 
if(itemId == 462 && blockId == 251){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 42); 
} 
if(itemId == 482 && blockId == 251){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 42); 
} 
if(itemId == 462 && blockId == 250){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 242); 
} 
if(itemId == 482 && blockId == 250){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 242); 
} 
if(blockId == 155 && itemId == 462){ 
if(blockDamage == 0){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 155, 2); 
} 
if(blockDamage == 2){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 155, 1); 
} 
} 
if(blockId == 155 && itemId == 482){ 
if(blockDamage == 0){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 155, 2); 
} 
if(blockDamage == 2){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 155, 1); 
} 
} 
if(itemId == 462 && blockId == 1){ 
if(blockDamage==0){
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 98); 
} 
if(blockDamage==1){
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 1, 2); 
}
}
if(itemId == 482 && blockId == 1){ 
if(blockDamage==0){
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 98); 
} 
}
if(blockId == 24 && itemId == 462){ 
if(blockDamage == 0){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 24, 2); 
} 
}
if(blockId == 24 && itemId == 482){ 
if(blockDamage == 0){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 24, 2); 
} 
}
//Diamond Chiseling
if(itemId == 462 && blockId == 57){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 254); 
} 
if(itemId == 462 && blockId == 57){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 254); 
} 
if(itemId == 462 && blockId == 254){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 241); 
} 
if(itemId == 482 && blockId == 254){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 241); 
} 
if(itemId == 462 && blockId == 241){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 57); 
} 
if(itemId == 482 && blockId == 241){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 57); 
} 
//Obsidian Chiseling
if(itemId == 462 && blockId == 49){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 253); 
} 
if(itemId == 482 && blockId == 49){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 253); 
} 
if(itemId == 462 && blockId == 253){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 236); 
} 
if(itemId == 482 && blockId == 253){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 236); 
} 
if(itemId == 462 && blockId == 236){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 49); 
} 
if(itemId == 482 && blockId == 236){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 49); 
}
//Lapis Chiseling
if(itemId == 462 && blockId == 22){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 252); 
} 
if(itemId == 482 && blockId == 22){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 252); 
} 
if(itemId == 462 && blockId == 252){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 244); 
} 
if(itemId == 482 && blockId == 252){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 244); 
} 
if(itemId == 462 && blockId == 244){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 22); 
} 
if(itemId == 482 && blockId == 244){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 22); 

}
//Iron Chiseling
if(itemId == 462 && blockId == 42){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 251); 
} 
if(itemId == 482 && blockId == 42){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 251); 
} 
if(itemId == 462 && blockId == 41){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 250); 
} 
if(itemId == 482 && blockId == 41){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 250); 
} 
 
if(itemId == 482 && blockId == 235){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 41); 
} 
if(itemId == 462 && blockId == 235){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 41); 
} 
if(itemId == 482 && blockId == 251){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 250); 
} 
if(itemId == 462 && blockId == 251){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 42); 
} 
if(itemId == 482 && blockId == 251){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 42); 
} 
if(itemId == 462 && blockId == 251){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 235); 
} 
if(itemId == 482 && blockId == 251){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 235); 
} 
if(itemId == 462 && blockId == 235){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 42); 
} 
if(itemId == 482 && blockId == 235){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 42); 
} 
/*Quartz Chiseling*/
if(itemId == 462 && blockId == 155){ 
if(blockDamage == 0){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 155, 2); 
} 
if(blockDamage == 1){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 155, 1);
}
if(blockDamage == 2){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 155, 1); 
} 
} 
if(itemId == 482 && blockId == 155){ 

if(blockDamage == 0){ 

Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 155, 2); 
} 
if(blockDamage == 1){
Level.destroyBlock(x, y, z, false);
setTile(x, y, z, 155, 1);
}
if(blockDamage == 2){ 
Level.destroyBlock(x, y, z, false); 
setTile(x, y, z, 155, 1); 
} 
} 
if(itemId == 510 | itemId == 457){ 
Level.setTile(x, y+1, z, 249); 
Level.setTile(x+1, y+1, z, 248); 
Player.clearInventorySlot(Player.getSelectedSlotId()); 
//Level.playSound(x, y, z,"random.break", 0.25, 100); 
} 
if(itemId == 457){ 
Level.setTile(x, y+1, z, 224); 
Level.setTile(x+1, y+1, z, 223); 
Player.clearInventorySlot(Player.getSelectedSlotId()); 
//Level.playSound(x, y, z,"random.break", 0.25, 100); 
} 
if(itemId == 319 && blockId == 249){ 
Player.addItemInventory(319, -1, 0); 
Level.dropItem(x+0.5, y, z+0.5, 0, 320, 1); 
} 
if(itemId == 363 && blockId == 249){ 
Player.addItemInventory(363, -1, 0); 
Level.dropItem(x+0.5, y, z+0.5, 0, 364, 1); 
} 
if(itemId == 365 && blockId == 249){ 
Player.addItemInventory(365, -1, 0); 
Level.dropItem(x+0.5, y, z+0.5, 0, 366, 1); 
} 
if(itemId == 392 && blockId == 249){ 
Player.addItemInventory(392, -1, 0); 
Level.dropItem(x+0.5, y, z+0.5, 0, 393, 1); 
} 
if(itemId == 319 && blockId == 224){ 
Player.addItemInventory(319, -1, 0); 
Level.dropItem(x+0.5, y, z+0.5, 0, 320, 1); 
} 
if(itemId == 363 && blockId == 224){ 
Player.addItemInventory(363, -1, 0); 
Level.dropItem(x+0.5, y, z+0.5, 0, 364, 1); 
} 
if(itemId == 365 && blockId == 224){ 
Player.addItemInventory(365, -1, 0); 
Level.dropItem(x+0.5, y, z+0.5, 0, 366, 1); 
} 
if(itemId == 392 && blockId == 224){ 
Player.addItemInventory(392, -1, 0); 
Level.dropItem(x+0.5, y, z+0.5, 0, 393, 1); 
} 
if(itemId==462 && Level.getGameMode() != 1){
if(Player.getCarriedItemData() < 149)
Entity.setCarriedItem(getPlayerEnt(), 462,
Player.getCarriedItemCount(),
Player.getCarriedItemData() + 1);
else{
Level.playSoundEnt(getPlayerEnt(), "random.break", 100, 100);
Player.clearInventorySlot(Player.getSelectedSlotId());
}
}
if(blockId==255){ 
//toolforge(); 
//closeMenu(); 
}  
}

 function modTick(){ 
/*Molten Iron*/
if(getTile(Player.getX(),Player.getY()-2,Player.getZ())==211 | getTile(Player.getX(),Player.getY()-2,Player.getZ())==210 | getTile(Player.getX(),Player.getY()-2,Player.getZ())==212 | getTile(Player.getX(),Player.getY()-2,Player.getZ())==213){
Entity.setFireTicks(Player.getEntity(), 20);
}
/*Guides*/
if(Player.getCarriedItem() == 410 && m1== false){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
try{ 
var layout = new android.widget.LinearLayout(ctx); 
layout.setOrientation(1);

var menuBtnF = new android.widget.Button(ctx); 
menuBtnF.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
if(Player.getCarriedItem() == 410){
p1();
nextBtn();
prevBtn();
closeBtn();
pageNum=0;
}else{
info.dismiss();
}
}}));
layout.addView(menuBtnF); 
menuBtnF.setBackgroundDrawable(interactimg);

info = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT); info.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)); 
info.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 340, 425); }catch(err){ print("An error occured: " + err); } }})); 
m1 = true;
}
else if(Player.getCarriedItem() != 410 && m1== true){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable(
			{
			run: function()
				{
					info.dismiss();
				}
			}));
m1 = false;
}

if(Player.getCarriedItem() == 412 && diary == false){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
try{ 
var layout = new android.widget.LinearLayout(ctx); 
layout.setOrientation(1);

var menuBtnF = new android.widget.Button(ctx); 
menuBtnF.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
if(getCarriedItem() == 412){
dp1();
closeBtn();
nextBtn();
prevBtn();
pageNum=2;
}else{
info.dismiss();
}
}}));
layout.addView(menuBtnF); 
menuBtnF.setBackgroundDrawable(interactimg);

info = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT); 
info.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)); 
info.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 340, 425); }catch(err){ print("An error occured: " + err); } }})); 
diary = true;
}
else if(Player.getCarriedItem() != 412 && diary == true){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable(
			{
			run: function()
				{
					info.dismiss();

				}
			}));
diary = false;
}

/*worldLoaded = ModPE.readData(Level.getWorldDir() +"Loaded");
if(worldLoaded == false){
Player.setInventorySlot(Player.getSelectedSlotId(), 410, 1, 0);
worldLoaded = true;
}
for(var i = 0; i < 37; i++){ 
if(Player.getInventorySlot(i) !=410 && worldLoaded == false){
Player.addItemInventory(410, 1, 0);
worldLoaded=true;
}
}
*/
var cx=Math.round(Player.getX()/16);
	var cz=Math.round(Player.getZ()/16);
	if(!ready && Level.getTile(parseInt(Player.getX()),parseInt(Player.getY())-2,parseInt(Player.getZ()))!=0)
		ready=true;
	if(ready){
		if(Math.floor(Math.random()*100)==10){
			var rnd=Math.floor(Math.random()*6)+1;
			var x,y=0;
			if(rnd<4)
				x=3;
			else
				x=-3
			rnd=Math.floor(Math.random()*6)+1;
			if(rnd<4)
				z=3;
			else
				z=-3
			if(Level.getTile((cx+x)*16,1,(cz+z)*16)!=4)
				Generate((cx+x)*16,(cz+z)*16);
			}
		for(var x=-3;x<3;x++){
			for(var z=-3;z<3;z++){
				if(Level.getTile((cx+x)*16,1,(cz+z)*16)!=4)
					Level.setTile((cx+x)*16,1,(cz+z)*16,4);
				}
			}
         }
/*Mattock*/ 
if(Player.getCarriedItem() == 484){ 
Block.setDestroyTime(17, 0.50); 
Block.setDestroyTime(162, 0.50);
Block.setDestroyTime(2, 0.20); 
Block.setDestroyTime(3, 0.20); 
Block.setDestroyTime(235, 0.20); 
Block.setDestroyTime(60, 0.20); 
Block.setDestroyTime(85, 0.50); 
Block.setDestroyTime(107, 0.50); 
Block.setDestroyTime(5, 0.50); 
Block.setDestroyTime(58, 0.70); 
Block.setDestroyTime(158, 0.50); 
Block.setDestroyTime(53, 0.50); 
Block.setDestroyTime(134, 0.50); 
Block.setDestroyTime(135, 0.50); 
Block.setDestroyTime(136, 0.50); 
Block.setDestroyTime(54, 0.70); 
} 
if(Player.getCarriedItem() !== 484){ 
Block.setDestroyTime(17, 2); 
Block.setDestroyTime(162, 2);
Block.setDestroyTime(2, 0.75); 
Block.setDestroyTime(3, 0.75); 
Block.setDestroyTime(60, 0.75); 
Block.setDestroyTime(85, 2); 
Block.setDestroyTime(107, 2); 
Block.setDestroyTime(5, 2); 
Block.setDestroyTime(58, 2.5); 
Block.setDestroyTime(158, 2); 
Block.setDestroyTime(53, 2); 
Block.setDestroyTime(134, 2); 
Block.setDestroyTime(135, 2); 

Block.setDestroyTime(136, 2); 
Block.setDestroyTime(54, 2.5); 
}
/*Lumber Axe*/
if(Player.getCarriedItem() == 481){ 
Block.setDestroyTime(17, 0.50);  
Block.setDestroyTime(162, 0.50);  
} 
if(Player.getCarriedItem() !== 481){ 
Block.setDestroyTime(17, 2);  
Block.setDestroyTime(162, 2);  
}
if(Player.getCarriedItem() == 468) { 
Block.setDestroyTime(17, 0.50);  
Block.setDestroyTime(162, 0.50);
} 
if(Player.getCarriedItem() !== 468) { 
Block.setDestroyTime(17, 2);  
Block.setDestroyTime(162, 2);
}
/*Pickaxe Destroy Times*/
if(getCarriedItem() == 454){
Block.setDestroyTime(1, 0.15);
Block.setDestroyTime(4, 0.20);
Block.setDestroyTime(15, 0.25);
Block.setDestroyTime(16, 0.30);
Block.setDestroyTime(21, 0.25);
Block.setDestroyTime(24, 0.25);
Block.setDestroyTime(98, 0.25);
Block.setDestroyTime(233, 0.25);
Block.setDestroyTime(232, 0.25);
Block.setDestroyTime(231, 0.25);
Block.setDestroyTime(230, 0.25);
Block.setDestroyTime(229, 0.25);
Block.setDestroyTime(228, 0.25);
Block.setDestroyTime(246, 0.25);
}
if(getCarriedItem() != 454){
Block.setDestroyTime(1, 2);
Block.setDestroyTime(4, 2);
Block.setDestroyTime(15, 2);
Block.setDestroyTime(16, 2);
Block.setDestroyTime(21, 2);
Block.setDestroyTime(24, 2);
Block.setDestroyTime(98, 2);
Block.setDestroyTime(233, 2);
Block.setDestroyTime(232, 2);
Block.setDestroyTime(231, 2);
Block.setDestroyTime(230, 2);
Block.setDestroyTime(229, 2);
Block.setDestroyTime(228, 2);
Block.setDestroyTime(246, 2);
}
/*Hammer Destroy Times*/
if(getCarriedItem() == 422){
Block.setDestroyTime(1, 0.15);
Block.setDestroyTime(4, 0.20);
}
if(getCarriedItem() != 422){
Block.setDestroyTime(1, 2);
Block.setDestroyTime(4, 2.15);
}
}


 function Generate(x,z){
	var y=0;
	for(var i=100;i>40;i--){
		if(Level.getTile(x,i,z)!=0){
			y=i;
			break;
			}
		}
	var structures={
1:[[x+(-3),y+(0),z+(-4),235,1],
[x+(0),y+(1),z+(1),5,1],
[x+(0),y+(0),z+(1),235,1],
[x+(0),y+(0),z+(2),235,1],
[x+(0),y+(0),z+(3),235,1],
[x+(0),y+(0),z+(4),235,1],
[x+(-4),y+(0),z+(1),235,1],
[x+(-4),y+(0),z+(2),235,1],
[x+(-4),y+(0),z+(3),235,1],
[x+(-4),y+(0),z+(4),235,1],
[x+(-5),y+(0),z+(1),235,1],
[x+(-5),y+(0),z+(2),235,1],
[x+(-1),y+(0),z+(1),235,1],
[x+(-1),y+(0),z+(2),235,1],
[x+(-1),y+(0),z+(3),235,1],
[x+(-1),y+(0),z+(4),235,1],
[x+(-1),y+(0),z+(5),235,1],
[x+(-2),y+(0),z+(1),235,1],
[x+(-2),y+(0),z+(2),235,1],
[x+(-2),y+(0),z+(3),235,1],
[x+(-2),y+(0),z+(4),235,1],
[x+(-2),y+(0),z+(5),235,1],
[x+(-3),y+(0),z+(1),235,1],
[x+(-3),y+(0),z+(2),235,1],
[x+(-3),y+(0),z+(3),235,1],
[x+(-3),y+(0),z+(4),235,1],
[x+(-3),y+(0),z+(5),235,1],
[x+(1),y+(0),z+(0),235,1],
[x+(2),y+(0),z+(0),235,1],
[x+(-4),y+(0),z+(0),235,1],
[x+(-5),y+(0),z+(0),235,1],
[x+(-3),y+(0),z+(-3),235,1],
[x+(-2),y+(0),z+(-3),235,1],
[x+(-1),y+(0),z+(-3),235,1],
[x+(0),y+(0),z+(-3),235,1],
[x+(0),y+(0),z+(-2),235,1],
[x+(-1),y+(0),z+(-2),235,1],
[x+(-2),y+(0),z+(-2),235,1],
[x+(-3),y+(0),z+(-2),235,1],
[x+(-3),y+(0),z+(0),235,1],
[x+(-3),y+(0),z+(-1),235,1],
[x+(-2),y+(0),z+(-1),235,1],
[x+(-2),y+(0),z+(0),235,1],
[x+(-1),y+(0),z+(0),235,1],
[x+(-1),y+(0),z+(-1),235,1],
[x+(-1),y+(0),z+(-1),235,1],
[x+(0),y+(0),z+(-1),235,1],
[x+(0),y+(0),z+(0),235,1]]
};

var str=0;
	  if((Level.getTile(x,y,z)==8 || Level.getTile(x,y,z)==9) && Level.getData(x,y,z)==0)
		str=1
	else if(Level.getTile(x,y,z)==12 && Level.getData(x,y,z)==0)
		str=0;
	if(str==0 || y==0)
		return;
	for(var i=0;i<structures[str].length;i++)
		Level.setTile(structures[str][i][0],structures[str][i][1],structures[str][i][2],structures[str][i][3]);
	}

function destroyBlock(x, y, z, side){ 
if(Player.getCarriedItem()==422 && Level.getGameMode() != 1){ 
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(getPlayerEnt(), 422, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else{
Level.playSoundEnt(getPlayerEnt(), "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); 
}
}
/*Mining Hammer*/
if(getCarriedItem() == 422){
if(getTile(x, y, z) == 1 | getTile(x, y, z) == 4 | getTile(x, y, z) == 16){
if(side==1){
if(getTile(x, y, z) == 1){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0.5, 4, 1);
}
if(Level.getTile(x, y, z) == 4 | Level.getTile(x, y, z) == 15){
Level.destroyBlock(x, y, z, true);
}
if(Level.getTile(x+1, y, z) == 1){
Level.destroyBlock(x+1, y, z, false);
Level.dropItem(x+1, y, z, 0.5, 4, 1);
}
if(Level.getTile(x+1, y, z) == 4 | Level.getTile(x+1, y, z) == 15){
Level.destroyBlock(x+1, y, z, true);
}
if(Level.getTile(x+1, y, z+1) == 1){
Level.destroyBlock(x+1, y, z+1, false);
Level.dropItem(x+1, y, z+1, 0.5, 4, 1);
}
if(Level.getTile(x+1, y, z+1) == 4 | Level.getTile(x+1, y, z+1) == 15){
Level.destroyBlock(x+1, y, z+1, true);
}
if(Level.getTile(x, y, z+1) == 1){
Level.destroyBlock(x, y, z+1, false);
Level.dropItem(x, y, z+1, 0.5, 4, 1);
}
if(Level.getTile(x, y, z+1) == 4 | Level.getTile(x, y, z+1) == 15){
Level.destroyBlock(x, y, z+1, true);
}
if(Level.getTile(x-1, y, z) == 1){
Level.destroyBlock(x-1, y, z, false);
Level.dropItem(x-1, y, z, 0.5, 4, 1);
}
if(Level.getTile(x-1, y, z) == 4 | Level.getTile(x-1, y, z) == 15){
Level.destroyBlock(x-1, y, z, true);
}
if(Level.getTile(x-1, y, z-1) == 1){
Level.destroyBlock(x-1, y, z-1, false);
Level.dropItem(x-1, y, z-1, 0.5, 4, 1);
}
if(Level.getTile(x-1, y, z-1) == 4 | Level.getTile(x-1, y, z-1) == 15){
Level.destroyBlock(x-1, y, z-1, true);
}
if(Level.getTile(x, y, z-1) == 1){
Level.destroyBlock(x, y, z-1, false);
Level.dropItem(x, y, z-1, 0.5, 4, 1);
}
if(Level.getTile(x, y, z-1) == 4 | Level.getTile(x, y, z-1) == 15){
Level.destroyBlock(x, y, z-1, true);
}
if(Level.getTile(x-1, y, z+1) == 1){
Level.destroyBlock(x-1, y, z+1, false);
Level.dropItem(x-1, y, z+1, 0.5, 4, 1);
}
if(Level.getTile(x-1, y, z+1) == 4 | Level.getTile(x-1, y, z+1) == 15){
Level.destroyBlock(x-1, y, z+1, true);
}
if(Level.getTile(x+1, y, z-1) == 1){
Level.destroyBlock(x+1, y, z-1, false);
Level.dropItem(x+1, y, z-1, 0.5, 4, 1);
}
if(Level.getTile(x+1, y, z-1) == 4 | Level.getTile(x+1, y, z-1) == 15){
Level.destroyBlock(x+1, y, z-1, true);
}
}
if(side==2){
if(getTile(x, y, z) == 1){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0.5, 4, 1);
}
if(Level.getTile(x, y, z) == 4 | Level.getTile(x, y, z) == 15){
Level.destroyBlock(x, y, z, true);
}
if(Level.getTile(x+1, y, z) == 1){
Level.destroyBlock(x+1, y, z, false);
Level.dropItem(x+1, y, z, 0.5, 4, 1);
}
if(Level.getTile(x+1, y, z) == 4 | Level.getTile(x+1, y, z) == 15){
Level.destroyBlock(x+1, y, z, true);
}
if(Level.getTile(x+1, y+1, z) == 1){
Level.destroyBlock(x+1, y+1, z, false);
Level.dropItem(x+1, y+1, z, 0.5, 4, 1);
}
if(Level.getTile(x+1, y+1, z) == 4 | Level.getTile(x+1, y+1, z) == 15){
Level.destroyBlock(x+1, y+1, z, true);
}
if(Level.getTile(x+1, y-1, z) == 1){
Level.destroyBlock(x+1, y-1, z, false);
Level.dropItem(x+1, y-1, z, 0.5, 4, 1);
}
if(Level.getTile(x+1, y-1, z) == 4 | Level.getTile(x+1, y-1, z) == 15){
Level.destroyBlock(x+1, y-1, z, true);
}
if(Level.getTile(x-1, y, z) == 1){
Level.destroyBlock(x-1, y, z, false);
Level.dropItem(x-1, y, z, 0.5, 4, 1);
}
if(Level.getTile(x-1, y, z) == 4 | Level.getTile(x-1, y, z) == 15){
Level.destroyBlock(x-1, y, z, true);
}
if(Level.getTile(x-1, y+1, z) == 1){
Level.destroyBlock(x-1, y+1, z, false);
Level.dropItem(x-1, y+1, z, 0.5, 4, 1);
}
if(Level.getTile(x-1, y-1, z) == 4 | Level.getTile(x-1, y+1, z) == 15){
Level.destroyBlock(x-1, y+1, z, true);
}
if(Level.getTile(x, y-1, z) == 1){
Level.destroyBlock(x, y-1, z, false);
Level.dropItem(x, y-1, z, 0.5, 4, 1);
}
if(Level.getTile(x, y-1, z) == 4 | Level.getTile(x, y-1, z) == 15){
Level.destroyBlock(x, y-1, z, true);
}
if(Level.getTile(x, y+1, z) == 1){
Level.destroyBlock(x, y+1, z, false);
Level.dropItem(x, y+1, z, 0.5, 4, 1);
}
if(Level.getTile(x, y+1, z) == 4 | Level.getTile(x, y+1, z) == 15){
Level.destroyBlock(x, y+1, z, true);
}
if(Level.getTile(x-1, y-1, z) == 1){
Level.destroyBlock(x-1, y-1, z, false);
Level.dropItem(x-1, y, z, 0.5, 4, 1);
}
if(Level.getTile(x-1, y-1, z) == 4 | Level.getTile(x-1, y-1, z) == 15){
Level.destroyBlock(x-1, y-1, z, true);
}
}
if(side==3){
if(getTile(x, y, z) == 1){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0.5, 4, 1);
}
if(Level.getTile(x, y, z) == 4 | Level.getTile(x, y, z) == 15){
Level.destroyBlock(x, y, z, true);
}
if(Level.getTile(x+1, y, z) == 1){
Level.destroyBlock(x+1, y, z, false);
Level.dropItem(x+1, y, z, 0.5, 4, 1);
}
if(Level.getTile(x+1, y, z) == 4 | Level.getTile(x+1, y, z) == 15){
Level.destroyBlock(x+1, y, z, true);
}
if(Level.getTile(x+1, y+1, z) == 1){
Level.destroyBlock(x+1, y+1, z, false);
Level.dropItem(x+1, y+1, z, 0.5, 4, 1);
}
if(Level.getTile(x+1, y+1, z) == 4 | Level.getTile(x+1, y+1, z) == 15){
Level.destroyBlock(x+1, y+1, z, true);
}
if(Level.getTile(x+1, y-1, z) == 1){
Level.destroyBlock(x+1, y-1, z, false);
Level.dropItem(x+1, y-1, z, 0.5, 4, 1);
}
if(Level.getTile(x+1, y-1, z) == 4 | Level.getTile(x+1, y-1, z) == 15){
Level.destroyBlock(x+1, y-1, z, true);
}
if(Level.getTile(x-1, y, z) == 1){
Level.destroyBlock(x-1, y, z, false);
Level.dropItem(x-1, y, z, 0.5, 4, 1);
}
if(Level.getTile(x-1, y, z) == 4 | Level.getTile(x-1, y, z) == 15){
Level.destroyBlock(x-1, y, z, true);
}
if(Level.getTile(x-1, y+1, z) == 1){
Level.destroyBlock(x-1, y+1, z, false);
Level.dropItem(x-1, y+1, z, 0.5, 4, 1);
}
if(Level.getTile(x-1, y-1, z) == 4 | Level.getTile(x-1, y+1, z) == 15){
Level.destroyBlock(x-1, y+1, z, true);
}
if(Level.getTile(x, y-1, z) == 1){
Level.destroyBlock(x, y-1, z, false);
Level.dropItem(x, y-1, z, 0.5, 4, 1);
}
if(Level.getTile(x, y-1, z) == 4 | Level.getTile(x, y-1, z) == 15){
Level.destroyBlock(x, y-1, z, true);
}
if(Level.getTile(x, y+1, z) == 1){
Level.destroyBlock(x, y+1, z, false);
Level.dropItem(x, y+1, z, 0.5, 4, 1);
}
if(Level.getTile(x, y+1, z) == 4 | Level.getTile(x, y+1, z) == 15){
Level.destroyBlock(x, y+1, z, true);
}
if(Level.getTile(x-1, y-1, z) == 1){
Level.destroyBlock(x-1, y-1, z, false);
Level.dropItem(x-1, y, z, 0.5, 4, 1);
}
if(Level.getTile(x-1, y-1, z) == 4 | Level.getTile(x-1, y-1, z) == 15){
Level.destroyBlock(x-1, y-1, z, true);
}
}
if(side==4){
if(getTile(x, y, z) == 1){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0.5, 4, 1);
}
if(Level.getTile(x, y, z) == 4 | Level.getTile(x, y, z) == 15){
Level.destroyBlock(x, y, z, true);
}
if(Level.getTile(x, y, z+1) == 1){
Level.destroyBlock(x, y, z+1, false);
Level.dropItem(x, y, z+1, 0.5, 4, 1);
}
if(Level.getTile(x, y, z+1) == 4 | Level.getTile(x, y, z+1) == 15){
Level.destroyBlock(x, y, z+1, true);
}
if(Level.getTile(x, y+1, z+1) == 1){
Level.destroyBlock(x, y+1, z+1, false);
Level.dropItem(x, y+1, z+1, 0.5, 4, 1);
}
if(Level.getTile(x, y+1, z+1) == 4 | Level.getTile(x, y+1, z+1) == 15){
Level.destroyBlock(x, y+1, z+1, true);
}
if(Level.getTile(x, y-1, z+1) == 1){
Level.destroyBlock(x, y-1, z+1, false);
Level.dropItem(x, y-1, z+1, 0.5, 4, 1);
}
if(Level.getTile(x, y-1, z+1) == 4 | Level.getTile(x, y-1, z+1) == 15){
Level.destroyBlock(x, y-1, z+1, true);
}
if(Level.getTile(x, y, z-1) == 1){
Level.destroyBlock(x, y, z-1, false);
Level.dropItem(x, y, z-1, 0.5, 4, 1);
}
if(Level.getTile(x, y, z-1) == 4 | Level.getTile(x, y, z-1) == 15){
Level.destroyBlock(x, y, z-1, true);
}
if(Level.getTile(x, y+1, z-1) == 1){
Level.destroyBlock(x, y+1, z-1, false);
Level.dropItem(x, y+1, z-1, 0.5, 4, 1);
}
if(Level.getTile(x, y-1, z-1) == 4 | Level.getTile(x, y+1, z-1) == 15){
Level.destroyBlock(x, y+1, z-1, true);
}
if(Level.getTile(x, y-1, z) == 1){
Level.destroyBlock(x, y-1, z, false);
Level.dropItem(x, y-1, z, 0.5, 4, 1);
}
if(Level.getTile(x, y-1, z) == 4 | Level.getTile(x, y-1, z) == 15){
Level.destroyBlock(x, y-1, z, true);
}
if(Level.getTile(x, y+1, z) == 1){
Level.destroyBlock(x, y+1, z, false);
Level.dropItem(x, y+1, z, 0.5, 4, 1);
}
if(Level.getTile(x, y+1, z) == 4 | Level.getTile(x, y+1, z) == 15){
Level.destroyBlock(x, y+1, z, true);
}
if(Level.getTile(x, y-1, z-1) == 1){
Level.destroyBlock(x, y-1, z-1, false);
Level.dropItem(x, y, z-1, 0.5, 4, 1);
}
if(Level.getTile(x, y-1, z-1) == 4 | Level.getTile(x, y-1, z-1) == 15){
Level.destroyBlock(x, y-1, z-1, true);
}
}
if(side==5){
if(getTile(x, y, z) == 1){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0.5, 4, 1);
}
if(Level.getTile(x, y, z) == 4 | Level.getTile(x, y, z) == 15){
Level.destroyBlock(x, y, z, true);
}
if(Level.getTile(x, y, z+1) == 1){
Level.destroyBlock(x, y, z+1, false);
Level.dropItem(x, y, z+1, 0.5, 4, 1);
}
if(Level.getTile(x, y, z+1) == 4 | Level.getTile(x, y, z+1) == 15){
Level.destroyBlock(x, y, z+1, true);
}
if(Level.getTile(x, y+1, z+1) == 1){
Level.destroyBlock(x, y+1, z+1, false);
Level.dropItem(x, y+1, z+1, 0.5, 4, 1);
}
if(Level.getTile(x, y+1, z+1) == 4 | Level.getTile(x, y+1, z+1) == 15){
Level.destroyBlock(x, y+1, z+1, true);
}
if(Level.getTile(x, y-1, z+1) == 1){
Level.destroyBlock(x, y-1, z+1, false);
Level.dropItem(x, y-1, z+1, 0.5, 4, 1);
}
if(Level.getTile(x, y-1, z+1) == 4 | Level.getTile(x, y-1, z+1) == 15){
Level.destroyBlock(x, y-1, z+1, true);
}
if(Level.getTile(x, y, z-1) == 1){
Level.destroyBlock(x, y, z-1, false);
Level.dropItem(x, y, z-1, 0.5, 4, 1);
}
if(Level.getTile(x, y, z-1) == 4 | Level.getTile(x, y, z-1) == 15){
Level.destroyBlock(x, y, z-1, true);
}
if(Level.getTile(x, y+1, z-1) == 1){
Level.destroyBlock(x, y+1, z-1, false);
Level.dropItem(x, y+1, z-1, 0.5, 4, 1);
}
if(Level.getTile(x, y-1, z-1) == 4 | Level.getTile(x, y+1, z-1) == 15){
Level.destroyBlock(x, y+1, z-1, true);
}
if(Level.getTile(x, y-1, z) == 1){
Level.destroyBlock(x, y-1, z, false);
Level.dropItem(x, y-1, z, 0.5, 4, 1);
}
if(Level.getTile(x, y-1, z) == 4 | Level.getTile(x, y-1, z) == 15){
Level.destroyBlock(x, y-1, z, true);
}
if(Level.getTile(x, y+1, z) == 1){
Level.destroyBlock(x, y+1, z, false);
Level.dropItem(x, y+1, z, 0.5, 4, 1);
}
if(Level.getTile(x, y+1, z) == 4 | Level.getTile(x, y+1, z) == 15){
Level.destroyBlock(x, y+1, z, true);
}
if(Level.getTile(x, y-1, z-1) == 1){
Level.destroyBlock(x, y-1, z-1, false);
Level.dropItem(x, y, z-1, 0.5, 4, 1);
}
if(Level.getTile(x, y-1, z-1) == 4 | Level.getTile(x, y-1, z-1) == 15){
Level.destroyBlock(x, y-1, z-1, true);
}
}
}
}
/*Smeltery Stuff*/
if(Level.getTile(x, y, z) == 228 && Level.getGameMode() != 1){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 411, 1);
Level.dropItem(x, y, z, 0, 229, 1);
}
if(Level.getTile(x, y, z) == 229 && Player.getCarriedItem() == 454){
Level.destroyBlock(x, y, z, true);
}
if(Level.getTile(x, y, z) == 246 && Player.getCarriedItem() == 454){
Level.destroyBlock(x, y, z, true);
}
if(Level.getTile(x, y, z) == 233){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 232, 1);
}
if(Level.getTile(x, y, z) == 232 && getCarriedItem() == 454){
Level.destroyBlock(x, y, z, true);
}
if(Level.getTile(x, y, z) == 231){
Level.destroyBlock(x, y, z, false);

Level.dropItem(x, y, z, 0, 230, 1);
}
if(Level.getTile(x, y, z) == 230 && getCarriedItem() == 454){
Level.destroyBlock(x, y, z, true);
}
/*Cactus Pickaxe*/
if(Player.getCarriedItem()==454 && Level.getGameMode() != 1){ 
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(getPlayerEnt(), 454, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else{
Level.playSoundEnt(getPlayerEnt(), "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); 
}
}
if(Level.getTile(x, y, z) == 1 && getCarriedItem() == 454){
if(Level.getData(x, y, z) == 0){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 4, 1);
}
if(Level.getData(x, y, z) == 1){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 1, 1, 1);
}
if(Level.getData(x, y, z) == 2){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 1, 1, 2);
}
if(Level.getData(x, y, z) == 3){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 1, 1, 3);
}
if(Level.getData(x, y, z) == 4){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 1, 1, 4);
}
if(Level.getData(x, y, z) == 5){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 1, 1, 5);
}
if(Level.getData(x, y, z) == 6){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 1, 1, 6);
}
}
if(Level.getTile(x, y, z) == 4 && getCarriedItem() == 454){
Level.destroyBlock(x, y, z, true);
}
if(Level.getTile(x, y, z) == 15 && getCarriedItem() == 454){
Level.destroyBlock(x, y, z, true);
}
if(Level.getTile(x, y, z) == 16 && getCarriedItem() == 454){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 263, 1);
}
if(Level.getTile(x, y, z) == 21 && getCarriedItem() == 454){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 351, 4, 4);
}
if(Level.getTile(x, y, z) == 24 && getCarriedItem() == 454){
if(Level.getData(x, y, z) == 0){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 24, 1, 0);
}
if(Level.getData(x, y, z) == 1){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 24, 1, 1);
}
if(Level.getData(x, y, z) == 2){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 24, 1, 2);
}
}
if(Level.getTile(x, y, z) == 98 && getCarriedItem() == 454){
if(Level.getData(x, y, z) == 0){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 98, 1, 0);
}
if(Level.getData(x, y, z) == 1){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 98, 1, 1);
}
if(Level.getData(x, y, z) == 2){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 98, 1, 2);
}
if(Level.getData(x, y, z) == 3){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 98, 1, 3);
}
}
if(Level.getTile(x, y, z) == 235 && Level.getGameMode() != 1){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 234, 1);
}
if(Level.getTile(x, y, z) == 234 && Level.getGameMode() != 1){
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0, 234, 1);
}
if(Level.getTile(x, y, z) == 249){ 
Level.destroyBlock(x, y, z, false); 
Level.destroyBlock(x+1, y, z, false); 
Level.dropItem(x+0.5, y, z+0.5, 0, 510, 1); 
} 
if(Level.getTile(x, y, z) == 248){ 
Level.destroyBlock(x, y, z, false); 
Level.destroyBlock(x-1, y, z, false);
Level.dropItem(x+0.5, y, z+0.5, 0, 510, 1); 
} 
if(Level.getTile(x, y, z) == 224){ 
Level.destroyBlock(x, y, z, false); 
Level.destroyBlock(x+1, y, z, false); 
Level.dropItem(x+0.5, y, z+0.5, 0, 457, 1); 
} 
if(Level.getTile(x, y, z) == 423){ 
Level.destroyBlock(x, y, z, false); 
Level.destroyBlock(x-1, y, z, false);
Level.dropItem(x+0.5, y, z+0.5, 0, 457, 1); 
} 
if(Level.getTile(x, y, z) == 180){ 
Level.destroyBlock(x, y, z, false); 
Level.dropItem(x, y, z, 0, 180, 1); 
} 
if(Player.getCarriedItem()==481 && Level.getGameMode() != 1){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(getPlayerEnt(), 481, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else{
Level.playSoundEnt(getPlayerEnt(), "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); 
}
}
if(Player.getCarriedItem()==468 && Level.getGameMode() != 1){ 
if(Player.getCarriedItemData() < 149) 
Entity.setCarriedItem(getPlayerEnt(), 468, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else{ 
Level.playSoundEnt(getPlayerEnt(), "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); 
}
}
if(Player.getCarriedItem()==484 && Level.getGameMode() != 1){ 
if(Player.getCarriedItemData() < 130) 
Entity.setCarriedItem(getPlayerEnt(), 484, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); 
else{ 
Level.playSoundEnt(getPlayerEnt(), "random.break", 100, 100); 
Player.clearInventorySlot(Player.getSelectedSlotId()); 
} 
} 
if(getTile(x, y, z) == 17 && getCarriedItem()==468){
preventDefault();

Level.destroyBlock(x, y, z, true); 

if(Level.getTile(x, y+1, z) == 17)
Level.destroyBlock(x, y+1, z, true); 

if(Level.getTile(x, y+2, z) == 17)
Level.destroyBlock(x, y+2, z, true); 

if(Level.getTile(x, y+3, z) == 17)
Level.destroyBlock(x, y+3, z, true);

 if(Level.getTile(x, y+4, z) == 17)
Level.destroyBlock(x, y+4, z, true); 

if(Level.getTile(x, y+5, z) == 17)
Level.destroyBlock(x, y+5, z, true); 

if(Level.getTile(x, y+6, z) == 17)
Level.destroyBlock(x, y+6, z, true); 

if(Level.getTile(x, y+7, z) == 17)
Level.destroyBlock(x, y+7, z, true);

if(Level.getTile(x, y+8, z) == 17)
Level.destroyBlock(x, y+8, z, true); 

if(Level.getTile(x, y+9, z) == 17)
Level.destroyBlock(x, y+9, z, true); 

if(Level.getTile(x, y+10, z) == 17)
Level.destroyBlock(x, y+10, z, true);

 if(Level.getTile(x, y+11, z) == 17)
Level.destroyBlock(x, y+11, z, true); 

if(Level.getTile(x, y+12, z) == 17)
Level.destroyBlock(x, y+12, z, true); 

if(Level.getTile(x, y+13, z) == 17)
Level.destroyBlock(x, y+13, z, true); 

if(Level.getTile(x, y+14, z) == 17)
Level.destroyBlock(x, y+14, z, true);
}
if(getTile(x, y, z) == 17 && getCarriedItem()==481){
preventDefault();

Level.destroyBlock(x, y, z, true); 

if(Level.getTile(x, y+1, z) == 17)
Level.destroyBlock(x, y+1, z, true); 

if(Level.getTile(x, y+2, z) == 17)
Level.destroyBlock(x, y+2, z, true); 

if(Level.getTile(x, y+3, z) == 17)
Level.destroyBlock(x, y+3, z, true);

 if(Level.getTile(x, y+4, z) == 17)
Level.destroyBlock(x, y+4, z, true); 

if(Level.getTile(x, y+5, z) == 17)
Level.destroyBlock(x, y+5, z, true); 

if(Level.getTile(x, y+6, z) == 17)
Level.destroyBlock(x, y+6, z, true); 

if(Level.getTile(x, y+7, z) == 17)
Level.destroyBlock(x, y+7, z, true);

if(Level.getTile(x, y+8, z) == 17)
Level.destroyBlock(x, y+8, z, true); 

if(Level.getTile(x, y+9, z) == 17)
Level.destroyBlock(x, y+9, z, true); 

if(Level.getTile(x, y+10, z) == 17)
Level.destroyBlock(x, y+10, z, true);

 if(Level.getTile(x, y+11, z) == 17)
Level.destroyBlock(x, y+11, z, true); 

if(Level.getTile(x, y+12, z) == 17)
Level.destroyBlock(x, y+12, z, true); 

if(Level.getTile(x, y+13, z) == 17)
Level.destroyBlock(x, y+13, z, true); 

if(Level.getTile(x, y+14, z) == 17)
Level.destroyBlock(x, y+14, z, true);
}
}

/*
function troublePage(){ 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){ try{ 
var troubleLayout = new android.widget.LinearLayout(ctx); 
var troubleScroll = new android.widget.ScrollView(ctx); 
troubleLayout.setOrientation(1); 

trouble = new android.widget.PopupWindow(troubleLayout, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight()); 
trouble.setBackgroundDrawable(mainimg); 
trouble.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0); }catch(error){ print("An error occured: " + error);  }}})); }

function getBroadswordSharpI(){ 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){ try{ 
var troubleLayout = new android.widget.LinearLayout(ctx); 
var troubleScroll = new android.widget.ScrollView(ctx); 
troubleLayout.setOrientation(1); 

trouble = new android.widget.PopupWindow(troubleLayout, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight()); 
trouble.setBackgroundDrawable(bsharp1); 
trouble.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0); }catch(error){ print("An error occured: " + error);  }}})); }

 function closeCrafting(){ 
ctx.runOnUiThread(new java.lang.Runnable(){ 

run: function(){ 
try{ 
xCrafting = new android.widget.PopupWindow(); 
xCUI = new android.widget.PopupWindow(); 

var position = new android.widget.LinearLayout(ctx); 
var spot = new android.widget.LinearLayout(ctx); 

var btx = new android.widget.Button(ctx); 

btx.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
if(exitNumber==1){
trouble.dismiss();  
toolforge();
closeMenu();
xCrafting.dismiss();
xRapier.dismiss();
 }
else if(exitNumber==2){
trouble.dismiss();
toolforge();
closeMenu();
xCrafting.dismiss();
xRapier.dismiss();
 }
else if(exitNumber==3){
closeMenu();
toolforge();
xCrafting.dismiss();
xSword.dismiss();
xRapier.dismiss();
}
else if(exitNumber==4){
trouble.dismiss();
closeMenu();
toolforge();
xSword.dismiss();
xCrafting.dismiss(); }}}));  

position.setOrientation(android.widget.LinearLayout.HORIZONTAL); 
spot.setOrientation(android.widget.LinearLayout.VERTICAL); 

btx.setBackgroundDrawable(backimg); 

position.addView(btx); 
xCUI.setContentView(spot); 
xCUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
xCUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
xCUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP| android.view.Gravity.RIGHT, 0, 15); 
xCrafting.setContentView(position); 
xCrafting.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
xCrafting.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
xCrafting.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP| android.view.Gravity.CENTER, -180, 0); } catch(err) { print("Error: " + err); } } }); }

function getRapier(){ 
ctx.runOnUiThread(new java.lang.Runnable(){ 
run: function(){ 
try{ 
xRapier = new android.widget.PopupWindow(); 

var position = new android.widget.LinearLayout(ctx); 
var spot = new android.widget.LinearLayout(ctx); 

var rapier = new android.widget.Button(ctx); 

rapier.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
if(exitNumber==1){
if(Player.checkForInventoryItem(406, 1, 0) && Player.checkForInventoryItem(500, 1, 0)){
addItemInventory(503,1); 
Player.removeItemInventory(406, 1, 0);
Player.removeItemInventory(500, 1);
gi = true; 
 } }
if(exitNumber==2){
if(Player.checkForInventoryItem(406, 1, 0) && Player.checkForInventoryItem(503, 1, 0)){
addItemInventory(505,1); 
Player.removeItemInventory(406, 1, 0);
Player.removeItemInventory(503, 1);
gi = true; 
 } }
if(exitNumber==3){
if(Player.checkForInventoryItem(406, 1, 0) && Player.checkForInventoryItem(505, 1)){
addItemInventory(506,1); 
Player.removeItemInventory(406, 1, 0);
Player.removeItemInventory(505, 1);
ModPE.showTipMessage("The Item: Rapier Sharpness III has been added to your Inventory");
gi = true; 
 } }
}}));  

position.setOrientation(android.widget.LinearLayout.HORIZONTAL); 
spot.setOrientation(android.widget.LinearLayout.VERTICAL); 

rapier.setBackgroundDrawable(rsharp);

position.addView(rapier);
xRapier.setContentView(position); 
xRapier.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
xRapier.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
xRapier.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP| android.view.Gravity.CENTER, 85, 91); } catch(err) { print("Error: " + err); } } }); }

function getRapierSharpIII(){ 
ctx.runOnUiThread(new java.lang.Runnable(){ 
run: function(){ 
try{ 
xSword = new android.widget.PopupWindow(); 

var position = new android.widget.LinearLayout(ctx); 
var spot = new android.widget.LinearLayout(ctx); 

var rapier = new android.widget.Button(ctx); 

rapier.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
if(exitNumber==4){
if(Player.checkForInventoryItem(406, 1, 0) && Player.checkForInventoryItem(495, 1)){
addItemInventory(494, 1); 
Player.removeItemInventory(406, 1, 0);
Player.removeItemInventory(495, 1);
gi = true; 
}}}}));  

position.setOrientation(android.widget.LinearLayout.HORIZONTAL); 
spot.setOrientation(android.widget.LinearLayout.VERTICAL); 

rapier.setBackgroundDrawable(rsharp3);

position.addView(rapier);
xSword.setContentView(position); 
xSword.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
xSword.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
xSword.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP| android.view.Gravity.CENTER, 0, 0); } catch(err) { print("Error: " + err);  }} }); }


function getBroadsword(){ 
ctx.runOnUiThread(new java.lang.Runnable(){ 
run: function(){ 
try{ 
xSword = new android.widget.PopupWindow(); 

var position = new android.widget.LinearLayout(ctx); 
var spot = new android.widget.LinearLayout(ctx); 

var rapier = new android.widget.Button(ctx); 

rapier.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
if(exitNumber==4){
if(Player.checkForInventoryItem(406, 1, 0) && Player.checkForInventoryItem(495, 1, 0)){
addItemInventory(494, 1); 
Player.removeItemInventory(406, 1, 0);
Player.removeItemInventory(495, 1);
gi = true; 
}}}}));  

position.setOrientation(android.widget.LinearLayout.HORIZONTAL); 
spot.setOrientation(android.widget.LinearLayout.VERTICAL); 

rapier.setBackgroundDrawable(tapsword);

position.addView(rapier);
xSword.setContentView(position); 
xSword.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
xSword.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
xSword.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP| android.view.Gravity.CENTER, 0, 400); } catch(err) { print("Error: " + err);  }} }); }



function toolforge(){ 
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
try{ 
var menuLayout = new android.widget.LinearLayout(ctx); 
menuLayout.setOrientation(1); 

var btn = android.widget.Button(ctx); 
var btx = android.widget.Button(ctx); 
var btc = android.widget.Button(ctx); 
var btr = android.widget.Button(ctx); 
var btz = android.widget.Button(ctx); 
var bte = android.widget.Button(ctx); 
var btt = android.widget.Button(ctx); 
var btw = android.widget.Button(ctx); 
var btm = android.widget.Button(ctx); 
var bti = android.widget.Button(ctx); 
var btd = android.widget.Button(ctx); 

btn.setText("Rapier Sharpness I"); 
btn.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
troublePage(); 
closeCrafting();
menu.dismiss(); 
xCUI.dismiss();
getRapier();
xGUI.dismiss();
exitNumber=1;
 }})); 

btc.setText("Rapier Sharpness II"); 
btc.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
menu.dismiss();
getRapierSharpII();
getRapier();
closeCrafting();
xCUI.dismiss();
xGUI.dismiss();
exitNumber=2; }}));

btd.setText("Rapier Sharpness III"); 
btd.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
menu.dismiss();
getRapierSharpIII();
getRapier();
closeCrafting();
xCUI.dismiss();
xGUI.dismiss();
exitNumber=3; }}));
 bti.setText("Dagger Sharpness I(1 Dagger 1 Quartz)"); bti.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
for(var i = 0; i < 37; i++){ if(Player.getInventorySlot(i)==406&&g==false){ g = true; for(var e = 0; e < 37; e++){ if(Player.getInventorySlot(e)==490&&gi==false){ addItemInventory(489,1); addItemInventory(406,-1); addItemInventory(490,-1); gi = true; }}}}}})); btt.setText("Dagger Sharpness II(1 Dagger Sharp I1 Quartz)"); btt.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ for(var i = 0; i < 37; i++){ if(Player.getInventorySlot(i)==406&&g==false){ g = true; for(var e = 0; e < 37; e++){ if(Player.getInventorySlot(e)==489&&gi==false){ addItemInventory(488,1); addItemInventory(406,-5); addItemInventory(489,-1); gi = true; }}}}}})); bte.setText("Dagger Sharpness III(1 Dagger Sharp II 10 Quartz)"); bte.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ for(var i = 0; i < 37; i++){ if(Player.getInventorySlot(i)==406&&g==false){ g = true; for(var e = 0; e < 37; e++){ if(Player.getInventorySlot(e)==490&&gi==false){ addItemInventory(486,1); addItemInventory(406,-10); addItemInventory(487,-1); gi = true; }}}}}})); btr.setText("Rapier Fiery II(1 Rapier Firey I, 5 Blaze dust)"); btr.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ for(var i = 0; i < 37; i++) { if(Player.getInventorySlot(i)==502&&g==false){ g = true; for(var e = 0; e < 37; e++){ if(Player.getInventorySlot(e)==503&&gi==false){ addItemInventory(507,1); addItemInventory(502,-5); addItemInventory(504,-1); gi = true; }}}}}})); btw.setText("Rapier Fiery III(1 Rapier Firey II, 5 Blaze dust)"); btw.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ for(var i = 0; i < 37; i++) { if(Player.getInventorySlot(i)==502&&g==false){ g = true; for(var e = 0; e < 37; e++){ if(Player.getInventorySlot(e)==507&&gi==false){ addItemInventory(508,1); addItemInventory(502,-5); addItemInventory(507,-1); gi = true; }}}}}})); btx.setText("Rapier Fiery I(1 Rapier I, 1 Blaze dust)"); btx.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ for(var i = 0; i < 37; i++) { if(Player.getInventorySlot(i)==502&&g==false){ g = true; for(var e = 0; e < 37; e++){ if(Player.getInventorySlot(e)==500&&gi==false){ addItemInventory(504,1); addItemInventory(502,-1); addItemInventory(500,-1); gi = true; }}}}}})); 

btm.setText("Broadsword Sharpness I"); 
btm.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
getBroadswordSharpI(); 
closeCrafting();
menu.dismiss(); 
xCUI.dismiss();
getBroadsword();
xGUI.dismiss();
exitNumber=4;
 gi = true; }})); 

btz.setText("Broadsword Sharpness II(1 Broadsword Sharp I, 1 Quartz)"); 
btz.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
for(var i = 0; i < 37; i++) { 
if(Player.getInventorySlot(i)==406&&g==false){ 
g = true; 
for(var e = 0; e < 37; e++){ 
if(Player.getInventorySlot(e)==494&&gi==false){ 
addItemInventory(493,1); 
addItemInventory(406,-5); 
addItemInventory(494,-1); 
gi = true; }}}} }})); 

menuLayout.addView(btn); 
menuLayout.addView(btc); 
menuLayout.addView(btd);
menuLayout.addView(btm);
menuLayout.addView(btx); 
menuLayout.addView(btz); 
menuLayout.addView(bte); 
menuLayout.addView(btw); 
menuLayout.addView(btr); 
menuLayout.addView(btt); 
menuLayout.addView(bti); 

menu = new android.widget.PopupWindow(menuLayout, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight()); 
menu.setBackgroundDrawable(mainimg); 
menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0); } catch(err){ print("Error: " + err); }}}));} 

/*
function leaveGame(){ 
ctx.runOnUiThread(new java.lang.Runnable(){ 

run: function(){ 
if(GUI != null){ 
GUI.dismiss(); } 

if(menu != null){ 
menu.dismiss(); } 

if(xGUI != null){ 
xGUI.dismiss(); } 

if(xCUI != null){ 
xCUI.dismiss(); } } }); } 

function closeMenu(){ 
ctx.runOnUiThread(new java.lang.Runnable(){ 
run: function(){ 
try{ 
xGUI = new android.widget.PopupWindow(); 
xCUI = new android.widget.PopupWindow(); 

var position = new android.widget.LinearLayout(ctx); 
var spot = new android.widget.LinearLayout(ctx); 

var btx = new android.widget.Button(ctx); 
var xChat = new android.widget.Button(ctx); 
btx.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 

menu.dismiss(); 
xGUI.dismiss(); 
xCUI.dismiss(); 
gi = false; 
g = false; } })); 
btx.setBackgroundDrawable(backimg);

position.setOrientation(android.widget.LinearLayout.HORIZONTAL); 
spot.setOrientation(android.widget.LinearLayout.VERTICAL); 
xChat.setBackgroundColor(android.graphics.Color.TRANSPARENT); 
position.addView(btx); 
spot.addView(xChat); 

xCUI.setContentView(spot); 
xCUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
xCUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
xCUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP| android.view.Gravity.RIGHT, 0, 15); 

xGUI.setContentView(position); 
xGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
xGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
xGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP| android.view.Gravity.CENTER, 357, 0); } catch(err) { print("Error: " + err); } } }); }

var img1 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/Tinker's Construct/getrsharp1.png");
var img2 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/Tinker's Construct/back.png");
var img3 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/Tinker's Construct/taprapier.png");
var img4 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/Tinker's Construct/getrsharp2.png");
var img5 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/Tinker's Construct/getrsharp3.png");
var img6 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/Tinker's Construct/getbsharp1.png");
var img7 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/Tinker's Construct/tapsword.png");

var mainimg = new android.graphics.drawable.BitmapDrawable(img1);
var backimg = new android.graphics.drawable.BitmapDrawable(img2);
var rsharp = new android.graphics.drawable.BitmapDrawable(img3);
var rsharp2 = new android.graphics.drawable.BitmapDrawable(img4);
var rsharp3 = new android.graphics.drawable.BitmapDrawable(img5);
var bsharp1 = new android.graphics.drawable.BitmapDrawable(img6);
var tapsword = new android.graphics.drawable.BitmapDrawable(img7);
*/

function nextBtn(){ 
ctx.runOnUiThread(new java.lang.Runnable(){ 
run: function(){ 
try{ 
next = new android.widget.PopupWindow(); 

var position = new android.widget.LinearLayout(ctx); 
var spot = new android.widget.LinearLayout(ctx); 

var btn = new android.widget.Button(ctx); 
btn.setText("Next Page");

btn.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
if(pageNum==0){
g1.dismiss();
p2();
exit.dismiss();
next.dismiss();
prev.dismiss();
prevBtn();
nextBtn();
closeBtn();
pageNum=1;
}
else if(pageNum==2){
dg1.dismiss();
dp2();
exit.dismiss();
next.dismiss();
prev.dismiss();
prevBtn();
nextBtn();
closeBtn();
pageNum=3;
}
else if(pageNum==3){
dg2.dismiss();
dp3();
exit.dismiss();
next.dismiss();
prev.dismiss();
prevBtn();
nextBtn();
closeBtn();
pageNum=4;
}
else if(pageNum==4){
dg3.dismiss();
dp4();
exit.dismiss();
next.dismiss();
prev.dismiss();
prevBtn();
nextBtn();
closeBtn();
pageNum=5;
}
else if(pageNum==5){
dg4.dismiss();
dp5();
exit.dismiss();
next.dismiss();
prev.dismiss();
prevBtn();
nextBtn();
closeBtn();
pageNum=6;
}
else if(pageNum==6){
dg5.dismiss();
dp6();
exit.dismiss();
next.dismiss();
prev.dismiss();
prevBtn();
nextBtn();
closeBtn();
pageNum=7;
}}}));  

position.setOrientation(android.widget.LinearLayout.HORIZONTAL); 
spot.setOrientation(android.widget.LinearLayout.VERTICAL); 

position.addView(btn);
next.setContentView(position); 
next.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
next.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
next.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP| android.view.Gravity.CENTER, 350, 0); } catch(err) { print("Error: " + err);  }} }); }

function prevBtn(){ 
ctx.runOnUiThread(new java.lang.Runnable(){ 
run: function(){ 
try{ 
prev = new android.widget.PopupWindow(); 

var position = new android.widget.LinearLayout(ctx); 
var spot = new android.widget.LinearLayout(ctx); 

var btn = new android.widget.Button(ctx); 
btn.setText("Prev Page");

btn.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
if(pageNum==1){
g2.dismiss();
p1();
exit.dismiss();
next.dismiss();
prev.dismiss();
prevBtn();
nextBtn();
closeBtn();
pageNum=0;
}
if(pageNum==3){
dg2.dismiss();
dp1();
exit.dismiss();
next.dismiss();
prev.dismiss();
prevBtn();
nextBtn();
closeBtn();
pageNum=2;
}
if(pageNum==4){
dg3.dismiss();
dp2();
exit.dismiss();
next.dismiss();
prev.dismiss();
prevBtn();
nextBtn();
closeBtn();
pageNum=3;
}
if(pageNum==5){
dg4.dismiss();
dp3();
exit.dismiss();
next.dismiss();
prev.dismiss();
prevBtn();
nextBtn();
closeBtn();
pageNum=4;
}
if(pageNum==6){
dg5.dismiss();
dp4();
exit.dismiss();
next.dismiss();
prev.dismiss();
prevBtn();
nextBtn();
closeBtn();
pageNum=5;
}
if(pageNum==7){
dg6.dismiss();
dp5();
exit.dismiss();
next.dismiss();
prev.dismiss();
prevBtn();
nextBtn();
closeBtn();
pageNum=6;
}}}));  

position.setOrientation(android.widget.LinearLayout.HORIZONTAL); 
spot.setOrientation(android.widget.LinearLayout.VERTICAL); 

position.addView(btn);
prev.setContentView(position); 
prev.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
prev.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
prev.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP| android.view.Gravity.CENTER, 350, 50); } catch(err) { print("Error: " + err);  }} }); }

function closeBtn(){ 
ctx.runOnUiThread(new java.lang.Runnable(){ 
run: function(){ 
try{ 
exit = new android.widget.PopupWindow(); 

var position = new android.widget.LinearLayout(ctx); 
var spot = new android.widget.LinearLayout(ctx); 

var btn = new android.widget.Button(ctx); 
btn.setText("Close");

btn.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
if(pageNum==0){
g1.dismiss();

prev.dismiss();
next.dismiss();
exit.dismiss();
pageNum=0;
}
else if(pageNum==1){
g2.dismiss();

prev.dismiss();
next.dismiss();
exit.dismiss();
pageNum=0;
}
else if(pageNum==2){
dg1.dismiss();
prev.dismiss();
next.dismiss();
exit.dismiss();
pageNum=0;
}
else if(pageNum==3){
dg2.dismiss();
prev.dismiss();
next.dismiss();
exit.dismiss();
pageNum=0;
}
else if(pageNum==4){
dg3.dismiss();
prev.dismiss();
next.dismiss();
exit.dismiss();
pageNum=0;
}
else if(pageNum==5){
dg4.dismiss();
prev.dismiss();
next.dismiss();
exit.dismiss();
pageNum=0;
}
else if(pageNum==6){
dg5.dismiss();
prev.dismiss();
next.dismiss();
exit.dismiss();
pageNum=0;
}
else if(pageNum==7){
dg6.dismiss();
prev.dismiss();
next.dismiss();
exit.dismiss();
pageNum=0;
}}}));  



position.setOrientation(android.widget.LinearLayout.HORIZONTAL); 
spot.setOrientation(android.widget.LinearLayout.VERTICAL); 

position.addView(btn);
exit.setContentView(position); 
exit.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
exit.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); 
exit.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP| android.view.Gravity.CENTER, 350, 100); } catch(err) { print("Error: " + err);  }} }); }


function p1(){ 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
try{ 
var menuLayout = new android.widget.LinearLayout(ctx); 
var menuScroll = new android.widget.ScrollView(ctx); 
var menuLayout1 = new android.widget.LinearLayout(ctx); 
menuLayout.setOrientation(1); 
menuLayout1.setOrientation(1);

menuScroll.addView(menuLayout); 
menuLayout1.addView(menuScroll);

var title = new android.widget.TextView(ctx);
title.setText("                                                          Materials and You");
title.setTextSize(30);
menuLayout.addView(title);
title.setTextColor(android.graphics.Color.BLACK);

var title1 = new android.widget.TextView(ctx);
title1.setText("                                                                                                  Surviving the first day and beyond");
title1.setTextSize(17);
menuLayout.addView(title1);
title1.setTextColor(android.graphics.Color.BLACK);

var author = new android.widget.TextView(ctx);
author.setText("     Volume 1\n     By Skyla *Modified by minecraftmuse3");
author.setTextSize(17);
menuLayout.addView(author);
author.setTextColor(android.graphics.Color.BLACK);

var intro = new android.widget.TextView(ctx);
intro.setText("\n      Welcome to the first edition of Materials and You: Surviving the first day and beyond. Within these pages you will find the first steps to\n     making the tools and materials you need to survive.\n\n     This book is a magic copy; it updates whenever the original has been modified. Check back occasionally for information on new things");
intro.setTextSize(16);
menuLayout.addView(intro);
intro.setTextColor(android.graphics.Color.BLACK);

var pattern = new android.widget.TextView(ctx);
pattern.setText("\n     The first step in making tools is crafting a blank pattern. It is a blank slate to stamp a shape into, providing a reference for future creations.\n     The patterns are shaped on the Stencil Table or are used as tabletops. You can shape a material with the pattern, then combine parts in the\n     Crafting Table.");
pattern.setTextSize(16);
menuLayout.addView(pattern);
pattern.setTextColor(android.graphics.Color.BLACK);

g1 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight()); 
//g1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK)); 
g1.setBackgroundDrawable(mainimg);
g1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0); }catch(error){ print("An error occured: " + error); } }})); }

function p2(){ 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
try{ 
var menuLayout = new android.widget.LinearLayout(ctx); 
var menuScroll = new android.widget.ScrollView(ctx); 
var menuLayout1 = new android.widget.LinearLayout(ctx); 
menuLayout.setOrientation(1); 
menuLayout1.setOrientation(1);

menuScroll.addView(menuLayout); 
menuLayout1.addView(menuScroll);

var title = new android.widget.TextView(ctx);
title.setText("                                                            The Smeltery");
title.setTextSize(30);
menuLayout.addView(title);
title.setTextColor(android.graphics.Color.BLACK);

var desc = new android.widget.TextView(ctx);
desc.setText("     Once you're well established, you can begin to process metals in a more efficient manner. The scope\n     of the smeltery is beyond this volume, but a few recipes will help you get started.\n\n     Note: The Smeltery is required to process all metals, including iron.\n");
desc.setTextSize(16);
menuLayout.addView(desc);
desc.setTextColor(android.graphics.Color.BLACK);

var groutAndBrick = new android.widget.TextView(ctx);
groutAndBrick.setText("     Grout:\n     Crafted with 2 Clay(Item) and 1 Gravel\n");
groutAndBrick.setTextSize(16);
menuLayout.addView(groutAndBrick);
groutAndBrick.setTextColor(android.graphics.Color.BLACK);

var Brick = new android.widget.TextView(ctx);
Brick.setText("     Seared Brick (Block):\n     Crafted with 4 Seared Brick(Item) in the StoneCutter\n");
Brick.setTextSize(16);
menuLayout.addView(Brick);
Brick.setTextColor(android.graphics.Color.BLACK);

var control = new android.widget.TextView(ctx);
control.setText("     Smeltery Controller:\n     Crafted with 8 Seared Brick(Block) and 1 Furnace\n");
control.setTextSize(16);
menuLayout.addView(control);
control.setTextColor(android.graphics.Color.BLACK);

var help = new android.widget.TextView(ctx);
help.setText("     If you ever find yourself without this book, a new one is simple to make. Other books can be made from this one as well.");
help.setTextSize(16);
menuLayout.addView(help);
help.setTextColor(android.graphics.Color.BLACK);

g2 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight()); 
//g2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK)); 
g2.setBackgroundDrawable(mainimg);
g2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0); }catch(error){ print("An error occured: " + error); } }})); }

function dp1(){ 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
try{ 
var menuLayout = new android.widget.LinearLayout(ctx); 
var menuScroll = new android.widget.ScrollView(ctx); 
var menuLayout1 = new android.widget.LinearLayout(ctx); 
menuLayout.setOrientation(1); 
menuLayout1.setOrientation(1);

menuScroll.addView(menuLayout); 
menuLayout1.addView(menuScroll);

var log1 = new android.widget.TextView(ctx);
log1.setText("                                                                                       Tinker's Log #1:");
log1.setTextSize(20);
menuLayout.addView(log1);
log1.setTextColor(android.graphics.Color.BLACK);

var desc1 = new android.widget.TextView(ctx);
desc1.setText("     Today is a new day. I finally left home and decided to wander around in the wilderness until I find a good place to call my home.\n");
desc1.setTextSize(17);
menuLayout.addView(desc1);
desc1.setTextColor(android.graphics.Color.BLACK);

var log2 = new android.widget.TextView(ctx);
log2.setText("                                                                                       Tinker's Log #2:");
log2.setTextSize(20);
menuLayout.addView(log2);
log2.setTextColor(android.graphics.Color.BLACK);

var desc2 = new android.widget.TextView(ctx);
desc2.setText("     I've decided to keep a log of my creations and machinations, as well as some insights into what I'm doing. I haven't actually built\n     anything yet. There is a small cave I can board up for the night. I created a stone pickaxe affectionately called Betsy.\n");
desc2.setTextSize(17);
menuLayout.addView(desc2);
desc2.setTextColor(android.graphics.Color.BLACK);

var log3 = new android.widget.TextView(ctx);
log3.setText("                                                                                       Tinker's Log #3:");
log3.setTextSize(20);
menuLayout.addView(log3);
log3.setTextColor(android.graphics.Color.BLACK);

var desc3 = new android.widget.TextView(ctx);
desc3.setText("     The night is scary. Creepers are everywhere, the zombies are banging on my door, bats block out the sky... it is not fun being\n     alone out here. I want to hide in the corner and cry until they leave. This log doesn't help take my mind off of anything.\n");
desc3.setTextSize(17);
menuLayout.addView(desc3);
desc3.setTextColor(android.graphics.Color.BLACK);

var log4 = new android.widget.TextView(ctx);
log4.setText("                                                                                       Tinker's Log #4:");
log4.setTextSize(20);
menuLayout.addView(log4);
log4.setTextColor(android.graphics.Color.BLACK);

var desc4 = new android.widget.TextView(ctx);
desc4.setText("     Betsy didn't last long. She just crumpled into dust suddenly and the handle shattered. My parents told me this would happen and\n     this was normal, but it still seems so wrong. If I could make the pickaxe a little better perhaps, maybe I could repair it.\n");
desc4.setTextSize(17);
menuLayout.addView(desc4);
desc4.setTextColor(android.graphics.Color.BLACK);

var log5 = new android.widget.TextView(ctx);
log5.setText("                                                                                       Tinker's Log #5:");
log5.setTextSize(20);
menuLayout.addView(log5);
log5.setTextColor(android.graphics.Color.BLACK);

var desc5 = new android.widget.TextView(ctx);
desc5.setText("     I've spent the past three days looking for paper and ink. Squids were easy enough to find, but the sugar cane was buried deep in\n     a ravine next to a creeper nest. Eventually I dropped rocks on the creepers and watched them explode out of surprise. My eyebrow\n     will grow back in time.\n");
desc5.setTextSize(17);
menuLayout.addView(desc5);
desc5.setTextColor(android.graphics.Color.BLACK);

dg1 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight()); 
//dg1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK)); 
dg1.setBackgroundDrawable(mainimg);
dg1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0); }catch(error){ print("An error occured: " + error); } }})); }

function dp2(){ 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
try{ 
var menuLayout = new android.widget.LinearLayout(ctx); 
var menuScroll = new android.widget.ScrollView(ctx); 
var menuLayout1 = new android.widget.LinearLayout(ctx); 
menuLayout.setOrientation(1); 
menuLayout1.setOrientation(1);

menuScroll.addView(menuLayout); 
menuLayout1.addView(menuScroll);

var log1 = new android.widget.TextView(ctx);
log1.setText("                                                                                       Tinker's Log #6:");
log1.setTextSize(20);
menuLayout.addView(log1);
log1.setTextColor(android.graphics.Color.BLACK);

var desc1 = new android.widget.TextView(ctx);
desc1.setText("     Waiting on sugar cane to grow. Not much else today.\n");
desc1.setTextSize(17);
menuLayout.addView(desc1);
desc1.setTextColor(android.graphics.Color.BLACK);

var log2 = new android.widget.TextView(ctx);
log2.setText("                                                                                       Tinker's Log #7:");
log2.setTextSize(20);
menuLayout.addView(log2);
log2.setTextColor(android.graphics.Color.BLACK);

var desc2 = new android.widget.TextView(ctx);
desc2.setText("     I've sketched out plans for a new workbench. It's a little strange. The center of the workbench is missing, but sturdy, and there\n     are grooves in the top for supplies. I think I will call it a table.\n");
desc2.setTextSize(17);
menuLayout.addView(desc2);
desc2.setTextColor(android.graphics.Color.BLACK);

var log3 = new android.widget.TextView(ctx);
log3.setText("                                                                                       Tinker's Log #8:");
log3.setTextSize(20);
menuLayout.addView(log3);
log3.setTextColor(android.graphics.Color.BLACK);

var desc3 = new android.widget.TextView(ctx);
desc3.setText("     I made a few more tables with different patterns in them. They look useful for different things, so I put different materials and tools\n     by each one. Perhaps I will come up with a use for them in time.\n");
desc3.setTextSize(17);
menuLayout.addView(desc3);
desc3.setTextColor(android.graphics.Color.BLACK);

var log4 = new android.widget.TextView(ctx);
log4.setText("                                                                                       Tinker's Log #9:");
log4.setTextSize(20);
menuLayout.addView(log4);
log4.setTextColor(android.graphics.Color.BLACK);

var desc4 = new android.widget.TextView(ctx);
desc4.setText("     To make tools, you need to know what you're making. The pickaxe and shovel are easy enough to make with practice, the best\n     crafters in my village told me, but I can't seem to make any good ones. Out of frustration I punched a hole in a wooden board. And\n    another. And a few more. By the end I had something that resembled an axe, and that gave me a few ideas...\n");
desc4.setTextSize(17);
menuLayout.addView(desc4);
desc4.setTextColor(android.graphics.Color.BLACK);

var log5 = new android.widget.TextView(ctx);
log5.setText("                                                                                       Tinker's Log #10:");
log5.setTextSize(20);
menuLayout.addView(log5);
log5.setTextColor(android.graphics.Color.BLACK);


var desc5 = new android.widget.TextView(ctx);
desc5.setText("     I punched holes in a few boards carefully in different shapes. I spent a lot of time making them, so they look really good. They all\n     resemble the parts of tools that I can remember: heads, handles, bindings, pieces, and some others. They look really useful, so I\n     placed them by a table for later.\n");
desc5.setTextSize(17);
menuLayout.addView(desc5);
desc5.setTextColor(android.graphics.Color.BLACK);

dg2 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight()); 
//dg2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK)); 
dg2.setBackgroundDrawable(mainimg);
dg2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0); }catch(error){ print("An error occured: " + error); } }})); }

function dp3(){ 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
try{ 
var menuLayout = new android.widget.LinearLayout(ctx); 
var menuScroll = new android.widget.ScrollView(ctx); 
var menuLayout1 = new android.widget.LinearLayout(ctx); 
menuLayout.setOrientation(1); 
menuLayout1.setOrientation(1);

menuScroll.addView(menuLayout); 
menuLayout1.addView(menuScroll);

var log1 = new android.widget.TextView(ctx);
log1.setText("                                                                                       Tinker's Log #11:");
log1.setTextSize(20);
menuLayout.addView(log1);
log1.setTextColor(android.graphics.Color.BLACK);

var desc1 = new android.widget.TextView(ctx);
desc1.setText("     I grabbed a few of the boards and started to make tool parts using them as an outline. The parts themselves feel sturdy, and when\n     I put them together the end result felt a lot better than Betsy did. They're made completely out of stone, something even the finest\n     crafters could never manage. This feels like a great accomplishment.\n");
desc1.setTextSize(17);
menuLayout.addView(desc1);
desc1.setTextColor(android.graphics.Color.BLACK);

var log2 = new android.widget.TextView(ctx);
log2.setText("                                                                                       Tinker's Log #15:");
log2.setTextSize(20);
menuLayout.addView(log2);
log2.setTextColor(android.graphics.Color.BLACK);

var desc2 = new android.widget.TextView(ctx);
desc2.setText("     Perhaps making a tool completely out of stone wasn't the best idea. It didn't last very long. On the upside, instead of shattering\n     into dust only the tip scratched off. I glued a new tip on the head and it seemed good as new.\n");
desc2.setTextSize(17);
menuLayout.addView(desc2);
desc2.setTextColor(android.graphics.Color.BLACK);

var log3 = new android.widget.TextView(ctx);
log3.setText("                                                                                       Tinker's Log #13:");
log3.setTextSize(20);
menuLayout.addView(log3);
log3.setTextColor(android.graphics.Color.BLACK);

var desc3 = new android.widget.TextView(ctx);
desc3.setText("     I wanted to make a few more tools, but the boards with tool shapes in them went everywhere! I ended up breaking a few\n     out of frustration. They don't fit very well in my chest either. I took a few of them, added a few slots to the bottom of the chest,\n     placed it by my table and called it good.\n\n     I also named them Patterns, the chest a Pattern Chest. I'm still angry at them, and it took so long to make new ones...\n");
desc3.setTextSize(17);
menuLayout.addView(desc3);
desc3.setTextColor(android.graphics.Color.BLACK);

var log4 = new android.widget.TextView(ctx);
log4.setText("                                                                                       Tinker's Log #14:");
log4.setTextSize(20);
menuLayout.addView(log4);
log4.setTextColor(android.graphics.Color.BLACK);

var desc4 = new android.widget.TextView(ctx);
desc4.setText("     Today I learned just how hard it was to shape iron. First you have to dig it out of the earth. A wooden pickaxe will shatter the ore;\n      this I found out the hard way. Once you do get that ore there isn't much to do with it besides throw it in the furnace. Melting the iron\n     and the stone seems inefficient, but I do need the metal more than I care about the waste.\n\n     I shaped a few of the bars into tools, and they felt strong. Much stronger, in fact, than the ones back at the village. I've named\n     the pickaxe Krug after some of the stories Nana used to tell me at night. How I miss her...\n");
desc4.setTextSize(17);
menuLayout.addView(desc4);
desc4.setTextColor(android.graphics.Color.BLACK);

dg3 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight()); 
dg3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK)); 
dg3.setBackgroundDrawable(mainimg);
dg3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0); }catch(error){ print("An error occured: " + error); } }})); }

function dp4(){ 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
try{ 
var menuLayout = new android.widget.LinearLayout(ctx); 
var menuScroll = new android.widget.ScrollView(ctx); 
var menuLayout1 = new android.widget.LinearLayout(ctx); 
menuLayout.setOrientation(1); 
menuLayout1.setOrientation(1);

menuScroll.addView(menuLayout); 
menuLayout1.addView(menuScroll);

var log1 = new android.widget.TextView(ctx);
log1.setText("                                                                                       Tinker's Log #15:");
log1.setTextSize(20);
menuLayout.addView(log1);
log1.setTextColor(android.graphics.Color.BLACK);

var desc1 = new android.widget.TextView(ctx);
desc1.setText("     This place holds little for me now. I've packed up my things, grabbed what resources I can carry, and set off. The tables and\n     patterns will have to stay behind. I can't possibly carry them with all the food I have.\n");
desc1.setTextSize(17);
menuLayout.addView(desc1);
desc1.setTextColor(android.graphics.Color.BLACK);

var log2 = new android.widget.TextView(ctx);
log2.setText("                                                                                       Tinker's Log #16:");
log2.setTextSize(20);
menuLayout.addView(log2);
log2.setTextColor(android.graphics.Color.BLACK);

var desc2 = new android.widget.TextView(ctx);
desc2.setText("     A week later and I've finally found some others to visit. Some of them seem nice, most don't look like me. A few of them have\n     things I never could have dreamed of. They've pointed me at a patch of land that was quiet and secluded. There I should be able\n     to work, for I have ideas from the journey.\n");
desc2.setTextSize(17);
menuLayout.addView(desc2);
desc2.setTextColor(android.graphics.Color.BLACK);

var log3 = new android.widget.TextView(ctx);
log3.setText("                                                                                       Tinker's Log #17:");
log3.setTextSize(20);
menuLayout.addView(log3);
log3.setTextColor(android.graphics.Color.BLACK);

var desc3 = new android.widget.TextView(ctx);
desc3.setText("     After three days and nights of fending off zombies, I've finally created a house. It has a few rooms, a basement, but most\n     importantly a workshop. All of the tables and patterns I had before are here, as well as a few others I wanted to try out from the trip.\n\n     There's a round one I can cook food with and one that's just as good as any hoe, but can chop trees or actually dig the ground up.\n     The villagers tell me these are named Frying Pan and Mattock. The Frying Pan seems heavy enough to smack creepers with.\n     I have a sword named Shimmer that I want to alter somehow.\n");
desc3.setTextSize(17);
menuLayout.addView(desc3);
desc3.setTextColor(android.graphics.Color.BLACK);

var log4 = new android.widget.TextView(ctx);
log4.setText("                                                                                       Tinker's Log #18:");
log4.setTextSize(20);
menuLayout.addView(log4);
log4.setTextColor(android.graphics.Color.BLACK);

var desc4 = new android.widget.TextView(ctx);
desc4.setText("     One of the villagers was kind enough to give me some random things. Each one looks useful in their own right. I was lucky enough\n     to find a few diamonds earlier, and I have a few more tools in storage. This should be fun.\n");
desc4.setTextSize(17);
menuLayout.addView(desc4);
desc4.setTextColor(android.graphics.Color.BLACK);

var log5 = new android.widget.TextView(ctx);
log5.setText("                                                                                       Tinker's Log #19:");
log5.setTextSize(20);
menuLayout.addView(log5);
log5.setTextColor(android.graphics.Color.BLACK);

var desc5 = new android.widget.TextView(ctx);
desc5.setText("     After some heavy experimentation, I've ended up with some things that look amazing and others that look less useful than they\n      actually are. A diamond tip on a pickaxe makes for a wondefully hard mining tool, and an emerald on a sword hilt somehow\n    makes it stay together longer, but some things don't do anything.\n\n    Adding flowers to a tool does nothing; they don't even stay on the thing. Mushrooms have a similar effect, and adding more\n     material to a tool just makes it heavier. You wouldn't think redstone would do anything. I've coated a shovel so much that it looks\n     deep red. However, it slides through dirt as if the dirt wasn't there.\n\n     Moss is also a strange one. Somehow it seems to be healing the tool, even to the point where it looks like new.\n");
desc5.setTextSize(17);
menuLayout.addView(desc5);
desc5.setTextColor(android.graphics.Color.BLACK);

dg4 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight()); 
//dg4.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK)); 
dg4.setBackgroundDrawable(mainimg);
dg4.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0); }catch(error){ print("An error occured: " + error); } }})); }

function dp5(){ 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
try{ 
var menuLayout = new android.widget.LinearLayout(ctx); 
var menuScroll = new android.widget.ScrollView(ctx); 
var menuLayout1 = new android.widget.LinearLayout(ctx); 
menuLayout.setOrientation(1); 
menuLayout1.setOrientation(1);

menuScroll.addView(menuLayout); 
menuLayout1.addView(menuScroll);

var log1 = new android.widget.TextView(ctx);
log1.setText("                                                                                       Tinker's Log #20:");
log1.setTextSize(20);
menuLayout.addView(log1);
log1.setTextColor(android.graphics.Color.BLACK);

var desc1 = new android.widget.TextView(ctx);
desc1.setText("     I tried to make some tools out of gold, like the crafters in my village used to, but instead it broke the table. Some of the villages\n     laughed at me for such an idea... if only they knew.\n");
desc1.setTextSize(17);
menuLayout.addView(desc1);
desc1.setTextColor(android.graphics.Color.BLACK);

var log2 = new android.widget.TextView(ctx);
log2.setText("                                                                                       Tinker's Log #21:");
log2.setTextSize(20);
menuLayout.addView(log2);
log2.setTextColor(android.graphics.Color.BLACK);

var desc2 = new android.widget.TextView(ctx);
desc2.setText("     Some of these tools are more useful than I thought. Adding blaze powder to a weapon seems to give it some kind of burning effect.\n     Lapis has this strange quality of being able to find more materials in the same area, even if I know exactly what I'm looking at.\n");
desc2.setTextSize(17);
menuLayout.addView(desc2);
desc2.setTextColor(android.graphics.Color.BLACK);

var log3 = new android.widget.TextView(ctx);
log3.setText("                                                                                       Tinker's Log #22:");
log3.setTextSize(20);
menuLayout.addView(log3);
log3.setTextColor(android.graphics.Color.BLACK);

var desc3 = new android.widget.TextView(ctx);
desc3.setText("     I have some ideas for creating tools, but for that I need a large place to create them. The furnace is inadequate, and I need a lot of\n     stone. Combining lava with coal and netherrack seems to instantly cook stone as I mine it, up to the point where I can bypass the\n     furnace entirely.\n");
desc3.setTextSize(17);
menuLayout.addView(desc3);
desc3.setTextColor(android.graphics.Color.BLACK);

var log4 = new android.widget.TextView(ctx);
log4.setText("                                                                                       Tinker's Log #23:");
log4.setTextSize(20);
menuLayout.addView(log4);
log4.setTextColor(android.graphics.Color.BLACK);

var desc4 = new android.widget.TextView(ctx);
desc4.setText("     Today I made something strange. It's round, wooden, and doesn't look like anything I've ever seen. Someone came by and said it\n     was a wheel and that they were great fun to roll around. I wonder what else it could be used for?\n");
desc4.setTextSize(17);
desc4.setTextColor(android.graphics.Color.BLACK);
menuLayout.addView(desc4);

var log5 = new android.widget.TextView(ctx);
log5.setText("                                                                                       Tinker's Log #24:");
log5.setTextSize(20);
menuLayout.addView(log5);
log5.setTextColor(android.graphics.Color.BLACK);

var desc5 = new android.widget.TextView(ctx);
desc5.setText("     I made a few more of the wheels to get some practice in. I had some fun rolling them around, rolling them in pairs, and then one\n     ended up beside my boat. It just looked so natural I had to start putting them together.\n");
desc5.setTextSize(17);
desc5.setTextColor(android.graphics.Color.BLACK);
menuLayout.addView(desc5);

dg5 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight()); 
//dg5.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK)); 
dg5.setBackgroundDrawable(mainimg);
dg5.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0); }catch(error){ print("An error occured: " + error); } }})); }

function dp6(){ 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
try{ 
var menuLayout = new android.widget.LinearLayout(ctx); 
var menuScroll = new android.widget.ScrollView(ctx); 
var menuLayout1 = new android.widget.LinearLayout(ctx); 
menuLayout.setOrientation(1); 
menuLayout1.setOrientation(1);

menuScroll.addView(menuLayout); 
menuLayout1.addView(menuScroll);

var log1 = new android.widget.TextView(ctx);

log1.setText("                                                                                       Tinker's Log #25:");
log1.setTextSize(20);
log1.setTextColor(android.graphics.Color.BLACK);
menuLayout.addView(log1);

var desc1 = new android.widget.TextView(ctx);
desc1.setText("     I think I'm on to something here. Combining the boat with the wheel made it work something like a minecart, only I can pull it\n      around places. It feels a little small though.\n");
desc1.setTextSize(17);
desc1.setTextColor(android.graphics.Color.BLACK);
menuLayout.addView(desc1);

var log2 = new android.widget.TextView(ctx);
log2.setText("                                                                                       Tinker's Log #26:");
log2.setTextSize(20);
log2.setTextColor(android.graphics.Color.BLACK);
menuLayout.addView(log2);

var desc2 = new android.widget.TextView(ctx);
desc2.setText("    I have all these tools laying around with little notes on what each one does. Instead of leaving them scattered about, I think I will\n     create one place to store them.\n");
desc2.setTextSize(17);
desc2.setTextColor(android.graphics.Color.BLACK);
menuLayout.addView(desc2);

var log3 = new android.widget.TextView(ctx);
log3.setText("                                                                                       Tinker's Log #27:");
log3.setTextSize(20);
log3.setTextColor(android.graphics.Color.BLACK);
menuLayout.addView(log3);

var desc3 = new android.widget.TextView(ctx);
desc3.setText("      I went exploring and found some new ores today. They're colors I've never seen before, and they don't shatter on impact like iron\n     does. I wonder what I can do with these?\n");
desc3.setTextSize(17);
desc3.setTextColor(android.graphics.Color.BLACK);
menuLayout.addView(desc3);

var log4 = new android.widget.TextView(ctx);
log4.setText("                                                                                       Tinker's Log #28:");
log4.setTextSize(20);
log4.setTextColor(android.graphics.Color.BLACK);
menuLayout.addView(log4);

var desc4 = new android.widget.TextView(ctx);
desc4.setText("     The normal furnace is nice for keeping warm, but it leaves something to be desired for processing metal. I've dug a pit and lined\n      it with some clay, gathered lava nearby, and put ore in the center in an attempt to improve on the design. The results were quite\n      interesting.\n\n     The more lava I fed into the pit the hotter the material became. Eventually the whole thing liquified. I broke open the side of the\n     pit with a cauldron in an attempt to catch the material, but it went everywhere. There were some remnants left in the pit as well.\n\n     Raw ore still has parts of stone in it. There must be a way to remove the excess.\n");
desc4.setTextSize(17);
desc4.setTextColor(android.graphics.Color.BLACK);
menuLayout.addView(desc4);

dg6 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight()); 
dg6.setBackgroundDrawable(mainimg);
//dg6.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK)); 
dg6.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0); }catch(error){ print("An error occured: " + error); } }})); }

function playSound(file) {
   try {
       // if(!mp) modTick();
        mp.setDataSource(new android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/ModScript/Tinker's Construct/Sounds/" + file);
        mp.prepare();
        mp.start();
    } catch(e) {
        clientMessage("You must have a internet connection the first time you play");
print(e);
    }
}

Player.setInventorySlot = function(slot, id, amount, damage) {
	net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSetInventorySlot(slot + 9, id, amount, damage);
};


Player.checkForInventoryItem = function(id, amount, damage) {

	if(!amount) amount = 1;
	if(!damage) damage = 0;
	if(!id) id = 0;
	var count = 0;
	for(var i = 0; i < 255; i++) if(Player.getInventorySlot(i) == id && Player.getInventorySlotData(i) == damage) count += Player.getInventorySlotCount(i);
	return count >= amount;
};

Player.removeItemInventory = function(id, amount, damage) {
	if(!amount) amount = 255 * 255;
	if(!damage) damage = 0;
	var count = 0;
	for(var i = 0; i < 255; i++) if(Player.getInventorySlot(i) == id && Player.getInventorySlotData(i) == damage) {
		Player.clearInventorySlot(i);
		count += Player.getInventorySlotCount(i);
	}
	if(count > amount) Player.addItemInventory(id, count - amount, damage);
};

var img1 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/Tinker's Construct/book_bg.png");
var img2 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/Tinker's Construct/book_interact.png");

var mainimg = new android.graphics.drawable.BitmapDrawable(img1);
var interactimg = new android.graphics.drawable.BitmapDrawable(img2);
