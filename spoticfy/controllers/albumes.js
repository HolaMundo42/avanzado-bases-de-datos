const conn = require("../db");

const getAlbumes = (_, res) => {
    // Completar con la consulta que devuelve todos los albumes
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        [
            {
                "id": 1,
                "nombre": "Nombre del album",
                "nombre_artista": "Nombre del artista"
            },
            {
                "id": 2,
                "nombre": "Nombre del album",
                "nombre_artista": "Nombre del artista"
            },
            ...
        ]
    */
   const myInstruction = "SELECT * FROM albumes"; 
   conn.query(myInstruction, (err, rows) => {
    if (err) {
        console.error("Error consultando: " + err);
    }
    res.send(rows);
});  
};

const getAlbum = (req, res) => {
    // Completar con la consulta que devuelve un album por id
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        {
            "id": 1,
            "nombre": "Nombre del album",
            "nombre_artista": "Nombre del artista"
        }
    */

    let id = req.params;
    const myInstruction = "SELECT * FROM albumes WHERE albumes.id = ?";
    conn.query(myInstruction, [id], (err, rows) => {
            if (err) {
                console.error("Error consultando: " + err);
                return;
            }
        
            res.json(rows[0]);
    });
};

const createAlbum = (req, res) => {
    // Completar con la consulta que crea un album
    // Recordar que los parámetros de una consulta POST se encuentran en req.body
    // Deberían recbir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del album",
            "artista": "Id del artista"
        }
    */

    let {nombre, artista} = req.body;
    const myInstruction = "INSERT INTO albumes (nombre, artista) values (?, ?)";
    conn.query(myInstruction, [nombre, artista], err => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }

        res.send("Se creó el album!");
    });
};

const updateAlbum = (req, res) => {
    // Completar con la consulta que actualiza un album
    // Recordar que en este caso tienen parámetros en req.params (el id) y en req.body (los demás datos)
    // Deberían recbir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del album",
            "artista": "Id del artista"
        }
    */
    let {id} = req.params;
    let {nombre, artista} = req.body;
    const myInstruction = "UPDATE albumes SET nombre = ?, artista = ? where id = ?";

    conn.query(myInstruction, [nombre, artista, id], err => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }

        res.send("Se actualizó el album!");
    });
};

const deleteAlbum = (req, res) => {
    // Completar con la consulta que elimina un album
    // Recordar que los parámetros de una consulta DELETE se encuentran en req.params

    let id = req.params;
    const myInstruction = 'DELETE FROM albumes WHERE id = ?';
    conn.query(myInstruction, [id], err => { 
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }

        res.send("Se borró el album!"); 
    });
};

const getCancionesByAlbum = (req, res) => {
    // Completar con la consulta que devuelve las canciones de un album
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getCanciones
};

module.exports = {
    getAlbumes,
    getAlbum,
    createAlbum,
    updateAlbum,
    deleteAlbum,
    getCancionesByAlbum,
};
