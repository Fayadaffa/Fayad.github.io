function tampildata(){
    var nama = document.getElementById("nama").value
    var user = document.getElementById("username").value
    var agama = document.getElementById("agama").value
    var jeniskel = document.querySelector("input[name=jenis_kelamin]:checked").value

    alert(
        "Nama               : " + nama+
        "\nUsername         : " + user+
        "\nAgama            : " + agama+
        "\nJenis Kelamin    : " +jeniskel
    );
} 