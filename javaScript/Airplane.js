class Airplane {

    constructor(scene, email) {
        this.scene = scene;
        this.email = email;


    }

    scene;
    email;
    airplaneObject;
    isAirplaneLoaded = false;
    isAirplaneRemoved = false;
    airplaneHeight = 0;
    velocity = 6;

    loadAirplane() {
        this.airplaneObject = new THREE.Object3D();
        const gltfLoader = new THREE.GLTFLoader();
        const fontloader = new THREE.FontLoader();

        gltfLoader.load('../game-portfolio/assets/airplane/11805_airplane_v2_L2.glb', (airplane) => {

            this.airplaneObject.add(airplane.scene);
            this.airplaneObject.rotation.x -= Math.PI / 2;
            this.airplaneObject.rotation.z += Math.PI;
            this.airplaneObject.scale.set(0.2, 0.2, 0.2);
            this.airplaneObject.position.set(2400, 0.1, 450);
            this.airplaneObject.name = 'airplane';
            const font = fontloader.load('../game-portfolio/assets/Ethnocentric Rg_Regular.json', (loadedFont) => {

                const textGeometry = new THREE.TextGeometry('E-mail Sender Airlines', {
                    font: loadedFont,
                    size: 20,
                    height: 10,
                    curveSegments: 20,
                });
                const textMesh = new THREE.Mesh(textGeometry, [new THREE.MeshPhongMaterial({ color: 0x000000, flatShading: true }), // front
                new THREE.MeshPhongMaterial({ color: 0x000000 })]);
                textMesh.position.z += 250;
                textMesh.position.x += 75;
                textMesh.position.y -= 90;
                textMesh.rotation.z += Math.PI / 2;
                textMesh.rotation.y += Math.PI / 2;
                this.airplaneObject.add(textMesh);
            })
        })
        this.scene.add(this.airplaneObject);
    }

    animate() {
        this.airplaneArrival();
        this.airplaneStart();
    }

    airplaneStart() {
        if (!this.isAirplaneRemoved && this.email.isMailSent) {
            this.airplaneObject.position.z += this.velocity;
            this.velocity += 0.029;
            if (this.airplaneObject.position.z > 3500) {
                this.isAirplaneRemoved = true;
                const airplane = this.scene.getObjectByName('airplane');
                this.scene.remove(airplane);
            }
            if (this.airplaneObject.position.z > 1700) {
                this.airplaneHeight += 0.005;
                this.airplaneObject.position.y += this.airplaneHeight;
                if (this.airplaneObject.rotation.x < 5)
                    this.airplaneObject.rotation.x -= 0.0015;
            }
        }
    }

    airplaneArrival() {
        if (!this.isAirplaneRemoved && this.email.writeEmail) {
            if (this.isAirplaneLoaded == false) {
                this.isAirplaneLoaded = true;
                this.loadAirplane();
            }
            if (this.airplaneObject.position.z < 1380) {
                this.airplaneObject.position.z += this.velocity;
                if (this.velocity > 0.3)
                    this.velocity -= 0.019;
            }
        }
    }
}