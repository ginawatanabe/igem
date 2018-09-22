window.onload = function(){
  var cont = document.getElementById('container');
  var input = 'GCACAGCCCGCGTACCAAGGGTATCATTCAACACTTCGTGCGTCTGGTTAAAACCCACACCGAAGGTCTGGACAACGATATGCAGGTGACCAACGAGAAGATGGGCCAACTGGAAGCGACCCAGATCGATACCAACACCAAGCTGGCGAACGTGGAGATGACCGTTGCGCACATTGACAAAAGCCTGGTTGCGCTGCTGCGTCGTTTTGATGAAATGCACGCGAACATTAACGGTGGCCGTGATGAGGGTGCGGAGGGTAACTGGGACGATTACGTGGCGGACACCGAGCAAGACGATCAGGAAGCGCCGAACCGTCGTCGTCTGCGTACCAACCGTCGTGGTATGGGTGGCTTCCACCGTCGTGAGGTGCACGGCAACGACGATGCGTTTAGCAAGGTTAAATTCAAGATCCCGCCGTTTGATGGCAAGTACGACCCGGATGCGTATATCACCTGGGAAATTGCGGTGGACCAGAAATTCGCGTGCCACGAGTTTCCGGAAAACGCGCGTGTGCGTGCGGCGACCAGCGAGTTCACCGAATTTGCGAGCGTTTGGTGGATTGAGCACGGTAAGAAAAACCCGAACAACATGCCGCAAACCTGGGATGCGCTGAAACGTGTTATGCGTGCGCGTTTCGTGCCGAGCTACTATGCGCGTGACATGCTGAACAAGCTGCAACAACTGCGTCAGGGCACCAAAAGCGTTGAGGAATACTATCAAGAGCTGCAAATGGGTATGCTGCGTTGCAACATCGAGGAAGGCGAGGAAAGCGCGATGGCGCGTTTTCT';
  var inputArr = input.split('');
  for (i=0;i<inputArr.length;i++){
    createBlock(inputArr[i]);
  }
  function createBlock(letter) {
    var div = document.createElement('div');
    div.classList.add('general');
    switch(letter){
      case 'G':
      div.classList.add('Gstyle');
      break;
      case 'A':
      div.classList.add('Astyle');
      break;
      case 'T':
      div.classList.add('Tstyle');
      break;
      case 'C':
      div.classList.add('Cstyle');
      break;
      default:
      console.log('nostyle');
    }
    cont.appendChild(div); 

  }
}