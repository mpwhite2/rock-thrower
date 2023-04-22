// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010301010101010101010101010101010103010101010101010101010101010101030101010101010101010101010101010101010103030303030101010101010101010101010101010101010101010101010101010101010101010101010303010101010101010101010101010101010101010303030101010101010101010101010101010101010101010101010101010301010101010101010101010101010103010101010101010101030101010101030101010101010101010301010101010301010103030301010103010101010103010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . . . . . 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
. . . . . 2 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . 2 . . 
. . . 2 . . . . . . . . . 2 . . 
. . . 2 . . . 2 2 2 . . . 2 . . 
. . . 2 . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.dungeon.floorDarkDiamond], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020201020202020202020202020202020202010202010202020202020202010202020102020102020202020202020102020201020201020202020202020201020202010202010202020202020202010201010101020102020201010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . . 2 . . 2 . . . 
. . . . . 2 . . . 2 . . 2 . . . 
. . . . . 2 . . . 2 . . 2 . . . 
. . . . . 2 . . . 2 . . 2 . . . 
. . . . . 2 . 2 2 2 2 . 2 . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile1], TileScale.Sixteen);
            case "level4":
            case "level4":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`14000f00010101010101010101010101010101010201010101010101010101010101010101010101030101010101030203010101010102010101010101010101010101010101010101010201010101030202020201010101010101010101030101010101010101010102010101020101010101010101010302020202010201010103010101010101020101010101010101030101010101010101010103010101010102030101010101010101010101010101010101010101010101010101010102010101010101010102010101010101010101010301010101010101010201010101010101010101010101010201020201020101010101010101010101010101020101020102010101010101010201010101010102010102010201010202020202020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . . . . . 2 . . . 
. . 2 2 2 . . . . . 2 . . . . . . . . . 
. . . . . . . . . . 2 . . . . 2 2 2 2 2 
. . . . . . . . . . 2 . . . . . . . . . 
. 2 . . . 2 . . . . . . . . . 2 2 2 2 2 
. 2 . . . 2 . . . . . . 2 . . . . . . . 
. 2 . . . . . . . . . . 2 . . . . . 2 2 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 2 . . . . . . . . 2 . . 
. . . . . . . . 2 . . . . . . . . 2 . . 
. . . . . . . . . . . . 2 . 2 2 . 2 . . 
. . . . . . . . . . . . 2 . . 2 . 2 . . 
. . . . . 2 . . . . . . 2 . . 2 . 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency8,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Eight);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "transparency8":return transparency8;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile6":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
