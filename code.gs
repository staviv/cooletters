// vars
var url = "https://api.telegram.org/bot" + token_bot;

var dictionaryD = { "Z" :"ℤ" ,"Y" :"𝕐" ,"X" :"𝕏" ,"W" :"𝕎" ,"V" :"𝕍" ,"U" :"𝕌" ,"T" :"𝕋" ,"S" :"𝕊" ,"R" :"ℝ" ,"Q" :"ℚ" ,"P" :"ℙ" ,"O" :"𝕆" ,"N" :"ℕ" ,"M" :"𝕄" ,"L" :"𝕃" ,"K" :"𝕂" ,"J" :"𝕁" ,"I" :"𝕀" ,"H" :"ℍ" ,"G" :"𝔾" ,"F" :"𝔽" ,"E" :"𝔼" ,"D" :"𝔻" ,"C" :"ℂ" ,"B" :"𝔹" ,"A" :"𝔸" ,"z" :"𝕫" ,"y" :"𝕪" ,"x" :"𝕩" ,"w" :"𝕨" ,"v" :"𝕧" ,"u" :"𝕦" ,"t" :"𝕥" ,"s" :"𝕤" ,"r" :"𝕣" ,"q" :"𝕢" ,"p" :"𝕡" ,"o" :"𝕠" ,"n" :"𝕟" ,"m" :"𝕞" ,"l" :"𝕝" ,"k" :"𝕜" ,"j" :"𝕛" ,"i" :"𝕚" ,"h" :"𝕙" ,"g" :"𝕘" ,"f" :"𝕗" ,"e" :"𝕖" ,"d" :"𝕕" ,"c" :"𝕔" ,"b" :"𝕓" ,"a" :"𝕒" };

var dictionaryB = { "Z" :"Ⓩ" ,"Y" :"Ⓨ" ,"X" :"Ⓧ" ,"W" :"Ⓦ" ,"V" :"Ⓥ" ,"U" :"Ⓤ" ,"T" :"Ⓣ" ,"S" :"Ⓢ" ,"R" :"Ⓡ" ,"Q" :"Ⓠ" ,"P" :"Ⓟ" ,"O" :"Ⓞ" ,"N" :"Ⓝ" ,"M" :"Ⓜ" ,"L" :"Ⓛ" ,"K" :"Ⓚ" ,"J" :"Ⓙ" ,"I" :"Ⓘ" ,"H" :"Ⓗ" ,"G" :"Ⓖ" ,"F" :"Ⓕ" ,"E" :"Ⓔ" ,"D" :"Ⓓ" ,"C" :"Ⓒ" ,"B" :"Ⓑ" ,"A" :"Ⓐ" ,"z" :"ⓩ" ,"y" :"ⓨ" ,"x" :"ⓧ" ,"w" :"ⓦ" ,"v" :"ⓥ" ,"u" :"ⓤ" ,"t" :"ⓣ" ,"s" :"ⓢ" ,"r" :"ⓡ" ,"q" :"ⓠ" ,"p" :"ⓟ" ,"o" :"ⓞ" ,"n" :"ⓝ" ,"m" :"ⓜ" ,"l" :"ⓛ" ,"k" :"ⓚ" ,"j" :"ⓙ" ,"i" :"ⓘ" ,"h" :"ⓗ" ,"g" :"ⓖ" ,"f" :"ⓕ" ,"e" :"ⓔ" ,"d" :"ⓓ" ,"c" :"ⓒ" ,"b" :"ⓑ" ,"a" :"ⓐ" };

var dictionaryBF = { "Z" :"🅩" ,"Y" :"🅨" ,"X" :"🅧" ,"W" :"🅦" ,"V" :"🅥" ,"U" :"🅤" ,"T" :"🅣" ,"S" :"🅢" ,"R" :"🅡" ,"Q" :"🅠" ,"P" :"🅟" ,"O" :"🅞" ,"N" :"🅝" ,"M" :"🅜" ,"L" :"🅛" ,"K" :"🅚" ,"J" :"🅙" ,"I" :"🅘" ,"H" :"🅗" ,"G" :"🅖" ,"F" :"🅕" ,"E" :"🅔" ,"D" :"🅓" ,"C" :"🅒" ,"B" :"🅑" ,"A" :"🅐" ,"z" :"🅩" ,"y" :"🅨" ,"x" :"🅧" ,"w" :"🅦" ,"v" :"🅥" ,"u" :"🅤" ,"t" :"🅣" ,"s" :"🅢" ,"r" :"🅡" ,"q" :"🅠" ,"p" :"🅟" ,"o" :"🅞" ,"n" :"🅝" ,"m" :"🅜" ,"l" :"🅛" ,"k" :"🅚" ,"j" :"🅙" ,"i" :"🅘" ,"h" :"🅗" ,"g" :"🅖" ,"f" :"🅕" ,"e" :"🅔" ,"d" :"🅓" ,"c" :"🅒" ,"b" :"🅑" ,"a" :"🅐" };

