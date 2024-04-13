import express from 'express';

// Σύνδεση σε Διακομιστή (Connect to Server)
const διακ = express();

// Σύνδεση σε Βάση Δεδομένων (Connect to Database)

// Αρχικές Τιμές (Initial Values)
const πύλη = 3000;

// Δεδομένα (Data)

// Λειτουργίες (Functions)

// Ενδιάμεσες Λειτουργίες (Middleware)

// GET

// POST

// PUT

// PATCH

// DELETE

// Πύλη Διακομιστή (Server Port)
διακ.listen(πύλη, () => {
  console.log(
    `Διακομιστής: Ενεργός στην πύλη ${πύλη} --> http://localhost:${πύλη}`
  );
});