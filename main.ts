controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, 0)
    projectile.setKind(SpriteKind.Ball)
    spriteutils.setVelocityAtAngle(projectile, spriteutils.degreesToRadians(transformSprites.getRotation(mySprite)), 200)
    projectile.setBounceOnWall(true)
    projectile.setFlag(SpriteFlag.AutoDestroy, false)
    projectile.setFlag(SpriteFlag.DestroyOnWall, false)
    pause(100)
    projectile.setKind(SpriteKind.Projectile)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
function CreateEnemy (Col: number, Row: number, Vx: number, Vy: number) {
    mySprite2 = sprites.create(img`
        . . . . . . . . 
        . . . 7 7 . . . 
        . . 7 7 7 7 . . 
        . 7 f 7 7 f 7 . 
        7 7 7 7 7 7 7 7 
        . 7 . 7 7 . 7 . 
        7 . 7 . . 7 . 7 
        . 7 . . . . 7 . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(Col, Row))
    mySprite2.setVelocity(Vx, Vy)
    mySprite2.setBounceOnWall(true)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.disintegrate, 500)
    sprites.destroy(otherSprite, effects.ashes, 500)
    info.changeScoreBy(1)
    Enemys += -1
})
let mySprite3: Sprite = null
let Distance = 0
let mySprite2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level3`))
info.setScore(0)
CreateEnemy(19, 4, -50, 0)
CreateEnemy(8, 13, 0, -50)
CreateEnemy(13, 13, 0, 50)
CreateEnemy(16, 6, 0, -50)
CreateEnemy(9, 2, -50, 0)
CreateEnemy(19, 2, -50, 0)
let Enemys = 6
mySprite = sprites.create(img`
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . 3 3 5 5 5 5 3 2 3 . . . . . 
    . 3 3 5 5 5 5 f 2 2 2 3 . . . . 
    . 3 5 5 5 f f 5 5 5 5 3 . . . . 
    . 3 3 3 3 5 5 2 2 2 2 5 3 . . . 
    . 3 5 2 2 2 3 3 3 3 5 2 3 . . . 
    3 3 3 3 3 3 3 5 5 5 f f . . . . 
    3 3 5 4 4 5 4 f 4 4 5 . . . . . 
    3 5 5 4 4 4 1 f 4 4 5 7 7 . . . 
    . 3 5 5 5 4 4 4 4 5 4 5 5 5 5 7 
    . . 3 3 5 5 4 4 5 4 4 5 5 . . . 
    . . . 3 2 2 2 2 4 4 5 5 . . . . 
    . . . 3 2 2 2 2 5 2 1 . . . . . 
    . . . 3 4 4 4 4 5 5 1 . . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . . . . 3 3 3 . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 12))
scene.cameraFollowSprite(mySprite)
game.onUpdate(function () {
    if (Enemys == 0) {
        game.gameOver(true)
    }
})
game.onUpdate(function () {
    if (controller.left.isPressed()) {
        transformSprites.changeRotation(mySprite, -1)
    }
    if (controller.right.isPressed()) {
        transformSprites.changeRotation(mySprite, 1)
    }
})
game.onUpdate(function () {
    Distance = 0
    sprites.destroyAllSpritesOfKind(SpriteKind.Crosshair)
    for (let index = 0; index < 4; index++) {
        Distance += 30
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Crosshair)
        spriteutils.placeAngleFrom(
        mySprite3,
        spriteutils.degreesToRadians(transformSprites.getRotation(mySprite)),
        Distance,
        mySprite
        )
    }
})
