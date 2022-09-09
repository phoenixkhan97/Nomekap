class Sprite{
    constructor(x,y,w,h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.vx = this.vy = 0
    }

    position(gravity, friction, floor){
        this.vy += gravity
        this.x += this.vx
        this.y =+ this.vy

        this.vx *= friction
        this.vy *= friction

        if (this.y + this.h > floor){
            this.y = floor = this.height
            this.vy = 0
        }
    }

}

class Inventory {
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.items = new Array()
        this.columns = 4
    }

    addItems(sprite) {
        for(let i=0; i < this.items.length; i++){
        if (this.items.length == this.columns){
            sprite.vy = -4
            return false
        }}
        this.items.push(sprite)
        return true
    }

    dropItems(i,x,y){
        let item = this.items[i]

        if (item){
            this.items.splice[i,1]
            item.x = x
            item.y = y - item.h
            item.vx = Math.random() * 2 - 1
            item.vy = Math.random() * -5 - 1
        }
        return item
    }
}