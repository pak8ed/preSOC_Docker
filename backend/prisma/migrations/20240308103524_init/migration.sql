-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL DEFAULT '',
    `email` VARCHAR(191) NOT NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    `isTwoFactorEnabled` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` VARCHAR(191) NULL,
    `access_token` VARCHAR(191) NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` VARCHAR(191) NULL,
    `session_state` VARCHAR(191) NULL,

    INDEX `Account_userId_idx`(`userId`),
    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    UNIQUE INDEX `VerificationToken_email_token_key`(`email`, `token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PasswordResetToken` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `PasswordResetToken_token_key`(`token`),
    UNIQUE INDEX `PasswordResetToken_email_token_key`(`email`, `token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TwoFactorToken` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TwoFactorToken_token_key`(`token`),
    UNIQUE INDEX `TwoFactorToken_email_token_key`(`email`, `token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TwoFactorConfirmation` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TwoFactorConfirmation_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Adherent` (
    `id` VARCHAR(191) NOT NULL,
    `civilite` ENUM('Mme', 'Mr', 'Autre') NOT NULL DEFAULT 'Mme',
    `nom` VARCHAR(191) NOT NULL,
    `nom_naissance` VARCHAR(191) NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `date_naissance` DATETIME(3) NOT NULL,
    `qualite` ENUM('Adherent', 'AncienAdherent', 'Sympathisant') NOT NULL,
    `section_academique` VARCHAR(191) NOT NULL,
    `etablissement` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `tel` VARCHAR(191) NULL,
    `date_created` DATETIME(3) NOT NULL,
    `date_last_updated` DATETIME(3) NULL,
    `corps` ENUM('Certifie', 'PLP', 'CPE', 'PRCE', 'ProfEPS', 'BiAdmissible', 'Agrege', 'ChairesSUP', 'PRAG', 'Etudiant', 'MEEF', 'EAP', 'Stagiaire', 'CongeParental', 'AED', 'AESH', 'AP', 'AE', 'Disponibilite', 'MA', 'MAII', 'Contractuel', 'AgentAdmin', 'IndiceInf321', 'ChargeEPS', 'Instituteur', 'ProfEcoles', 'InstitSEGPA', 'PsyEN', 'Infirmier', 'Retraite', 'PEGC') NULL,
    `classe` ENUM('Normale', 'HorsClasse', 'ClasseExc') NULL,
    `echelon` INTEGER NULL,
    `code_adherent` VARCHAR(191) NULL,
    `commentaire` VARCHAR(191) NULL,

    UNIQUE INDEX `Adherent_email_key`(`email`),
    UNIQUE INDEX `Adherent_tel_key`(`tel`),
    UNIQUE INDEX `Adherent_code_adherent_key`(`code_adherent`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistoriqueAdherent` (
    `id` VARCHAR(191) NOT NULL,
    `type_action` ENUM('CREATION', 'MODIFICATION', 'SUPPRESSION') NOT NULL,
    `date_demande` VARCHAR(191) NOT NULL,
    `date_validation` VARCHAR(191) NOT NULL,
    `demandeur_action` VARCHAR(191) NOT NULL,
    `valideur_action` VARCHAR(191) NOT NULL,
    `civilite` ENUM('Mme', 'Mr', 'Autre') NULL,
    `nom` VARCHAR(191) NULL,
    `nom_naissance` VARCHAR(191) NULL,
    `prenom` VARCHAR(191) NULL,
    `date_naissance` DATETIME(3) NULL,
    `qualite` ENUM('Adherent', 'AncienAdherent', 'Sympathisant') NULL,
    `section_academique` VARCHAR(191) NULL,
    `etablissement` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `tel` VARCHAR(191) NULL,
    `corps` ENUM('Certifie', 'PLP', 'CPE', 'PRCE', 'ProfEPS', 'BiAdmissible', 'Agrege', 'ChairesSUP', 'PRAG', 'Etudiant', 'MEEF', 'EAP', 'Stagiaire', 'CongeParental', 'AED', 'AESH', 'AP', 'AE', 'Disponibilite', 'MA', 'MAII', 'Contractuel', 'AgentAdmin', 'IndiceInf321', 'ChargeEPS', 'Instituteur', 'ProfEcoles', 'InstitSEGPA', 'PsyEN', 'Infirmier', 'Retraite', 'PEGC') NULL,
    `classe` ENUM('Normale', 'HorsClasse', 'ClasseExc') NULL,
    `echelon` INTEGER NULL,

    UNIQUE INDEX `HistoriqueAdherent_email_key`(`email`),
    UNIQUE INDEX `HistoriqueAdherent_tel_key`(`tel`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Adresse` (
    `id` VARCHAR(191) NOT NULL,
    `adherentId` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `complement_adresse` VARCHAR(191) NULL,
    `code_postal` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Adresse_adherentId_key`(`adherentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Adhesion` (
    `id` VARCHAR(191) NOT NULL,
    `adherentId` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `section_academique` VARCHAR(191) NOT NULL,
    `annee` INTEGER NOT NULL,
    `fractionnement` INTEGER NOT NULL,
    `montant_total` DOUBLE NOT NULL,
    `montant_paye` DOUBLE NOT NULL,
    `statut` ENUM('OVERDUE', 'PENDING', 'PAID') NOT NULL,

    UNIQUE INDEX `Adhesion_adherentId_annee_key`(`adherentId`, `annee`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Paiement` (
    `id` VARCHAR(191) NOT NULL,
    `adhesionId` VARCHAR(191) NOT NULL,
    `moyen_paiement` ENUM('CB', 'CHEQUES', 'ESPECES', 'PRELEVEMENT') NULL,
    `num_paiement` INTEGER NOT NULL,
    `montant` DOUBLE NOT NULL,
    `date_prevue` DATETIME(3) NOT NULL,
    `date_paiement` DATETIME(3) NULL,
    `status` ENUM('PENDING', 'PAID', 'OVERDUE') NOT NULL,

    UNIQUE INDEX `Paiement_adhesionId_num_paiement_key`(`adhesionId`, `num_paiement`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TwoFactorConfirmation` ADD CONSTRAINT `TwoFactorConfirmation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Adresse` ADD CONSTRAINT `Adresse_adherentId_fkey` FOREIGN KEY (`adherentId`) REFERENCES `Adherent`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Adhesion` ADD CONSTRAINT `Adhesion_adherentId_fkey` FOREIGN KEY (`adherentId`) REFERENCES `Adherent`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paiement` ADD CONSTRAINT `Paiement_adhesionId_fkey` FOREIGN KEY (`adhesionId`) REFERENCES `Adhesion`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
