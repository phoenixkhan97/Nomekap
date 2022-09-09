

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