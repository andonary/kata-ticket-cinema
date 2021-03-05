import {CinemaTicketPricer} from "./cinemaTicketPricer";

describe(`
_ Je peux acheter un ticket de cinéma à moitié prix si j’ai plus de 26 ans et arrondi à l’entier supérieur si le prix est impair
_ Je peux acheter un ticket de cinéma au prix initial divisé par la somme des chiffres de mon âge et arrondi à l’entier supérieur si la moindre décimale, si j’ai entre 10 et 26 ans
_ Je ne peux pas acheter de ticket de cinéma si j’ai moins de 10 ans
`, () => {
    const computePricer = (initialPrice: number, customerAge: number, expectedPrice: number) => {
        const price: number = new CinemaTicketPricer().execute(initialPrice, customerAge);
        expect(price).toEqual(expectedPrice);
    }

    test('Je peux prendre un ticket à tarif normal puisque je suis âgé de 10 ans', () => {
        computePricer(10, 10, 10);
    })

    test('Je peux prendre un ticket à tarif moitié prix puisque je suis âgé de 11 ans', () => {
        computePricer(10, 11, 5);
    })

    test('Je peux prendre un ticket à tarif tierce prix puisque je suis âgé de 12 ans', () => {
        computePricer(10, 12, 4);
    })

    test('Je peux prendre un ticket à tarif moitié prix puisque je suis âgé de 26 ans', () => {
        computePricer(10, 26, 5);
    })

    test('Je peux prendre un ticket à tarif moitié prix puisque je suis âgé de 27 ans', () => {
        computePricer(10, 27, 5);
    })

    test('Je peux prendre un ticket à tarif moitié prix unité supérieur puisque je suis âgé de 27 ans et que le ticket est à 11', () => {
        computePricer(11, 27, 6);
    })

    test('Je ne peux pas prendre un ticket puisque je suis âgé de 9 ans', () => {
        try {
            new CinemaTicketPricer().execute(10, 9);
            fail('This should throw an error');
        } catch (e) {
            expect(e).toBeDefined();
        }
    })
})
