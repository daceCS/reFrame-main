let Account = function(username, password){
    this.username = username;
    this.password = password;
    this.postCount = 0;
    this.posts = [];
}

module.exports = Account;