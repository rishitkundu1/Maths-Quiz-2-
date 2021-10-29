function addUser(){
      player1_name = document.querySelector("#player1_name_input").value;
      player2_name = document.querySelector("#player2_name_input").value;

      localStorage.setItem("player1_name", player1_name);
      localStorage.setItem("player2_name", player2_name);

      window.location = "game.html";
}
