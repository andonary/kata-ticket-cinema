# Kata ticket cinéma

## Enoncé par Michaël Azerhad: 
#### https://wealcome.slack.com/archives/C3Y0Q43RV/p1614199912427100

Soit cet énoncé (que je viens d’inventer) :

- Je peux acheter un ticket de cinéma à moitié prix si j’ai plus de 26 ans et arrondi à l’entier supérieur si le prix est impair

- Je peux acheter un ticket de cinéma au prix initial divisé par la somme des chiffres de mon âge et arrondi à l’entier supérieur si la moindre décimale, si j’ai entre 10 et 26 ans

- Je ne peux pas acheter de ticket de cinéma si j’ai moins de 10 ans

Quels seraient vos libellés de tests unitaires (mindset TDD), dans l’ordre, et quels sont les SUT ?

Plusieurs réponses possibles, tant qu’elles sont cohérentes et intelligentes.

## Solution Java:

### Avant refactoring:

https://gist.github.com/mica16/13c5df51b3a27fdea211e860934c0b93

### Après refactoring:

https://gist.github.com/mica16/41f32b70742078f2f1ec24a04846db23

## Ma solution TypeScript

```
npm install
npm run test
```
