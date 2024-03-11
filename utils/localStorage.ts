const localStorageAvailable = () => {
        if(typeof window !== 'undefined'){
            return true
        } else {
            return false
        }
}

export default localStorageAvailable;