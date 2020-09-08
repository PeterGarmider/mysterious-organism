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
      console.log(randomIndex);
      const filteredDnaList = dnaBases.filter(base => base != this.dna[randomIndex]);
      this.dna.splice(randomIndex, 1, returnRandBase(filteredDnaList));
      return this.dna;
      }
    }
  };

const test1 = pAequorFactory(1, mockUpStrand());
console.log(test1);
console.log(test1.mutate());
