document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)
  
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
          // Réponse du serveur
          console.log('E-mail envoyé avec succès !');
          // Afficher un message de succès à l'utilisateur
          alert('Votre message a été envoyé avec succès !');
          // Réinitialiser le formulaire
          document.getElementById('contact-form').reset();
        } else {
          // Erreur lors de l'envoi de l'e-mail
          console.error('Une erreur s\'est produite lors de l\'envoi de l\'e-mail.');
        }
      })
      .catch(function(error) {
        // Erreur lors de la requête fetch
        console.error('Une erreur s\'est produite lors de l\'envoi de l\'e-mail :', error);
      });
  });
  