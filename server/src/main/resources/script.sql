CREATE DATABASE YourCarYourWay;
\c YourCarYourWay;

-- Table utilisateur
CREATE TABLE utilisateur (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    motdePasse VARCHAR(255) NOT NULL
);

-- Table reservation
CREATE TABLE reservation (
    id SERIAL PRIMARY KEY,
    datedebut DATE NOT NULL,
    datefin DATE NOT NULL,
    ville_depart VARCHAR(255) NOT NULL,
    ville_retour VARCHAR(255) NOT NULL,
    categorieVehicule VARCHAR(255) NOT NULL,
    utilisateurId INT,
    CONSTRAINT fk_utilisateur_reservation FOREIGN KEY (utilisateurId) REFERENCES utilisateur(id)
);

-- Table support
CREATE TABLE support (
    id SERIAL PRIMARY KEY,
    message TEXT NOT NULL,
    date DATE NOT NULL,
    utilisateurId INT,
    CONSTRAINT fk_utilisateur_support FOREIGN KEY (utilisateurId) REFERENCES utilisateur(id)
);

-- Table paiement
CREATE TABLE paiement (
    id SERIAL PRIMARY KEY,
    montant FLOAT NOT NULL,
    date DATE NOT NULL,
    reservationId INT,
    CONSTRAINT fk_reservation_paiement FOREIGN KEY (reservationId) REFERENCES reservation(id)
);
