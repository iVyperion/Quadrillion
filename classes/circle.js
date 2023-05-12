class Circle {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.element = document.createElement('div');
        this.element.classList.add('circle');
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        /*if (isUsable) {
            this.element.style.color = '#D9D9D9';
        } else {
            this.element.style.color = '#4B4B4B';
        }*/
    }



    draw(parentElement){
        parentElement.append(this.element);
    }


}


export default Circle;