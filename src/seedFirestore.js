import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore/lite";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBO3W1cnUrXp-lncFhoc3QjX3cULclt6Dg",
    authDomain: "vanslife-fa3a4.firebaseapp.com",
    projectId: "vanslife-fa3a4",
    storageBucket: "vanslife-fa3a4.firebasestorage.app",
    messagingSenderId: "443490236360",
    appId: "1:443490236360:web:d9b7af4181b3af6c41f2fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Users array
const users = [
    {
        id: "123",
        email: "dlamini@example.com",
        password: "p123",
        name: "Morena",
    },
    {
        id: "456",
        email: "b@b.com",
        password: "p123",
        name: "Bob",
    }
];

// Vans array
const vans = [
    {
        id: "1",
        name: "Modest Explorer",
        price: 60,
        description: "The Modest Explorer is a van designed to get you out of the house and into nature...",
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
        type: "simple",
        hostId: "123",
    },
    {
        id: "2",
        name: "Beach Bum",
        price: 80,
        description: "Beach Bum is a van inspired by surfers and travelers...",
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
        type: "rugged",
        hostId: "123",
    },
    {
        id: "3",
        name: "Reliable Red",
        price: 100,
        description: "Reliable Red is a van that was made for travelling...",
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
        type: "luxury",
        hostId: "456",
    },
    {
        id: "4",
        name: "Dreamfinder",
        price: 65,
        description: "Dreamfinder is the perfect van to travel in and experience...",
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
        type: "simple",
        hostId: "789",
    },
    {
        id: "5",
        name: "The Cruiser",
        price: 120,
        description: "The Cruiser is a van for those who love to travel in comfort and luxury...",
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
        type: "luxury",
        hostId: "789",
    },
    {
        id: "6",
        name: "Green Wonder",
        price: 70,
        description: "With this van, you can take your travel life to the next level...",
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
        type: "rugged",
        hostId: "123",
    },
];

/**
 * Seeds Firestore with initial data, including multiple users and vans.
 */
async function seedFirestore() {
    try {
        // Add user documents
        for (const user of users) {
            await setDoc(doc(db, "users", user.id), user);
            console.log(`User ${user.id} (${user.name}) added!`);
        }

        // Add vans documents
        for (const van of vans) {
            await setDoc(doc(db, "vans", van.id), van);
            console.log(`Van ${van.id} added!`);
        }

        console.log("Firestore seeding complete ✅");
    } catch (error) {
        console.error("Error seeding Firestore:", error);
    }
}

seedFirestore();
