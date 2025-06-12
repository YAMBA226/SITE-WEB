db.createUser({
  user: "inovex",
  pwd: "inovex",
  roles: [
    { role: "readWrite", db: "admin" },
    { role: "dbAdmin", db: "admin" }
  ]
});

db.createCollection("messages");
db.createCollection("users");
