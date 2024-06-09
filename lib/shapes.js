const { text } = require("stream/consumers");

class Shape {
    constructor(characters, textColor, shapeColor) {
        this.characters = characters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    
    setColor(color) {
        shapeColor = color;
    }

}

class Circle extends Shape {
    constructor(characters, textColor, shapeColor) {
        super(characters, textColor, shapeColor);
    }

    render(){
        return `
<svg>
    <circle cx='150' cy='100' r='80' fill='${this.shapeColor}'/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
</svg>
        `;
    }
}

class Triangle extends Shape {
    constructor(characters, textColor, shapeColor) {
        super(characters, textColor, shapeColor);
    }

    render(){
        return `
<svg>
    <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
</svg>
        `;
    }
}

class Square extends Shape {
    constructor(characters, textColor, shapeColor) {
        super(characters, textColor, shapeColor);
    }

    render(){
        return `
<svg>
    <rect x='10' y='10' width='30' height='30' fill='${this.shapeColor}'/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
</svg>
        `;
    }
}

module.exports = {Circle, Square, Triangle};
