// EmailJS configuration
const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'Fraell';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Kirim Ulasan';
                alert('Ulasan Anda telah dikirim!');
                document.getElementById('form').reset(); // Reset form
            }, (err) => {
                btn.value = 'Kirim Ulasan';
                alert('Gagal mengirim ulasan: ' + JSON.stringify(err));
            });
    });
