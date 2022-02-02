class Game {

    constructor() {
        this.init();
    }

    scene;
    camera;
    renderer;
    car;
    world = new CANNON.World();
    scene = new THREE.Scene();
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    boxesTextures;
    loadingManager;
    roadTextures;
    signsTextures;
    loadingScreen;
    resourcesLoaded = false;
    buttons;
    resize = window.addEventListener('resize', this.onWindowResize.bind(this));
    mouseMove = window.addEventListener('mousemove', this.onMouseMove.bind(this), false);
    mouseClick = window.addEventListener('mousedown', this.onMouseClick.bind(this), false);
    isEnterPressed = false;
    wasTipsScreenShown = false;
    email = new Mail(this.scene);
    airplane = new Airplane(this.scene, this.email);
    intersects = [];
    projects = new Projects(this.scene);

    showTipsScreen() {
        document.querySelector('.tips').style.display = 'block';
    }
    
    hideTipsScreenOnEnterKeyPress() {
        const tipsScreen = document.querySelector('.tips');
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            if (keyName == 'Enter') {
                tipsScreen.style.display = 'none';
                document.querySelector('.buttons-info').style.display = 'block';
                this.isEnterPressed = true;
            }
        }, false);
    }

    init() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.loadingManager = new THREE.LoadingManager();
        this.boxesTextures = new BoxesTextures(this.scene, this.world, this.loadingManager);
        this.roadTextures = new RoadTextures(this.scene, this.loadingManager);
        this.signsTextures = new SignsTextures(this.scene, this.loadingManager);
        this.loadingScreen = new LoadingScreen();
        this.loadingScreen.create();
        this.createOnContactPhysics();
        this.scene.fog = new THREE.FogExp2(new THREE.Color(0xffffff), 0.002);
        this.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.4, 1000);
        this.world.gravity.set(0, -29.8, 0);
        this.world.broadphase = new CANNON.NaiveBroadphase();
        this.world.solver.iterations = 5;
        this.car = new Car(this.scene, this.world, this.camera);
        this.setLoadingManager();
        document.body.appendChild(this.renderer.domElement);
        this.hideTipsScreenOnEnterKeyPress();
        this.loadTextures();
        this.createDirectionalLight();
        this.animate();
    }


    createOnContactPhysics() {
        const physicsMaterial = new CANNON.Material("slipperyMaterial");
        var physicsContactMaterial = new CANNON.ContactMaterial(physicsMaterial, physicsMaterial, {
            friction: 10.0,
            restitution: 0.0,
            contactEquationRelaxation: 10.0,
            frictionEquationStiffness: 1
        });
        this.world.addContactMaterial(physicsContactMaterial);
    }

    setLoadingManager() {
        this.loadingManager.onProgress = function (item, loaded, total) {
            console.log(item, loaded, total);
        };
        this.loadingManager.onLoad = () => {
            console.log("loaded all resources");
            this.resourcesLoaded = true;
            if (this.wasTipsScreenShown == false) {
                this.wasTipsScreenShown = true;
                this.showTipsScreen();
            }
        };
    }

    createDirectionalLight() {
        const directionalLight = new THREE.DirectionalLight(0xffffff, 15);
        directionalLight.position.set(0, 1, 0);
        directionalLight.castShadow = true;
        this.scene.add(directionalLight);
    }


    loadTextures() {
        this.loadBackground();
        this.loadGrass();
        this.car.addCar();
        this.loadButtons();
        this.signsTextures.load();
        this.roadTextures.load();
    }

    loadBackground() {
        const background = new Background(this.scene, this.loadingManager);
        background.load();
    }

    loadGrass() {
        const grass = new Grass(this.scene, this.world);
        grass.load();
    }

    loadButtons() {
        this.buttons = new Buttons(this.scene, this.boxesTextures, this.car, this.airplane);
        this.buttons.addTechnologiesButton();
        this.buttons.addProjectsButton(this.projects);
        this.buttons.addContactButton();
        this.projects.addProjects();
    }

    animate() {
        if (this.resourcesLoaded == false) {
            this.animateLoadingScreen();
        } else
            this.animateGame();
    }

    animateLoadingScreen() {
        window.requestAnimationFrame(this.animate.bind(this));
        this.loadingScreen.animation();
        this.renderer.render(this.loadingScreen.scene, this.loadingScreen.camera);
        return;
    }

    animateGame() {
        requestAnimationFrame(this.animate.bind(this));
        if (this.isEnterPressed == true) {
            this.car.animate();
            this.airplane.animate();
            this.updatePhysics();
            this.raycaster.setFromCamera(this.mouse, this.camera);
            this.intersects = this.raycaster.intersectObjects(this.scene.children);
            this.renderer.render(this.scene, this.camera);
        }
    }


    updatePhysics() {
        this.boxesTextures.updatePhysics();
        this.car.updateCarPosition();
        const timeStep = 1 / 60;
        this.world.step(timeStep);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    onMouseMove(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    }

    onMouseClick() {
        if (this.intersects.length > 0) {
            this.projects.setProjectInfoOnClick(this.intersects[0].object.name);
        }
    }
}