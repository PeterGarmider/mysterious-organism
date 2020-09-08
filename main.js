// Returns a random DNA base

const dnaBases = ['A', 'T', 'C', 'G'];

const returnRandBase = (baseList) => {
  return baseList[Math.floor(Math.random() * baseList.length)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase(dnaBases));
  }
  return newStrand;
};

const pAequorFactory = (organismNum, dnaBaseArray) => {
  return {
    specimenNum: organismNum,
    dna: dnaBaseArray,

    mutate() {
      const randomIndex = Math.floor(this.dna.length * Math.random());
      const filteredDnaList = dnaBases.filter(base => base != this.dna[randomIndex]);

      this.dna.splice(randomIndex, 1, returnRandBase(filteredDnaList));

      return this.dna;
    },

    compareDNA(pAequorObject) {
      //compare this.dna of this object to that of another pAequor object
      let count = 0;
      for (i of this.dna) {
        if (i === pAequorObject.dna[this.dna.indexOf(i)]) {
          console.log(i);
          count += 1;
        };

      };
      const percentDiff = ((count/15)*100).toFixed(2);
      console.log(count);
      console.log(percentDiff);
      console.log(`Specimen ${this.specimenNum} and specimen ${pAequorObject.specimenNum} have ${percentDiff}% DNA in common.`)
    }


    }
  };

const test1 = pAequorFactory(1, mockUpStrand());
const test2 = pAequorFactory(2, mockUpStrand());

test1.compareDNA(test2);

//console.log(test1);
//console.log(test1.mutate());
