class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.element = document.createElement('div');
        this.element.classList.add('circle');
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }

    draw(parentElement){
        parentElement.append(this.element);
    }


}


export default Circle;