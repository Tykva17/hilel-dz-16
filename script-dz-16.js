const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters){
    let keyStr = '';
    let charItem = characters.split('');
    for(let i=0; i<= length; i++){
        let item = Math.floor(Math.random() * characters.length);
        keyStr += charItem[item]
        console.log(item)
    }
    return keyStr;
}

const key = generateKey(16, characters);
console.log(key);