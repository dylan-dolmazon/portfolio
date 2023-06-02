document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)
  
    const spinner = document.getElementById('mySpinner');
    spinner.classList.add('ld', 'ld-spinner', 'ld-spin', 'spinner');

    const form_message = document.getElementById('contact-form-message');


    // Récupérer les valeurs des champs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('form_email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    // Créer un objet avec les données du formulaire
    const data = {
      service_id: 'service_7kc8gm1',
      template_id: 'portfolio-contact',
      user_id: 'eBnIl8amfGDCMEm0-',
      template_params: {
        name: name,
        email: email,
        message: message,
        subject: 'Portfolio - '+ subject
      }
    };
  
    // Envoyer l'e-mail en utilisant l'API EmailJS
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(function(response) {
        if (response.ok) {
          
          // Supprimer le spinner
          spinner.classList.remove('ld', 'ld-spinner', 'ld-spin', 'spinner');

          // Sélectionner l'élément <p>

          // Ajouter du contenu à l'élément <p>
          form_message.style.color = 'green';
          form_message.textContent = 'Email envoyé';

          // Réinitialiser le formulaire
          document.getElementById('contact-form').reset();

          // Supprimer le contenu après 5 secondes
          setTimeout(function() {
            form_message.textContent = '';
          }, 5000);
        } else {
          // Erreur lors de l'envoi de l'e-mail
           // Ajouter du contenu à l'élément <p>
           form_message.style.color = 'red';
           form_message.textContent = "Une erreur est survenu lors de l'envoi";
           // Supprimer le contenu après 5 secondes
          setTimeout(function() {
            form_message.textContent = '';
          }, 5000);
        }
      })
      .catch(function(error) {
         // Ajouter du contenu à l'élément <p>
         form_message.style.color = 'red';
         form_message.textContent = "Une erreur est survenu lors de l'envoi";
         // Supprimer le contenu après 5 secondes
        setTimeout(function() {
          form_message.textContent = '';
        }, 5000)
      });
  });
  