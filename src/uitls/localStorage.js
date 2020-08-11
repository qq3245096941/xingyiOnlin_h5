export default function handleLocalStorage(method, key, value) {
    value = JSON.stringify(value);

    switch (method) {
        case 'get' : {
            let temp = window.localStorage.getItem(key);
            temp = JSON.parse(temp);
            if (temp) {
                return temp
            } else {
                return false
            }
        }
        case 'set' : {
            window.localStorage.setItem(key, value);
            break
        }
        case 'remove': {
            window.localStorage.removeItem(key);
            break
        }
        default : {
            return false
        }
    }
}
