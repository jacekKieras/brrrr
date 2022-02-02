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
        angular1: {
            mesh: null,
            body: null
        },
        box41: {
            mesh: null,
            body: null
        },
        box42: {
            mesh: null,
            body: null
        },
        box43: {
            mesh: null,
            body: null
        }
        ,
        box44: {
            mesh: null,
            body: null
        },
        box51: {
            mesh: null,
            body: null
        },
        box52: {
            mesh: null,
            body: null
        },
        box53: {
            mesh: null,
            body: null
        }
        ,
        box54: {
            mesh: null,
            body: null
        },
        box61: {
            mesh: null,
            body: null
        },
        box62: {
            mesh: null,
            body: null
        },
        box63: {
            mesh: null,
            body: null
        }
        ,
        box64: {
            mesh: null,
            body: null
        }
        ,
        box71: {
            mesh: null,
            body: null
        },
        box72: {
            mesh: null,
            body: null
        },
        box73: {
            mesh: null,
            body: null
        }
        ,
        box74: {
            mesh: null,
            body: null
        }
    }

    addTechnologiesBoxes() {
        this.addCSharpBox()
        this.addEntityFrameworkBox();
        this.addJavaScriptBox();
        this.addTypeScriptBox();
        this.addHtmlBox();
        this.addCssBox();
        this.addAngularBox();
        this.addAngularBox1();
        this.addRwdBox();
        this.addSqlBox();
        this.addRestBox();
        this.addThreeBox();
        this.add41Box();
        this.add42Box();
        this.add43Box();
        this.add44Box();
        this.add51Box();
        this.add52Box();
        this.add53Box();
        this.add54Box();
        this.add61Box();
        this.add62Box();
        this.add63Box();
        this.add64Box();
        this.add71Box();
        this.add72Box();
        this.add73Box();
        this.add74Box();
    }
    add71Box() {
        const rwdTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/javascript.png');
        this.boxes.box71.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: rwdTexture }));
        this.scene.add(this.boxes.box71.mesh);
        this.boxes.box71.body = new CANNON.Body({ mass: 1100 });
        const rwdShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.box71.body.addShape(rwdShape);
        this.boxes.box71.body.position.set(-60, 570, 4100);
        this.world.addBody(this.boxes.box71.body);
    }

    add72Box() {
        const rwdTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/restOkno.png');
        this.boxes.box72.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: rwdTexture }));
        this.scene.add(this.boxes.box72.mesh);
        this.boxes.box72.body = new CANNON.Body({ mass: 1100 });
        const rwdShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.box72.body.addShape(rwdShape);
        this.boxes.box72.body.position.set(-20, 570, 4100);
        this.world.addBody(this.boxes.box62.body);
    }

    add73Box() {
        const rwdTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/restOkno.png');
        this.boxes.box73.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: rwdTexture }));
        this.scene.add(this.boxes.box73.mesh);
        this.boxes.box73.body = new CANNON.Body({ mass: 1100 });
        const rwdShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.box73.body.addShape(rwdShape);
        this.boxes.box73.body.position.set(20, 570, 4100);
        this.world.addBody(this.boxes.box73.body);
    }
    add74Box() {
        const rwdTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/javascript.png');
        this.boxes.box74.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: rwdTexture }));
        this.scene.add(this.boxes.box74.mesh);
        this.boxes.box74.body = new CANNON.Body({ mass: 1100 });
        const rwdShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.box74.body.addShape(rwdShape);
        this.boxes.box74.body.position.set(60, 570, 4100);
        this.world.addBody(this.boxes.box74.body);
    }

    add61Box() {
        const rwdTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/javascript.png');
        this.boxes.box61.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: rwdTexture }));
        this.scene.add(this.boxes.box61.mesh);
        this.boxes.box61.body = new CANNON.Body({ mass: 1100 });
        const rwdShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.box61.body.addShape(rwdShape);
        this.boxes.box61.body.position.set(-60, 530, 4100);
        this.world.addBody(this.boxes.box61.body);
    }

    add62Box() {
        const rwdTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/restOkno.png');
        this.boxes.box62.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: rwdTexture }));
        this.scene.add(this.boxes.box62.mesh);
        this.boxes.box62.body = new CANNON.Body({ mass: 1100 });
        const rwdShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.box62.body.addShape(rwdShape);
        this.boxes.box62.body.position.set(-20, 530, 4100);
        this.world.addBody(this.boxes.box62.body);
    }

    add63Box() {
        const rwdTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/restOkno.png');
        this.boxes.box63.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: rwdTexture }));
        this.scene.add(this.boxes.box63.mesh);
        this.boxes.box63.body = new CANNON.Body({ mass: 1100 });
        const rwdShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.box63.body.addShape(rwdShape);
        this.boxes.box63.body.position.set(20, 530, 4100);
        this.world.addBody(this.boxes.box63.body);
    }
    add64Box() {
        const rwdTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/javascript.png');
        this.boxes.box64.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: rwdTexture }));
        this.scene.add(this.boxes.box64.mesh);
        this.boxes.box64.body = new CANNON.Body({ mass: 1100 });
        const rwdShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.box64.body.addShape(rwdShape);
        this.boxes.box64.body.position.set(60, 530, 4100);
        this.world.addBody(this.boxes.box64.body);
    }

    add51Box() {
        const rwdTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/javascript.png');
        this.boxes.box51.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: rwdTexture }));
        this.scene.add(this.boxes.box51.mesh);
        this.boxes.box51.body = new CANNON.Body({ mass: 1100 });
        const rwdShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.box51.body.addShape(rwdShape);
        this.boxes.box51.body.position.set(-60, 490, 4100);
        this.world.addBody(this.boxes.box51.body);
    }

    add52Box() {
        const rwdTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/restOkno.png');
        this.boxes.box52.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: rwdTexture }));
        this.scene.add(this.boxes.box52.mesh);
        this.boxes.box52.body = new CANNON.Body({ mass: 1100 });
        const rwdShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.box52.body.addShape(rwdShape);
        this.boxes.box52.body.position.set(-20, 490, 4100);
        this.world.addBody(this.boxes.box52.body);
    }

    add53Box() {
        const rwdTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/restOkno.png');
        this.boxes.box53.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: rwdTexture }));
        this.scene.add(this.boxes.box53.mesh);
        this.boxes.box53.body = new CANNON.Body({ mass: 1100 });
        const rwdShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.box53.body.addShape(rwdShape);
        this.boxes.box53.body.position.set(20, 490, 4100);
        this.world.addBody(this.boxes.box53.body);
    }
    add54Box() {
        const rwdTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/javascript.png');
        this.boxes.box54.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: rwdTexture }));
        this.scene.add(this.boxes.box54.mesh);
        this.boxes.box54.body = new CANNON.Body({ mass: 1100 });
        const rwdShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.box54.body.addShape(rwdShape);
        this.boxes.box54.body.position.set(60, 490, 4100);
        this.world.addBody(this.boxes.box54.body);
    }
    add41Box() {
        const rwdTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/javascript.png');
        this.boxes.box41.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: rwdTexture }));
        this.scene.add(this.boxes.box41.mesh);
        this.boxes.box41.body = new CANNON.Body({ mass: 1100 });
        const rwdShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.box41.body.addShape(rwdShape);
        this.boxes.box41.body.position.set(-60, 450, 4100);
        this.world.addBody(this.boxes.box41.body);
    }

    add42Box() {
        const rwdTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/restOkno.png');
        this.boxes.box42.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: rwdTexture }));
        this.scene.add(this.boxes.box42.mesh);
        this.boxes.box42.body = new CANNON.Body({ mass: 1100 });
        const rwdShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.box42.body.addShape(rwdShape);
        this.boxes.box42.body.position.set(-20, 450, 4100);
        this.world.addBody(this.boxes.box42.body);
    }

    add43Box() {
        const rwdTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/restOkno.png');
        this.boxes.box43.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: rwdTexture }));
        this.scene.add(this.boxes.box43.mesh);
        this.boxes.box43.body = new CANNON.Body({ mass: 1100 });
        const rwdShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.box43.body.addShape(rwdShape);
        this.boxes.box43.body.position.set(20, 450, 4100);
        this.world.addBody(this.boxes.box43.body);
    }

    add44Box() {
        const rwdTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/javascript.png');
        this.boxes.box44.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: rwdTexture }));
        this.scene.add(this.boxes.box44.mesh);
        this.boxes.box44.body = new CANNON.Body({ mass: 1100 });
        const rwdShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.box44.body.addShape(rwdShape);
        this.boxes.box44.body.position.set(60, 450, 4100);
        this.world.addBody(this.boxes.box44.body);
    }

    addRwdBox() {
        const rwdTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/restOkno.png');
        this.boxes.rwd.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: rwdTexture }));
        this.scene.add(this.boxes.rwd.mesh);
        this.boxes.rwd.body = new CANNON.Body({ mass: 1100 });
        const rwdShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.rwd.body.addShape(rwdShape);
        this.boxes.rwd.body.position.set(-20, 400, 4100);
        this.world.addBody(this.boxes.rwd.body);
    }

    addThreeBox() {
        const threeTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/javascript.png');
        this.boxes.three.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: threeTexture }));
        this.scene.add(this.boxes.three.mesh);
        this.boxes.three.body = new CANNON.Body({ mass: 1100 });
        const threeShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.three.body.addShape(threeShape);
        this.boxes.three.body.position.set(-60, 400, 4100);
        this.world.addBody(this.boxes.three.body);
    }



    addAngularBox() {
        const angularTexture = new THREE.TextureLoader(this.LoadingManager).load('../brrrr/assets/restOkno.png');
        this.boxes.angular.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: angularTexture }));
        this.scene.add(this.boxes.angular.mesh);
        this.boxes.angular.body = new CANNON.Body({ mass: 1100 });
        const angularShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.angular.body.addShape(angularShape);
        this.boxes.angular.body.position.set(20, 400, 4100);
        this.world.addBody(this.boxes.angular.body);
    }

    addAngularBox1() {
        const angularTexture = new THREE.TextureLoader(this.LoadingManager).load('../brrrr/assets/javascript.png');
        this.boxes.angular1.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: angularTexture }));
        this.scene.add(this.boxes.angular1.mesh);
        this.boxes.angular1.body = new CANNON.Body({ mass: 1100 });
        const angularShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.angular1.body.addShape(angularShape);
        this.boxes.angular1.body.position.set(60, 400, 4100);
        this.world.addBody(this.boxes.angular1.body);
    }

    
    addRestBox() {
        const restTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/restOkno.png');
        this.boxes.rest.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: restTexture }));
        this.scene.add(this.boxes.rest.mesh);
        this.boxes.rest.body = new CANNON.Body({ mass: 1100 });
        const restShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.rest.body.addShape(restShape);
        this.boxes.rest.body.position.set(-20, 280, 4100);
        this.world.addBody(this.boxes.rest.body);
    }

    addSqlBox() {
        const sqlTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/javascript.png');
        this.boxes.sql.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: sqlTexture }));
        this.scene.add(this.boxes.sql.mesh);
        this.boxes.sql.body = new CANNON.Body({ mass: 1100 });
        const sqlShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.sql.body.addShape(sqlShape);
        this.boxes.sql.body.position.set(60, 280, 4100);
        this.world.addBody(this.boxes.sql.body);
    }

    
    addCssBox() {
        const cssTexture = new THREE.TextureLoader(this.LoadingManager).load('../brrrr/assets/restOkno.png');
        this.boxes.css.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: cssTexture }));
        this.scene.add(this.boxes.css.mesh);
        this.boxes.css.body = new CANNON.Body({ mass: 1100 });
        const cssShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.css.body.addShape(cssShape);
        this.boxes.css.body.position.set(-20, 340, 4100);
        this.world.addBody(this.boxes.css.body);
    }

    addHtmlBox() {
        const htmlTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/javascript.png');
        this.boxes.html.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: htmlTexture }));
        this.scene.add(this.boxes.html.mesh);
        this.boxes.html.body = new CANNON.Body({ mass: 1100 });
        const htmlShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.html.body.addShape(htmlShape);
        this.boxes.html.body.position.set(-60, 340, 4100);
        this.world.addBody(this.boxes.html.body);
    }

    addEntityFrameworkBox() {
        const entityFrameworkTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/javascript.png');
        this.boxes.entityFramework.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: entityFrameworkTexture }));
        this.scene.add(this.boxes.entityFramework.mesh);
        this.boxes.entityFramework.body = new CANNON.Body({ mass: 1100 });
        const entityFrameworkShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.entityFramework.body.addShape(entityFrameworkShape);
        this.boxes.entityFramework.body.position.set(-60, 280, 4100);
        this.world.addBody(this.boxes.entityFramework.body);
    }

    addCSharpBox() {
        const cSharpTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/restOkno.png');
        this.boxes.cSharp.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: cSharpTexture }));
        this.scene.add(this.boxes.cSharp.mesh);
        this.boxes.cSharp.body = new CANNON.Body({ mass: 1100 });
        const cSharpShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.cSharp.body.addShape(cSharpShape);
        this.boxes.cSharp.body.position.set(20, 280, 4100);
        this.world.addBody(this.boxes.cSharp.body);
    }

    addJavaScriptBox() {
        const javaScriptTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/javascript.png');
        this.boxes.javaScript.mesh = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ map: javaScriptTexture }));
        this.scene.add(this.boxes.javaScript.mesh);
        this.boxes.javaScript.body = new CANNON.Body({ mass: 1100 });
        const javaScriptShape = new CANNON.Box(new CANNON.Vec3(20, 20, 20));
        this.boxes.javaScript.body.addShape(javaScriptShape);
        this.boxes.javaScript.body.position.set(60, 340, 4100);
        this.world.addBody(this.boxes.javaScript.body);
    }
    addTypeScriptBox() {
        const typeScriptTexture = new THREE.TextureLoader(this.loadingManager).load('../brrrr/assets/restOkno.png');
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
