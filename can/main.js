var messaging = firebase.messaging();

function registrarDispositivo() {
    messaging.requestPermission()
        .then(function() {
            return messaging.getToken();
        })
        .then(function(token) {
            console.log("Token del dispositivo:", token);
           // alert("El dispositivo se ha registrado para recibir notificaciones push.");
        })
        .catch(function(error) {
            console.log("Error al registrar el dispositivo:", error);
            alert("Ha ocurrido un error al registrar el dispositivo.");
        });
}

function eliminarDispositivo() {
    messaging.getToken()
        .then(function(token) {
            return messaging.deleteToken(token);
        })
        .then(function() {
            console.log("El dispositivo se ha eliminado correctamente.");
            alert("El dispositivo se ha eliminado correctamente.");
        })
        .catch(function(error) {
            console.log("Error al eliminar el dispositivo:", error);
            alert("Ha ocurrido un error al eliminar el dispositivo.");
        });
}

// Mostrar el token del dispositivo al cargar la página
messaging.getToken()
    .then(function(token) {
        console.log("Token del dispositivo:", token);
    })
    .catch(function(error) {
        console.log("Error al obtener el token del dispositivo:", error);
    });

function enviarNotificacion() {
    fetch('https://fcm.googleapis.com/fcm/send', {
        method: 'POST',
        headers: {
            'Authorization': 'key=TU_SERVER_KEY',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'notification': {
                'title': '¡Hola!',
                'body': 'Esta es una notificación push enviada con Firebase.'
            },
            'to': '/topics/all'
        })
    })
    .then(function(response) {
        console.log("Notificación enviada:", response);
        alert("Se ha enviado una notificación a todos los dispositivos.");
    })
    .catch(function(error) {
        console.log("Error al enviar la notificación:", error);
        alert("Ha ocurrido un error al enviar la notificación.");
    });
}