# Florent Damiens

Stack technique :
- PHP 8.1
- PostgreSQL 13
- Node >= 1
- Next 13
- Symfony 6 (+ API Platform / React Admin)

## Installation

### Symfony
Configurer la variable DATABASE_URL dans le fichier .env.local

```
composer install
bin/console doctrine:database:create
bin/console doctrine:migrations:migrate
```

### Next.js

Dans le dossier front
```
yarn install
yarn run dev
```

## Utils

### Tests

Pour lancer les tests d'intégration avec PHPUnit

```
vendor/bin/phpunit
```

### Analyseur de code

On utilise PHPStan

```
vendor/bin/phpstan analyse src tests -l 5
```

### Configuration du T-Max

Pré-requis: [Installation / configuration](https://gist.github.com/RusHiiii/91c1b3c2fa12e8fbcf1a52e9f40aed55)

Pour lancer le T-Max (depuis la racine du projet):
```
tmuxinator
```
