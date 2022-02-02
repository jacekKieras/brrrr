class BoxesTextures {
    constructor(scene, world, loadingManager) {
        this.world = world;
        this.scene = scene;
        this.loadingManager = loadingManager;
    }

    world;
    scene;
    loadingManager;
    boxes = {
        javaScript: {
            mesh: null,
            body: null
        },
        typeScript: {
            mesh: null,
            body: null
        },
        cSharp: {
            mesh: null,
            body: null
        },
        entityFramework: {
            mesh: null,
            body: null
        },
        html: {
            mesh: null,
            body: null
        },
        css: {
            mesh: null,
            body: null
        },
        rwd: {
            mesh: null,
            body: null
        },
        sql: {
            mesh: null,
            body: null
        },
        rest: {
            mesh: null,
            body: null
        },
        three: {
            mesh: null,
            body: null
        },
        angular: {
            mesh: null,
            body: null
        },
    }

    addTechnologiesBoxes() {
        this.addCSharpBox()
        this.addEntityFrameworkBox();
        this.addJavaScriptBox();
        this.addTypeScriptBox();
        this.addHtmlBox();
        this.addCssBox();
        this.addAngularBox();
        this.addRwdBox();
        this.addSqlBox();
        this.addRestBox();
        this.addThreeBox();
    }


    addThreeBox() {
        const threeTexture = new THREE.TextureLoader(this.loadingManager).load('../game-portfolio/assets/three.png');
        this.boxes.three.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: threeTexture }));
        this.scene.add(this.boxes.three.mesh);
        this.boxes.three.body = new CANNON.Body({ mass: 1100 });
        const threeShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.three.body.addShape(threeShape);
        this.boxes.three.body.position.set(40, 400, 4100);
        this.world.addBody(this.boxes.three.body);
    }

    addRestBox() {
        const restTexture = new THREE.TextureLoader(this.loadingManager).load('../game-portfolio/assets/rest.png');
        this.boxes.rest.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: restTexture }));
        this.scene.add(this.boxes.rest.mesh);
        this.boxes.rest.body = new CANNON.Body({ mass: 1100 });
        const restShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.rest.body.addShape(restShape);
        this.boxes.rest.body.position.set(-20, 280, 4100);
        this.world.addBody(this.boxes.rest.body);
    }

    addSqlBox() {
        const sqlTexture = new THREE.TextureLoader(this.loadingManager).load('../game-portfolio/assets/sql.png');
        this.boxes.sql.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: sqlTexture }));
        this.scene.add(this.boxes.sql.mesh);
        this.boxes.sql.body = new CANNON.Body({ mass: 1100 });
        const sqlShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.sql.body.addShape(sqlShape);
        this.boxes.sql.body.position.set(60, 280, 4100);
        this.world.addBody(this.boxes.sql.body);
    }

    addRwdBox() {
        const rwdTexture = new THREE.TextureLoader(this.loadingManager).load('../game-portfolio/assets/rwd.png');
        this.boxes.rwd.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: rwdTexture }));
        this.scene.add(this.boxes.rwd.mesh);
        this.boxes.rwd.body = new CANNON.Body({ mass: 1100 });
        const rwdShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.rwd.body.addShape(rwdShape);
        this.boxes.rwd.body.position.set(-40, 400, 4100);
        this.world.addBody(this.boxes.rwd.body);
    }



    addAngularBox() {
        const angularTexture = new THREE.TextureLoader(this.LoadingManager).load('../game-portfolio/assets/angular.png');
        this.boxes.angular.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: angularTexture }));
        this.scene.add(this.boxes.angular.mesh);
        this.boxes.angular.body = new CANNON.Body({ mass: 1100 });
        const angularShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.angular.body.addShape(angularShape);
        this.boxes.angular.body.position.set(0, 400, 4100);
        this.world.addBody(this.boxes.angular.body);
    }

    addCssBox() {
        const cssTexture = new THREE.TextureLoader(this.LoadingManager).load('../game-portfolio/assets/css.png');
        this.boxes.css.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: cssTexture }));
        this.scene.add(this.boxes.css.mesh);
        this.boxes.css.body = new CANNON.Body({ mass: 1100 });
        const cssShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.css.body.addShape(cssShape);
        this.boxes.css.body.position.set(-20, 340, 4100);
        this.world.addBody(this.boxes.css.body);
    }

    addHtmlBox() {
        const htmlTexture = new THREE.TextureLoader(this.loadingManager).load('../game-portfolio/assets/html.png');
        this.boxes.html.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: htmlTexture }));
        this.scene.add(this.boxes.html.mesh);
        this.boxes.html.body = new CANNON.Body({ mass: 1100 });
        const htmlShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.html.body.addShape(htmlShape);
        this.boxes.html.body.position.set(-60, 340, 4100);
        this.world.addBody(this.boxes.html.body);
    }

    addEntityFrameworkBox() {
        const entityFrameworkTexture = new THREE.TextureLoader(this.loadingManager).load('../game-portfolio/assets/ef.png');
        this.boxes.entityFramework.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: entityFrameworkTexture }));
        this.scene.add(this.boxes.entityFramework.mesh);
        this.boxes.entityFramework.body = new CANNON.Body({ mass: 1100 });
        const entityFrameworkShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.entityFramework.body.addShape(entityFrameworkShape);
        this.boxes.entityFramework.body.position.set(-60, 280, 4100);
        this.world.addBody(this.boxes.entityFramework.body);
    }

    addCSharpBox() {
        const cSharpTexture = new THREE.TextureLoader(this.loadingManager).load('../game-portfolio/assets/csharp.png');
        this.boxes.cSharp.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: cSharpTexture }));
        this.scene.add(this.boxes.cSharp.mesh);
        this.boxes.cSharp.body = new CANNON.Body({ mass: 1100 });
        const cSharpShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.cSharp.body.addShape(cSharpShape);
        this.boxes.cSharp.body.position.set(20, 280, 4100);
        this.world.addBody(this.boxes.cSharp.body);
    }

    addJavaScriptBox() {
        const javaScriptTexture = new THREE.TextureLoader(this.loadingManager).load('../game-portfolio/assets/javascript.png');
        this.boxes.javaScript.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: javaScriptTexture }));
        this.scene.add(this.boxes.javaScript.mesh);
        this.boxes.javaScript.body = new CANNON.Body({ mass: 1100 });
        const javaScriptShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.javaScript.body.addShape(javaScriptShape);
        this.boxes.javaScript.body.position.set(60, 340, 4100);
        this.world.addBody(this.boxes.javaScript.body);
    }
    addTypeScriptBox() {
        const typeScriptTexture = new THREE.TextureLoader(this.loadingManager).load('../game-portfolio/assets/typescript.png');
        this.boxes.typeScript.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: typeScriptTexture }));
        this.scene.add(this.boxes.typeScript.mesh);
        this.boxes.typeScript.body = new CANNON.Body({ mass: 1100 });
        const typeScriptShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.typeScript.body.addShape(typeScriptShape);
        this.boxes.typeScript.body.position.set(20, 340, 4100);
        this.world.addBody(this.boxes.typeScript.body);
    }


    copyBoxesPositionAndQuaternionIfLoaded() {
        for (const key in this.boxes) {
            if (this.boxes[key].body != null) {
                this.boxes[key].mesh.position.copy(this.boxes[key].body.position);
                this.boxes[key].mesh.quaternion.copy(this.boxes[key].body.quaternion);
            }
        }
    }
    
    updatePhysics() {
        this.copyBoxesPositionAndQuaternionIfLoaded();
    }
}     
