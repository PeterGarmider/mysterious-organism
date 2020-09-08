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

//factory function which generates organism objects containing the specimen number, dna bases array, a function to mutate the dna bases array, and a function to compare this object with another organism object
const pAequorFactory = (organismNum, dnaBaseArray) => {
  return {
    specimenNum: organismNum,
    dna: dnaBaseArray,

    //mutate the DNA array by swapping a random item in the array with another random item from the dnaBases array
    mutate() {
      const randomIndex = Math.floor(this.dna.length * Math.random());
      const filteredDnaList = dnaBases.filter(base => base != this.dna[randomIndex]);

      this.dna.splice(randomIndex, 1, returnRandBase(filteredDnaList));

      return this.dna;
    },

    //compare this.dna of this object to that of another pAequor object and return a % of similarity
    compareDNA(pAequorObject) {
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
    },

    //Look at this.dna's array and determine if at least 60% of the array is C or G bases
    willLikelySurvive() {
      countC = 0;
      countG = 0;
      for (i of this.dna) {
        if (i === 'C') {
          countC += 1;
        }
        else if (i === 'G') {
          countG += 1;
        }
      }
      console.log(countC);
      console.log(countG);

      if (countC/15 >= 0.6 || countG/15 >= 0.6) {
        console.log('yes');
        return true;
      }
      else {
        console.log('no');
        return false;
      }
    }

  }
};

const test1 = pAequorFactory(1, mockUpStrand());
//const test2 = pAequorFactory(2, mockUpStrand());
//test1.compareDNA(test2);

test1.willLikelySurvive();

//console.log(test1);
//console.log(test1.mutate());
