import { initializeApp } from "firebase/app"
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where
} from "firebase/firestore/lite"

// 🔧 Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBO3W1cnUrXp-lncFhoc3QjX3cULclt6Dg",
    authDomain: "vanslife-fa3a4.firebaseapp.com",
    projectId: "vanslife-fa3a4",
    storageBucket: "vanslife-fa3a4.firebasestorage.app",
    messagingSenderId: "443490236360",
    appId: "1:443490236360:web:d9b7af4181b3af6c41f2fd"
}

// 🔥 Initialize Firebase & Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// ✅ Collection references
const vansCollectionRef = collection(db, "vans")
const usersCollectionRef = collection(db, "users")

// 🔥 Fetch all vans
export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

// 🔥 Fetch a single van by ID
export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)

    if (!snapshot.exists()) {
        throw {
            message: `Van with id ${id} not found`,
            statusText: "Not Found",
            status: 404
        }
    }

    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

// 🔥 Fetch vans for a specific host (hardcoded hostId: "123")
export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)

    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

// ✅ "Login" using Firestore query instead of fetch
export async function loginUser(creds) {
    // Query Firestore for the user by email
    const q = query(usersCollectionRef, where("email", "==", creds.email))
    const snapshot = await getDocs(q)

    // If no user found
    if (snapshot.empty) {
        throw {
            message: "No user with that email was found",
            statusText: "Not Found",
            status: 404
        }
    }

    const userDoc = snapshot.docs[0]
    const userData = userDoc.data()

    // Check if password matches (plaintext for demo; hash passwords in production!)
    if (userData.password !== creds.password) {
        throw {
            message: "Incorrect password",
            statusText: "Unauthorized",
            status: 401
        }
    }

    // Optional: You can return whatever user info you need here
    return {
        id: userDoc.id,
        email: userData.email,
        name: userData.name
        // Don't return the password!
    }
}
