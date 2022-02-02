class Grass {
    constructor(scene, world) {
        this.scene = scene;
        this.world = world;
    }

    scene;
    world;
    grassMesh;
    grassBody;


    load() {
        this.createGrassMesh();
        this.createGrassBody();
        this.copyGrassPositionAndQuaternion();
    }

    createGrassMesh() {
        const grassTexture = new THREE.TextureLoader(this.loadingManager).load("../game-portfolio/assets/grass.png");
        grassTexture.wrapS = THREE.RepeatWrapping;
        grassTexture.wrapT = THREE.RepeatWrapping;
        grassTexture.repeat.set(200, 200);
        const grassGeometry = new THREE.PlaneGeometry(10000, 10000, 10, 10);
        const grassMaterial = new THREE.MeshBasicMaterial({ map: grassTexture });
        this.grassMesh = new THREE.Mesh(grassGeometry, grassMaterial);
        this.scene.add(this.grassMesh);
    }
    createGrassBody() {
        this.grassBody = new CANNON.Body({ mass: 0 });
        const grassShape = new CANNON.Box(new CANNON.Vec3(10000, 10000, 1));
        const axis = new CANNON.Vec3(1, 0, 0);
        const angle = -Math.PI / 2;
        this.grassBody.quaternion.setFromAxisAngle(axis, angle);
        this.grassBody.addShape(grassShape);
        this.world.addBody(this.grassBody);
    }

    copyGrassPositionAndQuaternion() {
        this.grassMesh.position.copy(this.grassBody.position);
        this.grassMesh.quaternion.copy(this.grassBody.quaternion);
    }
}