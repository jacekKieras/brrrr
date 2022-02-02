class LoadingScreen {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.4, 900);
    box = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshBasicMaterial({ color: 0x4444ff }));

    create() {
        this.box.position.set(0, 0, 5);
        this.camera.lookAt(this.box.position);
        this.scene.add(this.box);
    }

    animation() {
        this.box.position.x -= 0.05;
        if (this.box.position.x < -6) {
            this.box.position.x = 6;
        }
        this.box.position.y = Math.sin(this.box.position.x);
    }
}