var dictionarySF = { "Z" :"🆉" ,"Y" :"🆈" ,"X" :"🆇" ,"W" :"🆆" ,"V" :"🆅" ,"U" :"🆄" ,"T" :"🆃" ,"S" :"🆂" ,"R" :"🆁" ,"Q" :"🆀" ,"P" :"🅿" ,"O" :"🅾" ,"N" :"🅽" ,"M" :"🅼" ,"L" :"🅻" ,"K" :"🅺" ,"J" :"🅹" ,"I" :"🅸" ,"H" :"🅷" ,"G" :"🅶" ,"F" :"🅵" ,"E" :"🅴" ,"D" :"🅳" ,"C" :"🅲" ,"B" :"🅱" ,"A" :"🅰" ,"z" :"🆉" ,"y" :"🆈" ,"x" :"🆇" ,"w" :"🆆" ,"v" :"🆅" ,"u" :"🆄" ,"t" :"🆃" ,"s" :"🆂" ,"r" :"🆁" ,"q" :"🆀" ,"p" :"🅿" ,"o" :"🅾" ,"n" :"🅽" ,"m" :"🅼" ,"l" :"🅻" ,"k" :"🅺" ,"j" :"🅹" ,"i" :"🅸" ,"h" :"🅷" ,"g" :"🅶" ,"f" :"🅵" ,"e" :"🅴" ,"d" :"🅳" ,"c" :"🅲" ,"b" :"🅱" ,"a" :"🅰" };

var dictionaryS = { "Z" :"🅉" ,"Y" :"🅈" ,"X" :"🅇" ,"W" :"🅆" ,"V" :"🅅" ,"U" :"🅄" ,"T" :"🅃" ,"S" :"🅂" ,"R" :"🅁" ,"Q" :"🅀" ,"P" :"🄿" ,"O" :"🄾" ,"N" :"🄽" ,"M" :"🄼" ,"L" :"🄻" ,"K" :"🄺" ,"J" :"🄹" ,"I" :"🄸" ,"H" :"🄷" ,"G" :"🄶" ,"F" :"🄵" ,"E" :"🄴" ,"D" :"🄳" ,"C" :"🄲" ,"B" :"🄱" ,"A" :"🄰" ,"z" :"🅉" ,"y" :"🅈" ,"x" :"🅇" ,"w" :"🅆" ,"v" :"🅅" ,"u" :"🅄" ,"t" :"🅃" ,"s" :"🅂" ,"r" :"🅁" ,"q" :"🅀" ,"p" :"🄿" ,"o" :"🄾" ,"n" :"🄽" ,"m" :"🄼" ,"l" :"🄻" ,"k" :"🄺" ,"j" :"🄹" ,"i" :"🄸" ,"h" :"🄷" ,"g" :"🄶" ,"f" :"🄵" ,"e" :"🄴" ,"d" :"🄳" ,"c" :"🄲" ,"b" :"🄱" ,"a" :"🄰" };

