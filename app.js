let dateElement = document.querySelector('.date')
function updateDate() {
  let hourElement = document.querySelector('span');
  let date = new Date();
  const newHour = date.getHours();
  const newMin = date.getMinutes();
  hourElement.textContent =
  `${getZero(newHour)}:${getZero(newMin)}`;

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }
}
updateDate();
async function getData(region) {
  const request = await fetch(
    `https://islomapi.uz/api/present/day?region=${region}`
  );
  const response = await request.json();
  document.querySelector('.tong').textContent = 'Bomdod:'+ response.times.tong_saharlik;
  document.querySelector('.quyosh').textContent = 'Quyosh:'+ response.times.quyosh;
  document.querySelector('.peshin').textContent = 'Peshin:'+ response.times.peshin;
  document.querySelector('.asr').textContent = 'Asr:'+ response.times.asr
  document.querySelector('.shom').textContent = 'Shom:'+ response.times.shom_iftor
  document.querySelector('.hufton').textContent = 'Xufton:'+ response.times.hufton
  console.log(response);
  
  if (hour.textContent >= response.times.tong_saharlik && hour.textContent  < response.times.quyosh){
    console.log('hi');
    document.querySelector('.tong').setAttribute('id', "active");
  } else if(hour.textContent >= response.times.peshin && hour.textContent  < response.times.asr){
    document.querySelector('.peshin').setAttribute('id', "active");
  }
   else if(hour.textContent >= response.times.asr && hour.textContent  < response.times.shom_iftor){
    document.querySelector('.asr').setAttribute('id', "active");
  }
   else if(hour.textContent >= response.times.shom_iftor && hour.textContent  < response.times.hufton){
    document.querySelector('.shom').setAttribute('id', "active");
  }
   else if(hour.textContent >= response.times.hufton){
    document.querySelector('.hufton').setAttribute('id', "active");
  }
}
getData('Toshkent');
async function getDate (date) {
  const req = await fetch(`https://islomapi.uz/api/present/day?region=${date}`)
  const res = await req.json();
  document.querySelector(".date").textContent = res.date;
}
getDate('Toshkent');



