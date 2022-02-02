
class Mail {
    constructor(scene) {
        this.scene = scene;
        this.arrowContact.addEventListener('click', this.showEmailContainer.bind(this));
    }

    scene;
    writeEmail = false;
    isMailSent = false;
    onMailClick = document.querySelector('.email-button').addEventListener('click', this.showEmailForm.bind(this), false);
    sendEmailButton = document.querySelector('.send-button').addEventListener('click', this.sendEmail.bind(this), false);
    emailForm = document.querySelector('.e-mail-form');
    emailFormCloseButton = document.querySelector('.email-form-close').addEventListener('click', this.closeEmailForm.bind(this), false);
    contactInfoCloseButton = document.querySelector('.email-close-button').addEventListener('click', this.closeEmailContainer.bind(this), false);
    arrowContact = document.querySelector('.expand-email-button');

    showEmailContainer() {
        this.arrowContact.style.display = 'none';
        document.querySelector('.email-container').style.display = 'block';
    }

    closeEmailContainer() {
        document.querySelector('.email-container').style.display = 'none';
        this.arrowContact.style.display = 'block';
    }

    closeEmailForm() {
        this.emailForm.style.display = 'none';
    }

    showSendingMessage() {
        const message = document.querySelector('.sending');
        message.style.display = 'block';
        setTimeout(() => {
            message.innerHTML = 'Wysłano';
            setTimeout(() => {
                message.style.display = 'none';
            }, 3000);
        }, 6000);
    }

    sendEmail() {
        this.isMailSent = true;
        const from = document.getElementById('from');
        const content = document.getElementById('content');
        const email = "kichalbiernacki95@o2.pl";
        const token = "9cf1fa5e-505c-449d-b1f4-94b3cae13775";
        this.emailForm.style.display = 'none';
        this.showSendingMessage();
        Email.send({
            SecureToken: token.replace(/9/g,'2'),
            To: email.replace('k','m'),
            From: email.replace('k','m'),
            Subject:from.value,
            Body:content.value
        }).then(
            message => console.log(message)
        );
    }

    showEmailForm() {
        if (this.isMailSent == false) {
            this.writeEmail = true;
            this.emailForm.style.display = 'block';
        }
        else alert('Za późno,samolot juz odleciał.');
    }
}
