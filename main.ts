namespace SpriteKind {
    export const Text = SpriteKind.create()
    export const StatusBar = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const Booth = SpriteKind.create()
    export const Mouse = SpriteKind.create()
    export const Crosshair = SpriteKind.create()
    export const Moon = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
    Throw = true
    pause(500)
    myDart.setKind(SpriteKind.Projectile)
    CreateDart()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
function CreateDart () {
    Dart2 = darts.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . c a f b c . . . . . . . 
        . . . . b f f b c c . . . . . . 
        . . . a a f b a b a c . . . . . 
        . . . c a c b b f f b . . . . . 
        . . . . b f f b f a b . . . . . 
        . . . . a f f b b b a . . . . . 
        . . . . . a b b c c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ball, mySprite.x, mySprite.y)
    myDart = Dart2
    myDart.controlWithArrowKeys(true)
    myDart.setTrace(true)
    Throw = false
}
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Top) || sprite.isHittingTile(CollisionDirection.Bottom)) {
        sprite.vy = 0 - sprite.vy * 0.75
    }
    if (sprite.isHittingTile(CollisionDirection.Right) || sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 0 - sprite.vx * 0.75
    }
})
function CreateEnemy (Col: number, Row: number, Vx: number, Vy: number) {
    mySprite2 = sprites.create(img`
        . . . 4 4 . . . 
        . . . 4 4 . . . 
        . . 4 4 4 4 . . 
        . 4 f 4 4 f 4 . 
        . 4 4 4 4 4 4 . 
        4 4 4 4 4 4 4 4 
        4 . 4 f f 4 . 4 
        . . . 4 4 . . . 
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
let VY = 0
let VX = 0
let mySprite2: Sprite = null
let Dart2: Dart = null
let Throw = false
let myDart: Dart = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level3`))
info.setScore(0)
CreateEnemy(18, 3, -50, 0)
CreateEnemy(7, 12, 0, -50)
CreateEnemy(11, 1, 0, 50)
CreateEnemy(15, 11, -50, 0)
CreateEnemy(5, 8, 0, -50)
CreateEnemy(18, 5, -50, 0)
let Enemys = 6
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 12))
scene.cameraFollowSprite(mySprite)
CreateDart()
game.onUpdate(function () {
    if (Enemys == 0) {
        game.gameOver(true)
    }
})
game.onUpdateInterval(100, function () {
    VX = myDart.vx
    VY = myDart.vy
})
