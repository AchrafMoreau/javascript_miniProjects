let person = document.querySelector('.person');
let quote = document.querySelector('.Quote');
let btn = document.querySelector('#new-quote');

let Quote = [
    {
        quote: `"Bel flow w dosage d les mots, Lmorfo 3endo deux as f yeddo Traces d l9ortas fel wednin, kter ml7yota d Sarajevo."`,
        person:"L’Morphiniya 33"
    },
    {
        quote: `"Sarwal taye7, Jesse Pinkman. Rass dayekh, msawwer zar9a f scanner."`,
        person:"L’Morphiniya 17"
    },
    {
        quote: `"Ostora dyal bessa7, machi ghi dareb chicken mythic, Bin l kick wel clap, msari w ta7li l'beztam, Dima l'flow dyal l'klab, kant7edda l'9adi Seddam."`,
        person:"Kill 3"
    },
    {
        quote: `"Carrière twila w m'reinitialiser l'kilométrage 2020 terminus kolha génération escale Machi question d'age question de vécu w dmagh ach 3ach."`,
        person:"Round 3 ! Fight !"
    },
    {
        quote: `"Wakha sahi matnsach ma tnsach, dima kami ma tns7ach Ta nfker f denya tanghib Ta nwsel lblayes khatar."`,
        person:"Albatros"
    },
    {
        quote: `"Rap bditih meli bdit ana nmello
        Nmel f dmagh yjri
        Rap y7el zeko
        Ara jwan l hna
        Ara jwa d l bra."`,
        person:"Virgule,"
    },
    {
        quote: `"Dmagh taytkal w 7na tanchoufo b frachet Hannibal
        7errek rassek nta mital, n3ass 3endna jihad, tla7 frachek kamikaze."`,
        person:"Sommaire | من الفضاء"
    },
    {
        quote: `"L'criminologie, l'crise derto f dossier
        Tanzid l'écho f souti, sadi9 l'écologie
        Nedreb w nconsoler, lbanca w l7bss Monopoly."`,
        person:"Veto"
    },
    {
        quote: `"Melli tankoun kankteb had l3jeb, tan7ess f dmaghi chirurgie Ana li ghandwi lekhrani, la tdar 3la rap chi congrès."`,
        person:"Rais M’Bolhi"
    },
    {
        quote: `"Ach dakom l rap, ach da Panda l Kung Fu
        Yla kan rapkom rap ta "mamnou3 lbawl" graffiti
        Khebta m3a l7it ntestew tyabek spaghetti."`,
        person:"Couteau Suisse"
    },
    {
        quote: `"L'croquemitaine, Ja yzelle3 lik les jouets
        Parole et actes, dreb sérum l'vérité."`,
        person:"Sucré Salé"
    }
]

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * Quote.length);

    quote.innerText = Quote[random].quote;
    person.innerText = Quote[random].person;

})
