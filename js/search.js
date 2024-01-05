document.getElementById('search-input').addEventListener('input', function(){
    var searchInput = this.value.trim().toLowerCase();
    document.querySelectorAll('.disease').forEach(function(penyakit){
        var diseasename = penyakit.textContent.toLowerCase();

        if(diseasename.includes(searchInput)){
            penyakit.style.display = "initial";
        }else{
            penyakit.style.display = "none";
        }
    })
})