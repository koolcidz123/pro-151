AFRAME.registerComponent("car", {
    schema: {
        modelRef: {type: "string", default: "car.glb"},
        clickCounter: {type: "number", default: 0},
    },

    init: function(){
        this.el.setAttribute("gltf-model", this.data.modelRef);
        const position = {x: -10, y: 5, z: 20};
        const rotation = {x: 0, y: -10, z: 0};
        this.el.setAttribute("position", position);
        this.el.setAttribute("rotation", rotation);
        },

    update : function() {
        window.addEventListener('click', e => {
            this.data.clickCounter = this.data.clickCounter + 1;
            if (this.data.clickCounter === 1) {
                const rotation = {x : 0, y : 20, z : 0};
                this.el.setAttribute("rotation", rotation);
                console.log("20 degrees")
            }
            else if (this.data.clickCounter === 2) {
                const rotation = {x : 0, y : 40, z : 0};
                this.el.setAttribute("rotation", rotation);
                console.log("40 degrees")
            }
            else if (this.data.clickCounter === 3) {
                const rotation = {x : 0, y : 60, z : 0};
                this.el.setAttribute("rotation", rotation);
                console.log("60 degrees")
            }
            else if (this.data.clickCounter === 4) {
                const rotation = {x : 0, y : 80, z : 0};
                this.el.setAttribute("rotation", rotation);
                console.log("80 degrees")
            }
            else if (this.data.clickCounter === 5) {
                const rotation = {x : 0, y : 0, z : 0};
                this.el.setAttribute("rotation", rotation);
                console.log("0 degrees")
                console.log("made by saanvi nazre")
            }
            else {
                console.log("invalid")
            }
        })
    }

});