/*Partendo dai file nello starter implementare la funzione dei bottoni (next e previous) dello slider usando Vue (prima però create la struttura dati).

Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
Consiglio del giorno:
- regola d'oro: riciclare ovunque possibile! E il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
Buon lavoro e buon divertimento!*/


const app = new Vue ({
    el: '#root',
    test: 3,
    data:{
        arrData:[
            {
                countryName:'Svezia',
                countryImg:'01.jpg',
                countryText:'Lorem ipsum, dolor sit amet consectetuadipisicing elit. Et temporibus voluptatum suscipitempore aliquid deleniti aut veniam inventoreligendi ex ad ullam, cumque provident totam omnismagnam dolores dolorum corporis.',
            },
            {
                countryName:'Svizzera',
                countryImg:'02.jpg',
                countryText:'Lorem ipsum'
            },
            {
                countryName:'Gran Bretagna',
                countryImg:'03.jpg',
                countryText:'Lorem ipsum, dolor sit ameconsectetur        adipisicing elit.',
            },
            {
                countryName:'Germania',
                countryImg:'04.jpg',
                countryText:'Lorem ipsum, dolor sit ameconsectetur        adipisicing elit. Et temporibuvoluptatum suscipit tempore     aliquid deleniti auveniam inventore eligendi ex ad ullam,',
            },
            {
                countryName:'Paradise',
                countryImg:'05.jpg',
                countryText:'Et temporibus voluptatum suscipitempore      aliquid deleniti aut veniam inventoreligendi ex ad ullam,',
            },
        ], 

        
    },
    methods: {
        console.log(this.arrData);
    },
});



