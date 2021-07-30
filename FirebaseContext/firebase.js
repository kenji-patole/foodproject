import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';


class Firebase {

    constructor() {

        this.auth = auth();
        this.db = firestore();
        this.storage = storage();
    }

    // QUERY USER
    queryUsers = firestore().collection("users");
    queryAddUser = (id, data) => firestore().collection("users").doc(id).set(data);
    

}

export default Firebase;


