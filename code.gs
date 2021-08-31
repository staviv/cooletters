function convertext(msg) {
  const result=[];
  for (let i in dictionaries)
    result[i] = msg.replace(/[a-z]/gi, m => dictionaries[i][m]);
  if(/^[א-ת]/.test(msg)){

  }
    result.push(msg[0] + msg.slice(1).replace(/[א-ת]/g, m => "\u202E" + dictionaryHeb[m]));

  return(result);
}



function doPost(e) {
  var update = JSON.parse(e.postData.contents);
  // Make sure this is update is a type message
  if (update.hasOwnProperty('message')) {
    var msg = update.message;
    var chatId = msg.chat.id;
    var tosend = convertext(msg.text);
    for (let i in tosend){
      sendMessage(chatId, tosend[i]);
    }
  }
  else if(update.hasOwnProperty('inline_query')){
    strArr = convertext(update.inline_query.query);
    answer=[];
    for (i in strArr)answer[i] = {type:"article", id:i, title: strArr[i], input_message_content:{message_text:strArr[i]}};
    answerInlineQuery(update.inline_query.id, answer);
  }
}


