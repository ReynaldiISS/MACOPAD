setInterval(function () {
    fetch("http://localhost:8080/api")
      .then((hasil) => hasil.json())
      .then((res) => {
        console.log(res);
        document.getElementById("suhu").innerHTML = res.sensor1.suhu;
        document.getElementById("kipas").innerHTML = res.sensor2.kipas;

        
      });
  }, 1000);

  //set interval untuk refresh otomatis dengan delay 1 detik
  //
