var sent = "The quick brown fox";
function searchWord (sentence,word){
  if (typeof sentence === 'string' && typeof word === 'string'){
    sentence = sentence.split(word);
    count = 0;
    for (i of sentence){
      if (i ==""){
        count ++; 
      }
    }
    return count;
  }else{
    throw new Error ("string is required");
  }
}

searchWord(sent,"fox");