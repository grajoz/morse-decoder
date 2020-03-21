const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr=[];
    let r=0;
    let arrMorse=[];
    let arrMorseARR=[];
    let letterMorse=[];
    let decode=[];
  arr=expr.match(/.{1,10}/g);
  /*arr=arr.split(",")*/
 
  
    for (let i=0;i<arr.length;i++){
      arrMorseARR=arr[i].match(/.{1,2}/g);
      for (let j=0;j<arrMorseARR.length;j++){
        if (arrMorseARR[j]=='**'){letterMorse.push(r=r+1)}
        if (arrMorseARR[j]=='10'){letterMorse.push('.')}
        if (arrMorseARR[j]=='11'){letterMorse.push('-')}
       
      }
      
      if (letterMorse.join('')=='12345'){decode[i]=' '}else{
      decode[i]=MORSE_TABLE[letterMorse.join('')]};
      letterMorse.splice(0,letterMorse.length);
      r=0;
      
      }
  
  return  decode.join('');
  
    
  }

module.exports = {
    decode
}