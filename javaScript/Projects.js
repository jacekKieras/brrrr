class Projects {
    constructor(scene) {
        this.scene = scene;
        this.projectArrow.addEventListener('click', this.showProjectInfo.bind(this));
    }

    scene;
    friendlyBeatMesh;
    diaryMesh;
    brickGameMesh;
    websitePortfolioMesh;
    gamePortfolioMesh;
    clientX;
    clientY;
    projectInfo = document.querySelector('.project-info');
    projectName = document.querySelector('.project-name');
    projectCloseButton = document.querySelector('.close').addEventListener("click", this.closeProjectInfo.bind(this));
    githubButton = document.querySelector('.github').addEventListener('click', this.openGithubLink.bind(this));
    liveButton = document.querySelector('.live').addEventListener('click', this.openLiveLink.bind(this));
    projectArrow = document.querySelector('.expand-project-button');
    githubLink;
    liveLink;

    openGithubLink() {
        if (this.githubLink) {
            window.open(this.githubLink);
        }
    }

    openLiveLink() {
        if (this.liveLink) {
            window.open(this.liveLink);
        }
    }

    projects = {
        gamePortfolio: {
            name: 'gamePortfolio',
            title: 'gra-Portfolio',
            github: 'https://github.com/BiernackiMichal/game-portfolio',
            live: 'https://biernackimichal.github.io/game-portfolio/'
        },
        websitePortfolio: {
            name: 'websitePortfolio',
            title: 'strona-Portfolio',
            github: 'https://github.com/BiernackiMichal/WebsitePortfolio',
            live: 'https://biernackimichal.github.io/WebsitePortfolio/'
        },
        friendlyBeat: {
            name: 'friendlyBeat',
            title: 'FriendlyBeat',
            github: 'https://github.com/BiernackiMichal/MusicApp',
            live: 'http://friendlybeat11-001-site1.dtempurl.com'
        },
        diary: {
            name: 'diary',
            title: 'E-dziennik',
            github: 'https://github.com/BiernackiMichal/E-Dziennik',
            live: 'http://dziennik12-001-site1.ctempurl.com'
        },
        brickGame: {
            name: 'brickGame',
            title: 'gra C++',
            github: 'https://github.com/BiernackiMichal/CPP-game-with-SFML',
            live: ''
        },

    }

    setProjectInfoOnClick(projectName) {
        for (const key in this.projects) {
            if (projectName == this.projects[key].name) {
                this.projectName.innerHTML = this.projects[key].title;
                this.githubLink = this.projects[key].github;
                this.liveLink = this.projects[key].live;
                this.projectInfo.style.display = 'block';
            }
        }
    }

    addProjects() {
        this.addDiary();
    }

    addGamePortfolio() {
        const projectTexture = new THREE.TextureLoader().load('../game-portfolio/assets/gamePortfolio.png');
        this.gamePortfolioMesh = new THREE.Mesh(new THREE.BoxGeometry(140, 70, 5), [new THREE.MeshBasicMaterial({ color: 0x000000 }), new THREE.MeshBasicMaterial({ color: 0x000000 }),
        new THREE.MeshBasicMaterial({ color: 0x000000 }), new THREE.MeshBasicMaterial({ color: 0x000000 }), new THREE.MeshBasicMaterial({ map: projectTexture }), new THREE.MeshBasicMaterial({ color: 0x000000 })]);
        this.gamePortfolioMesh.position.set(-2454, 25, 1155);
        this.gamePortfolioMesh.rotation.y += Math.PI / 2;
        this.gamePortfolioMesh.name = 'gamePortfolio';
        this.scene.add(this.gamePortfolioMesh);
    }



    addWebsitePortfolio() {
        const projectTexture = new THREE.TextureLoader().load('../game-portfolio/assets/websitePortfolio.png');
        this.websitePortfolioMesh = new THREE.Mesh(new THREE.BoxGeometry(140, 70, 5), [new THREE.MeshBasicMaterial({ color: 0x000000 }), new THREE.MeshBasicMaterial({ color: 0x000000 }),
        new THREE.MeshBasicMaterial({ color: 0x000000 }), new THREE.MeshBasicMaterial({ color: 0x000000 }), new THREE.MeshBasicMaterial({ map: projectTexture }), new THREE.MeshBasicMaterial({ color: 0x000000 })]);
        this.websitePortfolioMesh.position.set(-2453.5, 25, 1300);
        this.websitePortfolioMesh.rotation.y += Math.PI / 2;
        this.websitePortfolioMesh.name = 'websitePortfolio';
        this.scene.add(this.websitePortfolioMesh);
    }


    addBrickGame() {
        const projectTexture = new THREE.TextureLoader().load('../game-portfolio/assets/game.png');
        this.brickGameMesh = new THREE.Mesh(new THREE.BoxGeometry(140, 70, 5), [new THREE.MeshBasicMaterial({ color: 0x000000 }), new THREE.MeshBasicMaterial({ color: 0x000000 }),
        new THREE.MeshBasicMaterial({ color: 0x000000 }), new THREE.MeshBasicMaterial({ color: 0x000000 }), new THREE.MeshBasicMaterial({ map: projectTexture }), new THREE.MeshBasicMaterial({ color: 0x000000 })]);
        this.brickGameMesh.position.set(-2454, 25, 1445);
        this.brickGameMesh.rotation.y += Math.PI / 2;
        this.brickGameMesh.name = 'brickGame';
        this.scene.add(this.brickGameMesh);
    }

    addfriendlyBeat() {
        const projectTexture = new THREE.TextureLoader().load('../game-portfolio/assets/FriendlyBeat-landscape.png');
        this.friendlyBeatMesh = new THREE.Mesh(new THREE.BoxGeometry(140, 70, 5), [new THREE.MeshBasicMaterial({ color: 0x000000 }), new THREE.MeshBasicMaterial({ color: 0x000000 }),
        new THREE.MeshBasicMaterial({ color: 0x000000 }), new THREE.MeshBasicMaterial({ color: 0x000000 }), new THREE.MeshBasicMaterial({ map: projectTexture }), new THREE.MeshBasicMaterial({ color: 0x000000 })]);
        this.friendlyBeatMesh.position.set(-2453.5, 25, 1300);
        this.friendlyBeatMesh.rotation.y += Math.PI / 2;
        this.friendlyBeatMesh.name = 'friendlyBeat';
        this.scene.add(this.friendlyBeatMesh);
    }

    addDiary() {
        const projectTexture = new THREE.TextureLoader().load('../game-portfolio/assets/dziennik-landscape.png');
        this.diaryMesh = new THREE.Mesh(new THREE.BoxGeometry(140, 70, 5), [new THREE.MeshBasicMaterial({ color: 0x000000 }), new THREE.MeshBasicMaterial({ color: 0x000000 }),
        new THREE.MeshBasicMaterial({ color: 0x000000 }), new THREE.MeshBasicMaterial({ color: 0x000000 }), new THREE.MeshBasicMaterial({ map: projectTexture }), new THREE.MeshBasicMaterial({ color: 0x000000 })]);
        this.diaryMesh.position.set(-2452.5, -34, 1300);
        this.diaryMesh.rotation.y += Math.PI / 2;
        this.diaryMesh.name = 'diary';
        this.scene.add(this.diaryMesh);
    }

    slideOutProjects() {
        const interval = setInterval(() => {
            if (this.diaryMesh.position.y <= 25) {
                this.diaryMesh.position.y += 0.3;
            } else {
                this.slideOutProjectsFromDiaryProject();
                clearInterval(interval);
            }
        }, 16, 66);
    }

    slideOutProjectsFromDiaryProject() {
        this.addWebsitePortfolio();
        this.addfriendlyBeat();
        this.slideOutFriendlyBeatProject();
        this.slideOutWebsitePortfolioProject();
    }

    slideOutFriendlyBeatProject() {
        const interval = setInterval(() => {
            if (this.friendlyBeatMesh.position.z >= 1155) {
                this.friendlyBeatMesh.position.z -= 0.6;
            } else {
                this.slideOutGamePortfolioProject();
                clearInterval(interval);
            }
        }, 16, 66);
    }

    slideOutGamePortfolioProject() {
        this.addGamePortfolio();
        const interval = setInterval(() => {
            if (this.gamePortfolioMesh.position.z >= 1010) {
                this.gamePortfolioMesh.position.z -= 0.6;
            } else {
                clearInterval(interval);
            }
        }, 16, 66);
    }

    slideOutWebsitePortfolioProject() {
        const interval = setInterval(() => {
            if (this.websitePortfolioMesh.position.z <= 1445) {
                this.websitePortfolioMesh.position.z += 0.6;
            } else {
                this.slideOutBrickGameProject();
                clearInterval(interval);
            }
        }, 16, 66);
    }

    slideOutBrickGameProject() {
        this.addBrickGame();
        const interval = setInterval(() => {
            if (this.brickGameMesh.position.z <= 1590) {
                this.brickGameMesh.position.z += 0.6;
            } else {
                clearInterval(interval);
            }
        }, 16, 66);
    }


    closeProjectInfo() {
        this.projectInfo.style.display = 'none';
        this.projectArrow.style.display = 'block';
    }

    showProjectInfo() {
        this.projectInfo.style.display = 'block';
        this.projectArrow.style.display = 'none';
    }





}