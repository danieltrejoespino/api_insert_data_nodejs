 
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'sql141.main-hosting.eu',
  database: 'u466684088_prueba_1',
  user: 'u466684088_prueba_1',
  password: 'Prueba_1prueba_1'
});

const conectar = () =>{
    connection.connect((error) => {
        if (error) {
          console.error('Error de conexión: ', error);
          return;
        }
        console.log('Conexión establecida a la base de datos MySQL');
      });
}
const desconectar=()=>{
  connection.end((error) => {
    if (error) {
      console.error('Error al cerrar la conexión: ', error);
      return;
    }
    console.log('Conexión a MySQL cerrada correctamente');
  });
}

const  agregarDatos =(accoun_number,campain_number,channel,offer_type,offer_sub_type,customerid)=>{
  //conectar();
  const sql=`INSERT INTO u466684088_prueba_1.save_data (account_number, campain_number, channel, offer_type, offer_sub_type, customerid)
                VALUES (${accoun_number},${campain_number}, ${channel}, ${offer_type}, ${offer_sub_type}, ${customerid})`;
  connection.query(sql, (error, results) => {
    if (error) {
      console.error(error);
      console.log('ocurrio un error');
      //res.status(500).send('Error al insertar datos');
     // desconectar();
     } else {
      console.log('datos insertados');
      //desconectar();
      
      //connection
      //res.send('Datos insertados correctamente');
    }
  });
}
  
    
  



// conectar();
module.exports={
    conectar:conectar,
    agregarDatos: agregarDatos,
}

// const sql='SELECT * FROM users'
// connection.query(sql, (error, results, fields) => {
//   if (error) {
//     console.error('Error al realizar consulta: ', error);
//     return;
//   }

//   console.log('Resultados de la consulta: ', results);
// });


// console.log('hola mundo');



