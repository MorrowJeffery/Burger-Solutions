var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "qn66usrj1lwdk1cc.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "vfsocisbh76m9njb",
  password: "pcgzbrmack911vkr",
  database: "ccr5bb4msli58kha"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
});

module.exports = connection;
