import { initializeApp } from "firebase/app";
import firebaseConfig from "../config";

import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    addDoc,
} from 'firebase/firestore';

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default async function getAsyncProducts() {
    const collectionRef = collection(db, 'items');
    const productsSnapshot = await getDocs(collectionRef);

    const documentsData = productsSnapshot.docs.map((doc) => {
        const fullData = doc.data();
        fullData.id = doc.id;
        return fullData;
    });

    return documentsData;
}

export async function getAsyncItemById(itemID) {
    const docRef = doc(db, 'items', itemID);
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();
    return docData;
}

export async function getAsyncItemsByCategory(catID) {
    const productsColRef = collection(db, 'items');
    const q = query(productsColRef, where('category', '==', catID));

    const productsSnapshot = await getDocs(q);

    const documentsData = productsSnapshot.docs.map((doc) => {
        const fullData = doc.data();
        fullData.id = doc.id;
        return fullData;
    });

    return documentsData;
}

export async function createBuyOrder(orderData) {
    const newOrderDoc =
        await addDoc(collection(db, "orders"), orderData);

    return newOrderDoc.id
}