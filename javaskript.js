
const zuText = document.getElementById('zutattext');
const naText = document.getElementById('nahrwerttext');

function zutatentrg() {
  if (document.getElementById('zutattext').textContent.trim().length > 0) {
  document.getElementById('zutattext').textContent = '';
} else {
  document.getElementById('zutattext').textContent = '76,9 % Kichererbsenmehl, 17,2 %Tomatenpulver, Salz, Basilikum, Zwiebelpulver, Knoblauchpulver, Kreuzkümmel';
  document.getElementById('nahrwerttext').style.visibility = 'hidden';
}
}


function nahrwerttrg() {
  if (document.getElementById('nahrwerttext').style.visibility == 'visible';) {
  document.getElementById('nahrwerttext').style.visibility = 'hidden';
} else {
  document.getElementById('zutattext').textContent = '';
  document.getElementById('nahrwerttext').style.visibility = 'visible';
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
