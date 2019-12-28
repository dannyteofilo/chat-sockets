const { io } = require('../server');


io.on('connection', (client) => {

    console.log('Logged in user');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // listen cliente
    client.on('sendMessage', (data, callback) => {

        console.log(data);

        client.broadcast.emit('replyMessage', data);


        if (data) {
            callback({
                resp: 200
            });
        }

    });

});