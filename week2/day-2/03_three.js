class Rectangle {
    constructor(width, height, color) {
         this.width = width;
         this.height = height;
         this.color = color; 
    }
    
    area() {
        const area = this.width * this.height;
          return area;
    }
    
    paint() {
             console.log(`Painting with color ${this.color}`);
    }
    
 }
 
 const rect = new Rectangle(2, 4,'red')
 const area = rect.area();
 console.log(area)
 console.log(rect.width * rect.height)
 console.log(rect.paint())

 // some more classes given by js
 const date=new Date()
 console.log(date.toLocaleString())

 const map=new Map();
 map.set('name','harkirit');
 map.set('age',30);
 console.log(map.get('name'))