const notes = [
    {
        course: "Educacion Fisica",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas Personales",
        note: 7,
        credit: 5,
    },
];


const notesWithCredit = notes.map(function(noteObject){
    return noteObject.note * noteObject.credit;
});
console.log(notesWithCredit);

const sumOfNoteWithCredit = notesWithCredit.reduce(
    function (suma = 0, newVal1) {
        return suma + newVal1;
    }
    
)


const credits = notes.map(function(noteObject){
    return noteObject.credit
});
const sumOfCredits = credits.reduce (
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const promedioPonderadoNotasConCreditos = sumOfNoteWithCredit / sumOfCredits;