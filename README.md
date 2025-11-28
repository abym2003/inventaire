# 📦 Application de Gestion d'Inventaire

Application web progressive (PWA) pour la gestion d'inventaire multi-emplacements avec scanner de codes-barres.

## 🎯 Fonctionnalités

### Pages principales (6 pages)

1. **🏠 Tableau de bord**
   - Vue d'ensemble avec statistiques
   - Articles totaux, quantité globale, nombre d'emplacements
   - Alertes de stock faible
   - Historique des activités récentes

2. **📋 Inventaire**
   - Liste complète des articles avec recherche
   - Filtres par lieu de stockage
   - Affichage des quantités par emplacement
   - Codes-barres visibles

3. **📷 Scanner**
   - Scanner de codes-barres en temps réel (caméra)
   - Saisie manuelle de codes-barres
   - Recherche instantanée d'articles

4. **📦 Détails Article**
   - Informations complètes
   - Quantités par emplacement
   - Historique des mouvements
   - Actions rapides (ajouter/retirer stock, déplacer, modifier, supprimer)

5. **📍 Gestion des Emplacements**
   - Liste des lieux de stockage
   - Nombre d'articles par emplacement
   - Ajout/suppression de lieux

6. **📊 Import/Export**
   - Export Excel avec envoi par email
   - Import depuis fichiers Excel (.xlsx, .xls, .csv)
   - Téléchargement direct
   - Sauvegarde/restauration locale (JSON)

### ⚡ Fonctionnalités clés

- ✅ **Multi-emplacements**: Gérez vos articles dans plusieurs lieux simultanément
- ✅ **Mouvements de stock**: Ajout, retrait, transfert entre emplacements
- ✅ **Scanner codes-barres**: Utilise la caméra du smartphone
- ✅ **Mode sombre**: Design soigné et lisible
- ✅ **Hors ligne**: Fonctionne sans connexion internet
- ✅ **Responsive**: S'adapte à tous les écrans
- ✅ **Sauvegarde locale**: Données stockées sur l'appareil

## 📱 Installation

### Méthode 1: PWA (Progressive Web App) - Recommandé

1. **Ouvrir l'application** dans un navigateur web (Chrome, Safari, Firefox)
2. **Ajouter à l'écran d'accueil**:
   - Sur Android (Chrome): Menu ⋮ → "Ajouter à l'écran d'accueil"
   - Sur iOS (Safari): Bouton Partage → "Sur l'écran d'accueil"

### Méthode 2: Hébergement local

1. Télécharger tous les fichiers
2. Ouvrir `index.html` dans un navigateur

### Méthode 3: Serveur web

```bash
# Avec Python
python3 -m http.server 8000

# Avec Node.js
npx serve .
```

Puis accéder à `http://localhost:8000`

## 🎨 Design

- **Thème**: Mode sombre avec accents violet (#bb86fc)
- **Typographie**: System fonts (-apple-system, Roboto, etc.)
- **Ergonomie**: Navigation par onglets en bas, boutons flottants
- **Animations**: Transitions fluides et feedback tactile

## 💾 Stockage des données

- **localStorage**: Toutes les données sont sauvegardées localement
- **Pas de serveur requis**: Fonctionne entièrement côté client
- **Export/Import**: Possibilité de sauvegarder et restaurer les données

## 🔧 Technologies utilisées

- HTML5 / CSS3 / JavaScript (Vanilla)
- html5-qrcode: Scanner de codes-barres
- SheetJS (xlsx): Import/export Excel
- Service Worker: Fonctionnement hors ligne
- PWA: Installation comme application native

## 📝 Structure des données

### Article
```json
{
  "id": 1234567890,
  "name": "Nom de l'article",
  "barcode": "1234567890123",
  "description": "Description",
  "quantities": {
    "locationId1": 10,
    "locationId2": 5
  },
  "createdAt": "2025-11-25T14:00:00.000Z"
}
```

### Emplacement
```json
{
  "id": 1234567890,
  "name": "Entrepôt principal",
  "description": "Stockage principal"
}
```

## 🚀 Utilisation

1. **Ajouter des emplacements** (📍 Lieux)
2. **Créer des articles** (➕ bouton ou Scanner)
3. **Gérer le stock** (Ajouter/Retirer/Déplacer)
4. **Exporter les données** (📊 Export)

## ⚠️ Limitations

- L'envoi par email nécessite un serveur backend (non implémenté)
- Scanner fonctionne uniquement en HTTPS ou localhost
- Données locales (pas de synchronisation cloud par défaut)

## 📄 Licence

Application libre d'utilisation pour usage personnel.

---

**Version**: 1.0.0  
**Date**: Novembre 2025
