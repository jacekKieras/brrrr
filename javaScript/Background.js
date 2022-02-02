class Background {
    constructor(scene, loadingManager) {
        this.scene = scene;
        this.loadingManager = loadingManager;
    }

    scene;
    loadingManager;

    load() {
        let textureLoader = new THREE.CubeTextureLoader(this.loadingManager);
        textureLoader.setPath('../game-portfolio/assets/background/');
        const textureCube = textureLoader.load([
            'sh_lf.png',
            'sh_rt.png',
            'sh_up.png',
            'sh_dn.png',
            'sh_ft.png',
            'sh_bk.png'
        ]);
        this.scene.background = textureCube;
    }
}