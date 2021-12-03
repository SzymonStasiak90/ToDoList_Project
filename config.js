// Plik konfiguracyjny
module.exports = {
    port: process.env.PORT || 3000,                                                                 // Server
    database: process.env.DATABASE || 'mongodb://127.0.0.1:27017/ToDo_DataBase'                     // Baza danych
};