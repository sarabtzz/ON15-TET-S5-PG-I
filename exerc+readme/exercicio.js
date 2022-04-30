/* Tente criar um script que gere essa conversão.

Por exemplo:

```
const dnaTranscriber = new DnaTranscriber()
dnaTranscriber.toRna('C')) //=> G
dnaTranscriber.toRna('G')) //=> C
dnaTranscriber.toRna('A')) //=> U
dnaTranscriber.toRna('T')) //=> A
dnaTranscriber.toRna('ACGTGGTCTTAA')) //=> UGCACCAGAAUU */

/* tive muita dificuldade de fazer esse exercicio, que por sinal não consegui enxergar o erro. se puder fazer apontamentos, agreço muito, prof. 
Além disso, fiquei chateada por não conseguir usar o If else, que foi a primeira coisa que pensei em fazer quando estava na aula*/
/*deixo aqui a autocrítica de que não pratiquei o suficiente essa semana*/

class Transcricao {
    constructor(dna) {
        this.dna = dna();

    }

    conversaoRNA() {

    console.log(this.dna);

    let rna = this.dna.replace ('T', 'U').
    replace ('G', 'C').
    replace ('C', 'G'). 
    replace ('T', 'A').
    replace ('A', 'U');

    return (`O DNA é ${this.dna} e o RNA é ${rna.toUpperCase()}.`);

}
}

const Transcricao = new Transcricao('ATGCCGAAATTTGCG');
console.log(Transcricao.conversaoRNA());