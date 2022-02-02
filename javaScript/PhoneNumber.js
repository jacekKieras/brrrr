class PhoneNumber {

    constructor(scene) {
        this.scene = scene;
    }

    scene;

    createPhoneText() {
        const pointLight = new THREE.PointLight(0xffffff, 1.5); pointLight.position.set(200, 100, 1190);
        this.scene.add(pointLight);
        const fontloader = new THREE.FontLoader();
        const font = fontloader.load('../game-portfolio/assets/Ethnocentric Rg_Regular.json', (loadedFont) => {
            const textGeometry = new THREE.TextGeometry('517 827 955', {
                font: loadedFont,
                size: 20,
                height: 10,
                curveSegments: 20,
            });
            const textMesh = new THREE.Mesh(textGeometry, [new THREE.MeshPhongMaterial({ color: 0xfcba03, flatShading: true }), // front
            new THREE.MeshPhongMaterial({ color: 0xfc5603 })]);
            textMesh.position.set(0, 0.1, 1600);
            textMesh.rotation.y += Math.PI / 2;
            textMesh.scale.set(2, 2, 2);
            this.scene.add(textMesh);
        })
    }
}