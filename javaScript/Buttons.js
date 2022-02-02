class Buttons {

    constructor(scene, boxesTextures, car) {
        this.scene = scene;
        this.boxesTextures = boxesTextures;
        this.car = car;
        this.buttonsInfo.innerHTML = this.collectedButtons;
        this.phoneNumber = new PhoneNumber(this.scene);

    }
    collectedButtons = 0;
    scene;
    boxesTextures;
    car;
    buttonsInfo = document.querySelector('.collected-buttons');
    contactInfo = document.querySelector('.email-container');
    projectTip = document.querySelector('.project-tip');
    phoneTip = document.querySelector('.phone-tip');
    winMessage = document.querySelector('.win-message');
    phoneNumber;

    addCollectedButtonsValue() {
        this.collectedButtons += 1;
        this.buttonsInfo.innerHTML = this.collectedButtons;
    }

    addTechnologiesButton() {
        const buttonObject = new THREE.Object3D();
        let color = 0xf20000;

        const center = new THREE.Mesh(new THREE.CylinderGeometry(20, 20, 10, 32), new THREE.MeshBasicMaterial({ color: color }));
        center.position.y -= 2;
        buttonObject.add(center);

        const outside = new THREE.Mesh(new THREE.BoxGeometry(40, 2, 40), new THREE.MeshBasicMaterial({ color: 0xfff000, wireframe: false }));
        buttonObject.add(outside);
        buttonObject.position.set(0, 1, 3700);

        const interval = setInterval(() => {
            if ((this.car.car.position.x - buttonObject.position.x <= 15 && this.car.car.position.x - buttonObject.position.x >= -15)
                && (this.car.car.position.z - buttonObject.position.z <= 15 && this.car.car.position.z - buttonObject.position.z >= -15)) {
                buttonObject.remove(center);
                const newCenter = new THREE.Mesh(new THREE.CylinderGeometry(20, 20, 10, 32), new THREE.MeshBasicMaterial({ color: 0x07f72f }));
                newCenter.position.y -= 3.5;
                buttonObject.add(newCenter);
                this.boxesTextures.addTechnologiesBoxes();
                clearInterval(interval);
                this.addCollectedButtonsValue();
                if (this.collectedButtons == 3) {
                    this.phoneTip.style.display = 'block';
                    this.winMessage.style.display = 'block';
                    this.phoneNumber.createPhoneText();
                }
            }
        }, 500)
        this.scene.add(buttonObject);
    }

    addProjectsButton(projects) {
        const buttonObject = new THREE.Object3D();
        let color = 0xf20000;

        const center = new THREE.Mesh(new THREE.CylinderGeometry(20, 20, 10, 32), new THREE.MeshBasicMaterial({ color: color }));
        center.position.y -= 2;
        buttonObject.add(center);

        const outside = new THREE.Mesh(new THREE.BoxGeometry(40, 2, 40), new THREE.MeshBasicMaterial({ color: 0xfff000, wireframe: false }));
        buttonObject.add(outside);
        buttonObject.position.set(-2300, 1, 1300);

        const interval = setInterval(() => {
            if ((this.car.car.position.x - buttonObject.position.x <= 15 && this.car.car.position.x - buttonObject.position.x >= -15)
                && (this.car.car.position.z - buttonObject.position.z <= 15 && this.car.car.position.z - buttonObject.position.z >= -15)) {
                buttonObject.remove(center);
                const newCenter = new THREE.Mesh(new THREE.CylinderGeometry(20, 20, 10, 32), new THREE.MeshBasicMaterial({ color: 0x07f72f }));
                newCenter.position.y -= 3.5;
                buttonObject.add(newCenter);
                console.log('contactProjects');
                this.projectTip.style.display = 'block';
                projects.slideOutProjects();
                clearInterval(interval);
                this.addCollectedButtonsValue();
                if (this.collectedButtons == 3) {
                    this.phoneTip.style.display = 'block';
                    this.winMessage.style.display = 'block';
                    this.phoneNumber.createPhoneText();
                }
            }
        }, 500)
        this.scene.add(buttonObject);
    }



    addContactButton() {
        const buttonObject = new THREE.Object3D();
        let color = 0xf20000;

        const center = new THREE.Mesh(new THREE.CylinderGeometry(20, 20, 10, 32), new THREE.MeshBasicMaterial({ color: color }));
        center.position.y -= 2;
        buttonObject.add(center);

        const outside = new THREE.Mesh(new THREE.BoxGeometry(40, 2, 40), new THREE.MeshBasicMaterial({ color: 0xfff000, wireframe: false }));
        buttonObject.add(outside);
        buttonObject.position.set(2200, 1, 1400);

        const interval = setInterval(() => {
            if ((this.car.car.position.x - buttonObject.position.x <= 15 && this.car.car.position.x - buttonObject.position.x >= -15)
                && (this.car.car.position.z - buttonObject.position.z <= 15 && this.car.car.position.z - buttonObject.position.z >= -15)) {
                buttonObject.remove(center);
                const newCenter = new THREE.Mesh(new THREE.CylinderGeometry(20, 20, 10, 32), new THREE.MeshBasicMaterial({ color: 0x07f72f }));
                newCenter.position.y -= 3.5;
                buttonObject.add(newCenter);
                console.log('contact,phone');
                clearInterval(interval);
                this.addCollectedButtonsValue();
                if (this.collectedButtons == 3) {
                    this.phoneTip.style.display = 'block';
                    this.winMessage.style.display = 'block';
                    this.phoneNumber.createPhoneText();
                }
                this.contactInfo.style.display = 'block';
            }
        }, 500)
        this.scene.add(buttonObject);
    }
}