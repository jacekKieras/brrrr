class RoadTextures {
    constructor(scene, loadingManager) {
        this.scene = scene;
        this.loadingManager = loadingManager;
    }

    loadingManager;
    scene;

    load() {
        this.addRoadTexture1();
        this.addRoadTexture2();
        this.addRoadTexture3();
        this.addRoadTexture4();
        this.addRoadTexture5();
        this.addRoundabout();
    }

    addRoadTexture1() {
        let roadTexture = new THREE.TextureLoader(this.loadingManager).load("../game-portfolio/assets/road.jpg");
        roadTexture.wrapS = THREE.RepeatWrapping;
        roadTexture.wrapT = THREE.RepeatWrapping;
        roadTexture.repeat.set(1, 10);
        const roadGeometry = new THREE.PlaneGeometry(100, 2000, 10, 10);
        const roadMaterial = new THREE.MeshBasicMaterial({ map: roadTexture });
        const road = new THREE.Mesh(roadGeometry, roadMaterial);
        road.rotation.x -= Math.PI / 2;
        road.rotation.z = Math.PI / 2;
        road.position.set(1300, 1, 1400);
        this.scene.add(road);
    }

    addRoadTexture2() {
        let roadTexture = new THREE.TextureLoader(this.loadingManager).load("../game-portfolio/assets/road.jpg");
        roadTexture.wrapS = THREE.RepeatWrapping;
        roadTexture.wrapT = THREE.RepeatWrapping;
        roadTexture.repeat.set(1, 10);
        const roadGeometry = new THREE.PlaneGeometry(100, 2000, 10, 10);
        const roadMaterial = new THREE.MeshBasicMaterial({ map: roadTexture });
        const road = new THREE.Mesh(roadGeometry, roadMaterial);
        road.rotation.x -= Math.PI / 2;
        road.position.y += 1;
        this.scene.add(road);
    }

    addRoadTexture3() {
        let roadTexture = new THREE.TextureLoader(this.loadingManager).load("../game-portfolio/assets/road.jpg");
        roadTexture.wrapS = THREE.RepeatWrapping;
        roadTexture.wrapT = THREE.RepeatWrapping;
        roadTexture.repeat.set(1, 10);
        const roadGeometry = new THREE.PlaneGeometry(100, 2000, 10, 10);
        const roadMaterial = new THREE.MeshBasicMaterial({ map: roadTexture });
        const road = new THREE.Mesh(roadGeometry, roadMaterial);
        road.rotation.x -= Math.PI / 2;
        road.position.set(0, 1, 2750);
        this.scene.add(road);
    }

    addRoadTexture4() {
        let roadTexture = new THREE.TextureLoader(this.loadingManager).load("../game-portfolio/assets/road.jpg");
        roadTexture.wrapS = THREE.RepeatWrapping;
        roadTexture.wrapT = THREE.RepeatWrapping;
        roadTexture.repeat.set(1, 10);
        const roadGeometry = new THREE.PlaneGeometry(100, 2000, 10, 10);
        const roadMaterial = new THREE.MeshBasicMaterial({ map: roadTexture });
        const road = new THREE.Mesh(roadGeometry, roadMaterial);
        road.rotation.x -= Math.PI / 2;
        road.rotation.z = Math.PI / 2;
        road.position.set(-1350, 1, 1300);
        this.scene.add(road);
    }

    addRoadTexture5() {
        //first road texture
        let roadTexture = new THREE.TextureLoader(this.loadingManager).load("../game-portfolio/assets/road.jpg");
        roadTexture.wrapS = THREE.RepeatWrapping;
        roadTexture.wrapT = THREE.RepeatWrapping;
        roadTexture.repeat.set(1, 10);
        const roadGeometry = new THREE.PlaneGeometry(100, 4000, 10, 10);
        const roadMaterial = new THREE.MeshBasicMaterial({ map: roadTexture });
        const road = new THREE.Mesh(roadGeometry, roadMaterial);
        road.rotation.x -= Math.PI / 2;
        road.rotation.z = Math.PI / 2;
        road.position.set(-500, 1, -1050);
        this.scene.add(road);
    }

    addRoundabout() {
        let roundaboutTexture = new THREE.TextureLoader(this.loadingManager).load('../game-portfolio/assets/roundaboutRoad.jpg');
        roundaboutTexture.wrapS = THREE.RepeatWrapping;
        roundaboutTexture.wrapT = THREE.RepeatWrapping;
        roundaboutTexture.repeat.set(2, 9);
        roundaboutTexture.rotation = 30;
        const geometry = new THREE.TorusGeometry(350, 50, 2, 360);
        const material = new THREE.MeshBasicMaterial({ map: roundaboutTexture });
        const roundabout = new THREE.Mesh(geometry, material);
        roundabout.rotation.x += Math.PI / 2;
        roundabout.position.set(1, 1.1, 1390);
        this.scene.add(roundabout);
    }
}