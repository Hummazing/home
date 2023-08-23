
const zuText = document.getElementById('zutattext');
const naText = document.getElementById('nahrwerttext');

function zutatentrg() {
  if (document.getElementById('zutattext').textContent.trim().length > 0) {
  document.getElementById('zutattext').textContent = '';
} else {
  document.getElementById('zutattext').textContent = 'Kichererbsenpulver (77%), Tomatenpulver (8,6%), Salz, Basilikum, Zwiebel, Knoblauch, Kreuzkümmel';
  document.getElementById('nahrwerttext').textContent = '';
}
}


function nahrwerttrg() {
  if (document.getElementById('nahrwerttext').textContent.trim().length > 0) {
  document.getElementById('nahrwerttext').textContent = '';
} else {
  document.getElementById('zutattext').textContent = '';
  document.getElementById('nahrwerttext').textContent = 'Lorem Ipsum ist ein Blindtext, der in der Druck- und Schriftindustrie als Platzhaltertext verwendet wird, wenn der tatsächliche Text noch nicht verfügbar ist. Es besteht aus einer scheinbar sinnlosen Aneinanderreihung von lateinischen Wörtern und hat keine eigentliche Bedeutung. Es wird seit dem 16. Jahrhundert verwendet und hat in der digitalen Welt immer noch große Bedeutung. Lorem Ipsum ist ein Blindtext, der in der Druck- und Schriftindustrie als Platzhaltertext verwendet wird, wenn der tatsächliche Text noch nicht verfügbar ist. Es besteht aus einer scheinbar sinnlosen Aneinanderreihung von lateinischen Wörtern und hat keine eigentliche Bedeutung. Es wird seit dem 16. Jahrhundert verwendet und hat in der digitalen Welt immer noch große Bedeutung';
}
}

function closepop(nummer){
	if (nummer == 1) {
    document.getElementById('popup1').style.display = 'none';
    document.getElementById('popup1').style.zIndex = -1;
  } else if (nummer == 2) {
    document.getElementById('popup2').style.display = 'none';
    document.getElementById('popup2').style.zIndex = -1;
  } else if (nummer == 3) {
    document.getElementById('popup3').style.display = 'none';
    document.getElementById('popup3').style.zIndex = -1;
  }
}

function openpop(nummer){
  if (nummer == 1) {
    document.getElementById('popup1').style.display = 'flex';
    document.getElementById('popup1').style.zIndex = 1;
  } else if (nummer == 2) {
    document.getElementById('popup2').style.display = 'flex';
    document.getElementById('popup2').style.zIndex = 1;
  } else if (nummer == 3) {
    document.getElementById('popup3').style.display = 'flex';
    document.getElementById('popup3').style.zIndex = 1;
  }
	
}