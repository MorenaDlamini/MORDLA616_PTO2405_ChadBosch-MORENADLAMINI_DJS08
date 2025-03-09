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

// Seeder Data (users and vans)
const vans = [
    {
        id: "1",
        name: "Modest Explorer",
        price: 60,
        description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
        type: "simple",
        hostId: "123",
    },
    {
        id: "2",
        name: "Beach Bum",
        price: 80,
        description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
        type: "rugged",
        hostId: "123",
    },
    {
        id: "3",
        name: "Reliable Red",
        price: 100,
        description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
        type: "luxury",
        hostId: "456",
    },
    {
        id: "4",
        name: "Dreamfinder",
        price: 65,
        description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
        type: "simple",
        hostId: "789",
    },
    {
        id: "5",
        name: "The Cruiser",
        price: 120,
        description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
        type: "luxury",
        hostId: "789",
    },
    {
        id: "6",
        name: "Green Wonder",
        price: 70,
        description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
        type: "rugged",
        hostId: "123",
    },
];

const user = {
    id: "123",
    email: "dlamini@example.com",
    password: "p123", // 
    name: "Bob",
};

/**
 * A function to seed Firestore with initial data, including users and vans.
 * This is typically used for development purposes to populate the database with sample data.
 *
 * @async
 * @function seedFirestore
 * @throws {Error} If there is an error during the seeding process.
 */
async function seedFirestore() {
    try {
        // Add user document
        await setDoc(doc(db, "users", user.id), user);
        console.log(`User ${user.id} added!`);

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
