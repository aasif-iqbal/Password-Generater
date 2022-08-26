function generate()
{
    var password = document.getElementById('password');
    var chars = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789!@$?_-';
    var passwordLength = 12;
    var password = '';

    for(var i=0; i < passwordLength; i++)
    {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById('password').value = password;
}

function copy()
{
    var copyText = document.getElementById('password');
    copyText.select();
    copyText.setSelectionRange(0,999);
    document.execCommand('copy');
}