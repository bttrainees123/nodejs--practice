module.exports = function (arg1){
    var username = arg1.username;
    var userpass = arg1.userpass;

    if(username=="vansh" && userpass=="kushwaha"){
        return "Login Successfil !";
    }else{
        return "Login Failed !"
    }
}