var dictionary1 = { "Z" :"𝙕" ,"Y" :"𝙔" ,"X" :"𝙓" ,"W" :"𝙒" ,"V" :"𝙑" ,"U" :"𝙐" ,"T" :"𝙏" ,"S" :"𝙎" ,"R" :"𝙍" ,"Q" :"𝙌" ,"P" :"𝙋" ,"O" :"𝙊" ,"N" :"𝙉" ,"M" :"𝙈" ,"L" :"𝙇" ,"K" :"𝙆" ,"J" :"𝙅" ,"I" :"𝙄" ,"H" :"𝙃" ,"G" :"𝙂" ,"F" :"𝙁" ,"E" :"𝙀" ,"D" :"𝘿" ,"C" :"𝘾" ,"B" :"𝘽" ,"A" :"𝘼" ,"z" :"𝙯" ,"y" :"𝙮" ,"x" :"𝙭" ,"w" :"𝙬" ,"v" :"𝙫" ,"u" :"𝙪" ,"t" :"𝙩" ,"s" :"𝙨" ,"r" :"𝙧" ,"q" :"𝙦" ,"p" :"𝙥" ,"o" :"𝙤" ,"n" :"𝙣" ,"m" :"𝙢" ,"l" :"𝙡" ,"k" :"𝙠" ,"j" :"𝙟" ,"i" :"𝙞" ,"h" :"𝙝" ,"g" :"𝙜" ,"f" :"𝙛" ,"e" :"𝙚" ,"d" :"𝙙" ,"c" :"𝙘" ,"b" :"𝙗" ,"a" :"𝙖" };

var dictionaryF = { "Z" :"𝖅" ,"Y" :"𝖄" ,"X" :"𝖃" ,"W" :"𝖂" ,"V" :"𝖁" ,"U" :"𝖀" ,"T" :"𝕿" ,"S" :"𝕾" ,"R" :"𝕽" ,"Q" :"𝕼" ,"P" :"𝕻" ,"O" :"𝕺" ,"N" :"𝕹" ,"M" :"𝕸" ,"L" :"𝕷" ,"K" :"𝕶" ,"J" :"𝕵" ,"I" :"𝕴" ,"H" :"𝕳" ,"G" :"𝕲" ,"F" :"𝕱" ,"E" :"𝕰" ,"D" :"𝕯" ,"C" :"𝕮" ,"B" :"𝕭" ,"A" :"𝕬" ,"z" :"𝖟" ,"y" :"𝖞" ,"x" :"𝖝" ,"w" :"𝖜" ,"v" :"𝖛" ,"u" :"𝖚" ,"t" :"𝖙" ,"s" :"𝖘" ,"r" :"𝖗" ,"q" :"𝖖" ,"p" :"𝖕" ,"o" :"𝖔" ,"n" :"𝖓" ,"m" :"𝖒" ,"l" :"𝖑" ,"k" :"𝖐" ,"j" :"𝖏" ,"i" :"𝖎" ,"h" :"𝖍" ,"g" :"𝖌" ,"f" :"𝖋" ,"e" :"𝖊" ,"d" :"𝖉" ,"c" :"𝖈" ,"b" :"𝖇" ,"a" :"𝖆" };




const dictionary = [dictionaryD, dictionaryB, dictionaryBF, dictionarySF, dictionaryS, dictionary1, dictionaryF];

function covertext(msg) {
  const result=[];
  for (let i in dictionary)
  result[i] = msg.replace(/[a-z]/gi, m => dictionary[i][m]);
  return(result);
}


function postData(payload){
  var data = {
    method: 'post',
    "payload": payload,
  };

  // bot's token
  UrlFetchApp.fetch(
    'https://api.telegram.org/bot' + token_bot + '/',
    data
  );
}


function sendMessage(chatId, text){
  var payload = {
    method: 'sendMessage',
    chat_id: String(chatId),
    text: text,
    parse_mode: 'HTML',
  };
  postData(payload);
}


function answerInlineQuery(id, answer){
  var payload = {
    method: 'answerInlineQuery',
    inline_query_id: String(id),
    results: JSON.stringify(answer),
    parse_mode: 'HTML',
  };
  
  postData(payload);
}


function doPost(e) {
  var update = JSON.parse(e.postData.contents);
  // Make sure this is update is a type message
  if (update.hasOwnProperty('message')) {
    var msg = update.message;
    var chatId = msg.chat.id;
    var tosend = covertext(msg.text);
    for (let i in tosend){
      sendMessage(chatId, tosend[i]);
    }
    //sendMessage(chatId, String(chatId));
  }
  else if(update.hasOwnProperty('inline_query')){
    strArr = covertext(update.inline_query.query);
    answer=[];
    for (i in strArr)answer[i] = {type:"article", id:i, title: strArr[i], input_message_content:{message_text:strArr[i]}};
    answerInlineQuery(update.inline_query.id, answer);
  }
  else{
    for(p in update)
    sendMessage(986383258, p);
  }
}



function setWebhook() {
  var response =  UrlFetchApp.fetch(url + "/setWebhook?url=" + webAppUrl);
  Logger.log(response.getContentText());
}