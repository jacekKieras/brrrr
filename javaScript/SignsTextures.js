class SignsTextures {
    constructor(scene, LoadingManager) {
        this.scene = scene;
        this.LoadingManager = LoadingManager;
    }

    LoadingManager;
    scene;

    load() {
        this.addDeadEndSign();
        this.addDrivingOrderSign();
        this.addHighwaySign();
        this.addRoundaboutSign1();
        this.addRoundaboutSign2();
        this.addRoundaboutSign3();
        this.addRoundaboutSign4();
        this.addYellowDeadEndSign();
        this.addPlaceRoadSign();
        this.addleftTurnSign();
    }

    addRoundaboutSign4() {
        const signObject = new THREE.Object3D();
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 160, 10), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        pole.position.x += 100;
        signObject.add(pole);
        const bar = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 150, 10), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        bar.rotation.x += Math.PI / 2;
        bar.rotation.z -= Math.PI;
        bar.position.y += 80;
        bar.position.x += 100;
        bar.position.z -= 73;
        signObject.add(bar);
        const signTexture = new THREE.TextureLoader(this.LoadingManager).load("../game-portfolio/assets/roundaboutSignContact.png");
        const signGeometry = new THREE.PlaneGeometry(100, 30, 10);
        const signMaterial = new THREE.MeshBasicMaterial({ map: signTexture, transparent: true, side: THREE.FrontSide, alphaTest: 0.4 });
        const sign = new THREE.Mesh(signGeometry, signMaterial);
        sign.rotation.y += Math.PI / 2;
        sign.position.y += 80;
        sign.position.z -= 100;
        sign.position.x += 102;
        const signBack = new THREE.Mesh(new THREE.PlaneGeometry(100, 30, 1), new THREE.MeshBasicMaterial({ color: 0x687878 }));
        signBack.position.y += 80;
        signBack.position.z -= 100;
        signBack.position.x += 101;
        signBack.rotation.y -= Math.PI / 2;
        signObject.add(signBack);
        signObject.add(sign);
        signObject.position.set(300, 0, 1500);
        this.scene.add(signObject);
    }

    addRoundaboutSign3() {
        const signObject = new THREE.Object3D();
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 160, 10), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        pole.position.x += 100;
        signObject.add(pole);
        const bar = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 150, 10), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        bar.rotation.x += Math.PI / 2;
        bar.rotation.z -= Math.PI / 2;
        bar.position.y += 80;
        bar.position.x += 173;
        signObject.add(bar);
        const signTexture = new THREE.TextureLoader(this.LoadingManager).load("../game-portfolio/assets/roundaboutSignTechnologies.png");
        const signGeometry = new THREE.PlaneGeometry(100, 30, 10);
        const signMaterial = new THREE.MeshBasicMaterial({ map: signTexture, transparent: true, side: THREE.FrontSide, alphaTest: 0.4 });
        const sign = new THREE.Mesh(signGeometry, signMaterial);
        sign.rotation.y += Math.PI;
        sign.position.y += 80;
        sign.position.z += 1;
        sign.rotation.y += Math.PI;
        sign.position.x += 200;
        signObject.add(sign);
        const signBack = new THREE.Mesh(new THREE.PlaneGeometry(100, 30, 1), new THREE.MeshBasicMaterial({ color: 0x687878 }));
        signBack.position.y += 80;
        signBack.rotation.y += Math.PI;
        signBack.position.x += 200;
        signObject.add(signBack);
        signObject.position.set(-200, 0, 1900);
        this.scene.add(signObject);
    }


    addRoundaboutSign2() {
        const signObject = new THREE.Object3D();
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 160, 10), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        pole.position.x += 100;
        signObject.add(pole);
        const bar = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 150, 10), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        bar.rotation.x += Math.PI / 2;
        bar.rotation.z -= Math.PI;
        bar.position.y += 80;
        bar.position.x += 100;
        bar.position.z += 73;
        signObject.add(bar);
        const signTexture = new THREE.TextureLoader(this.LoadingManager).load("../game-portfolio/assets/roundaboutSignProjects.png");
        const signGeometry = new THREE.PlaneGeometry(100, 30, 10);
        const signMaterial = new THREE.MeshBasicMaterial({ map: signTexture, transparent: true, side: THREE.FrontSide, alphaTest: 0.4 });
        const sign = new THREE.Mesh(signGeometry, signMaterial);
        sign.rotation.y -= Math.PI / 2;
        sign.position.y += 80;
        sign.position.z += 100;
        sign.position.x += 99;
        const signBack = new THREE.Mesh(new THREE.PlaneGeometry(100, 30, 1), new THREE.MeshBasicMaterial({ color: 0x687878 }));
        signBack.position.y += 80;
        signBack.position.z += 100;
        signBack.position.x += 99;
        signBack.rotation.y += Math.PI / 2;
        signObject.add(signBack);
        signObject.add(sign);
        signObject.position.set(-600, 0, 1200);
        this.scene.add(signObject);
    }


    addRoundaboutSign1() {
        const signObject = new THREE.Object3D();
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 160, 10), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        pole.position.x += 100;
        signObject.add(pole);
        const bar = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 150, 10), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        bar.rotation.x += Math.PI / 2;
        bar.rotation.z -= Math.PI / 2;
        bar.position.y += 80;
        bar.position.x += 26;
        signObject.add(bar);
        const signTexture = new THREE.TextureLoader(this.LoadingManager).load("../game-portfolio/assets/roundaboutSign.png");
        const signGeometry = new THREE.PlaneGeometry(100, 30, 10);
        const signMaterial = new THREE.MeshBasicMaterial({ map: signTexture, transparent: true, side: THREE.FrontSide, alphaTest: 0.4 });
        const sign = new THREE.Mesh(signGeometry, signMaterial);
        sign.rotation.y += Math.PI;
        sign.position.y += 80;
        sign.position.z -= 1;
        signObject.add(sign);
        const signBack = new THREE.Mesh(new THREE.PlaneGeometry(100, 30, 1), new THREE.MeshBasicMaterial({ color: 0x687878 }));
        signBack.position.y += 80;
        signObject.add(signBack);
        signObject.position.set(0, 0, 900);
        this.scene.add(signObject);
    }


    addHighwaySign() {
        const highwaySignObject = new THREE.Object3D();
        const leftPole = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 200, 10), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        highwaySignObject.add(leftPole);
        const rightPole = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 200, 10), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        rightPole.position.z += 200;
        highwaySignObject.add(rightPole);
        const bar = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 202, 10), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        bar.rotation.x += Math.PI / 2;
        bar.position.y += 100;
        bar.position.z += 100;
        highwaySignObject.add(bar);
        const highwaySignTexture = new THREE.TextureLoader(this.LoadingManager).load("../game-portfolio/assets/highwaySign.png");
        const highwaySignGeometry = new THREE.PlaneGeometry(150, 80, 10);
        const highwaySignMaterial = new THREE.MeshBasicMaterial({ map: highwaySignTexture, transparent: true, side: THREE.FrontSide, alphaTest: 0.4 });
        const highwaySign = new THREE.Mesh(highwaySignGeometry, highwaySignMaterial);
        highwaySign.position.y += 100;
        highwaySign.position.z += 100;
        highwaySign.position.x -= 2;
        highwaySign.rotation.y -= Math.PI / 2;
        const signBack = new THREE.Mesh(new THREE.PlaneGeometry(55, 30, 2), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        signBack.position.y += 100;
        signBack.position.z += 100;
        signBack.position.x += 1;
        signBack.rotation.y += Math.PI / 2;
        highwaySignObject.add(signBack);
        highwaySignObject.add(highwaySign);
        highwaySignObject.position.set(-500, 0, -1150);
        this.scene.add(highwaySignObject);
    }

    addPlaceRoadSign() {
        const signObject = new THREE.Object3D();
        const signTexture = new THREE.TextureLoader(this.LoadingManager).load('../game-portfolio/assets/placeRoadSign.png');
        const signFace = new THREE.Mesh(new THREE.PlaneGeometry(100, 50, 1), new THREE.MeshBasicMaterial({ map: signTexture, transparent: true, side: THREE.FrontSide, alphaTest: 0.4 }));
        signFace.position.y += 51;
        signObject.add(signFace);
        const signBack = new THREE.Mesh(new THREE.PlaneGeometry(50, 10, 1), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        signBack.position.y += 50;
        signBack.position.z -= 0.1;
        signBack.rotation.x -= Math.PI;
        signObject.add(signBack);
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 92, 10), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        signObject.add(pole);
        signObject.position.set(-70, 0, -500);
        signObject.rotation.y += Math.PI;
        this.scene.add(signObject);
    }

    addleftTurnSign() {
        const signObject = new THREE.Object3D();
        const signTexture = new THREE.TextureLoader(this.LoadingManager).load('../game-portfolio/assets/drivingOrderSign.png');
        const signFace = new THREE.Mesh(new THREE.CircleGeometry(10, 32, 1), new THREE.MeshBasicMaterial({ map: signTexture }));
        signFace.position.y += 61;
        signFace.rotation.z += Math.PI / 2;
        signObject.add(signFace);
        const signBack = new THREE.Mesh(new THREE.CircleGeometry(10, 32, 1), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        signBack.position.y += 61;
        signBack.position.z -= 0.1;
        signBack.rotation.x -= Math.PI;
        signObject.add(signBack);
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 102, 10), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        signObject.add(pole);
        signObject.position.set(100, 0, -1100);
        signObject.rotation.y += Math.PI / 2;
        this.scene.add(signObject);
    }

    addYellowDeadEndSign() {
        const signObject = new THREE.Object3D();
        const signTexture = new THREE.TextureLoader(this.LoadingManager).load("../game-portfolio/assets/deadEnd.png");
        const signFace = new THREE.Mesh(new THREE.CircleGeometry(10, 4, 0), new THREE.MeshBasicMaterial({ map: signTexture }));
        signFace.position.y += 60;
        signObject.add(signFace);
        const signBack = new THREE.Mesh(new THREE.CircleGeometry(10, 4, 0), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        signBack.position.y += 60;
        signBack.position.z -= 0.1;
        signBack.rotation.x += Math.PI;
        signObject.add(signBack);
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 102, 10), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        signObject.add(pole);
        signObject.position.set(1500, 0, -1050);
        signObject.rotation.y -= Math.PI / 2;
        this.scene.add(signObject);
    }

    addDeadEndSign() {
        const deadEndRoadSignObject = new THREE.Object3D();
        let deadEndSignTexture = new THREE.TextureLoader(this.LoadingManager).load('../game-portfolio/assets/deadendsign.png');
        deadEndSignTexture.wrapS = THREE.RepeatWrapping;
        deadEndSignTexture.wrapT = THREE.RepeatWrapping;
        deadEndSignTexture.repeat.set(1, 1);
        const deadEndSignFace = new THREE.Mesh(new THREE.BoxGeometry(10, 8, 0.1), new THREE.MeshBasicMaterial({ map: deadEndSignTexture }));
        deadEndSignFace.position.y += 55;
        deadEndRoadSignObject.add(deadEndSignFace);
        const deadEndSignBack = new THREE.Mesh(new THREE.BoxGeometry(10, 8, 0.1), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        deadEndSignBack.position.y += 55;
        deadEndSignBack.position.z -= 0.1;
        deadEndSignBack.rotation.x += Math.PI;
        deadEndRoadSignObject.add(deadEndSignBack);
        const deadEndPole = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 102, 10), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        deadEndRoadSignObject.add(deadEndPole);
        deadEndRoadSignObject.position.set(1200, 0, -1000);
        deadEndRoadSignObject.rotation.y -= Math.PI / 2;
        this.scene.add(deadEndRoadSignObject);
    }

    addDrivingOrderSign() {
        const roadSignObject = new THREE.Object3D();
        let signTexture = new THREE.TextureLoader(this.LoadingManager).load("../game-portfolio/assets/drivingOrderSign.png");
        signTexture.wrapS = THREE.RepeatWrapping;
        signTexture.wrapT = THREE.RepeatWrapping;
        signTexture.repeat.set(1, 1);
        const signFace = new THREE.Mesh(new THREE.CircleGeometry(10, 32, 2), new THREE.MeshBasicMaterial({ map: signTexture }));
        signFace.position.y += 60;
        roadSignObject.add(signFace);
        const signBack = new THREE.Mesh(new THREE.CircleGeometry(10, 32, 2), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        signBack.position.y += 60;
        signBack.position.z -= 0.1;
        signBack.rotation.x += Math.PI;
        roadSignObject.add(signBack);
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 102, 10), new THREE.MeshBasicMaterial({ color: 0x787878 }));
        roadSignObject.add(pole);
        roadSignObject.position.set(-150, 0, -1000);
        roadSignObject.rotation.y -= Math.PI / 2;
        this.scene.add(roadSignObject);
    }
}