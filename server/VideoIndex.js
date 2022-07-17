const app = require('express')();

const server = require('http').createServer(app);

const cors = require('cors');


const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

app.use(cors());

const PORT = 7000;

app.get('/videoCall', (req, res) => {
    res.send(`Server is running for video call`);
});


io.on('connection', (socket) => {
    socket.emit('me', socket.id);

    socket.on('disconnect', () => {
        socket.broadcast.emit('callended');
    });

    socket.on('calluser', ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit('calluser', { signal: signalData, from, name })
    });
    socket.on('answercall', (data) => {
        io.to(data.to).emit('callaccepted', data.signal);
    });
});

server.listen(PORT, () => console.log(`server running on VIDEO port  ${PORT}`));

