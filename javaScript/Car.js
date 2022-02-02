

class Car {
    constructor(scene, world, camera) {
        this.world = world;
        this.scene = scene;
        this.camera = camera;

    }

    car;
    tireFR = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 2, 32), new THREE.MeshPhongMaterial({ color: 0xaaaaaa }));
    tireFL = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 2, 32), new THREE.MeshPhongMaterial({ color: 0xaaaaaa }));
    tireBL;
    tireBR;
    carBox;
    camera;
    keyboard = {};
    arrowUp = this.keyboard[38];
    arrowDown = this.keyboard[40];
    arrowLeft = this.keyboard[37];
    arrowRight = this.keyboard[49];

    keyPressed = window.addEventListener('keydown', this.keyDown.bind(this));
    keyReleased = window.addEventListener('keyup', this.keyUp.bind(this));

    world;
    scene;
    turningValue = 3;
    C;
    RC;
    velocity = 0;
    RCMesh;


    addCar() {
        this.RCMesh = new THREE.Mesh(new THREE.SphereGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0 }));

        this.scene.add(this.RCMesh);
        this.C = new THREE.Vector3();
        this.C.set(-2400, 1, -1050);
        this.carBox = new CANNON.Body({ mass: 0 });
        const shape = new CANNON.Box(new CANNON.Vec3(30, 10, 15));
        this.carBox.addShape(shape);
        this.world.addBody(this.carBox);


        this.car = new THREE.Object3D();
        this.scene.add(this.car);

        //tires
        this.tireBL = this.tireFL.clone();
        this.tireBR = this.tireFL.clone();
        this.tireFR.position.set(-12, -10, -13);
        this.tireFR.rotation.x = Math.PI / 2;
        this.car.add(this.tireFR);
        this.tireFL.position.set(-12, -10, 13);
        this.tireFL.rotation.x = Math.PI / 2;
        this.car.add(this.tireFL);
        this.tireBL.position.set(12, -10, 12);
        this.tireBL.rotation.x = Math.PI / 2;
        this.car.add(this.tireBL);
        this.tireBR.position.set(12, -10, -12);
        this.tireBR.rotation.x = Math.PI / 2;
        this.car.add(this.tireBR);

        //CarBody
        const carObject = new THREE.Object3D();
        const gltfLoader = new THREE.GLTFLoader();
        gltfLoader.load('/game-portfolio/assets/car/bmw5.glb', (carModel) => {
            carObject.add(carModel.scene);
            carObject.scale.set(25, 25, 25);
            this.car.add(carObject);
            this.car.rotation.y+=Math.PI;
        })


    }

    slowDownCarIfKeysUp() {
        if (!this.arrowDown && !this.arrowUp) {
            if (this.velocity > -2 && this.velocity < 2) {
                this.velocity = 0
            }
            else if (this.velocity > 0) {
                this.velocity -= 0.1
            }
            else if (this.velocity < 0) {
                this.velocity += 0.1
            }

        }
    }

    straightenWheelsIfTurningKeysUp() {
        if (!this.arrowLeft && !this.arrowRight) {
            if (this.turningValue > 3.142) {
                this.turningValue -= 0.005
            }
            else if (this.turningValue < 3.142) {
                this.turningValue += 0.005
            }
            else if (this.turningValue = 3.142) {
                this.turningValue = 3.142;
            }

        }
    }

    turnLeftCarOnLeftArrowKeyDown() {
        if (this.arrowLeft)
            this.turningValue += 0.009;
    }

    turnRightCarOnRightArrowKeyDown() {
        if (this.arrowRight)
            this.turningValue -= 0.009;
    }


    accelerateCarOnForwardArrowKeyDown() {
        if (this.arrowUp)
            this.velocity += 0.5;
    }

    slowDownCarOnBackwardArrowKeyDown() {
        if (this.arrowDown) {
            this.velocity -= 1;
        }
    }
    animate() {
        this.slowDownCarIfKeysUp();
        this.straightenWheelsIfTurningKeysUp();
        this.accelerateCarOnForwardArrowKeyDown();
        this.slowDownCarOnBackwardArrowKeyDown();
        this.turnLeftCarOnLeftArrowKeyDown();
        this.turnRightCarOnRightArrowKeyDown();
        this.setMaxVelocityValue();
        this.setMaxTurningValue();
        this.simulateWorldMovingWhileDriving();
        this.updateTiresRotation();
        this.updateCameraPositionToFollowCar();
    }

    simulateWorldMovingWhileDriving() {
        this.RC = this.car.localToWorld(new THREE.Vector3(-12, 0, 24 / Math.tan(this.turningValue)));
        this.RCMesh.position.copy(this.RC);
        this.RCMesh.position.y = 0;
        const omega = this.velocity * Math.tan(this.turningValue)/24;
        const deltaT = 0.05;
        const vv = this.C.clone().sub(this.RC).applyAxisAngle(new THREE.Vector3(0, 1, 0), omega * deltaT);
        this.C = vv.add(this.RC);
        this.car.position.copy(this.C);
        this.car.position.y = 15;
        this.car.rotation.y += omega * deltaT;
    }

    updateCameraPositionToFollowCar() {
        const cameraOffset = this.car.localToWorld(new THREE.Vector3(40, 15, 0));
        this.camera.position.copy(cameraOffset);
        this.camera.lookAt(this.car.position);
    }

    updateTiresRotation() {
        this.tireFL.rotation.z = - this.turningValue;
        this.tireFR.rotation.z = - this.turningValue;
    }

    setMaxVelocityValue() {
        this.velocity = this.velocity > 80 ? 80 : this.velocity;
        this.velocity = this.velocity < -25 ? -25 : this.velocity;
    }

    setMaxTurningValue() {
        this.turningValue = this.turningValue > 3.3 ? 3.3 : this.turningValue;
        this.turningValue = this.turningValue < 3 ? 3 : this.turningValue;
    }

    updateCarPosition() {
        this.carBox.position.copy(this.car.position);
        this.carBox.quaternion.copy(this.car.quaternion);
    }

    keyUp(event) {
        this.keyboard[event.keyCode] = false;
        this.arrowUp = this.keyboard[38];
        this.arrowDown = this.keyboard[40];
        this.arrowLeft = this.keyboard[37];
        this.arrowRight = this.keyboard[39];
    }

    keyDown(event) {
        this.keyboard[event.keyCode] = true;
        this.arrowUp = this.keyboard[38];
        this.arrowDown = this.keyboard[40];
        this.arrowLeft = this.keyboard[37];
        this.arrowRight = this.keyboard[39];
    }

}