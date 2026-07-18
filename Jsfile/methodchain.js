let username = window.prompt("enter yourname");

// no method chain

// method chain

usename = username.trim().charAt(0).toUpperCase() +  username.trim().slice(1).toLowerCase();

console.log(username);