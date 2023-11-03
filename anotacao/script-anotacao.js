var codes = document.getElementsByClassName("myCode");
for (var i = 0; i < codes.length; i++) {
    codes[i].addEventListener("click", function() {
        var textArea = document.createElement("textarea");
        textArea.value = this.textContent.replace("Clique para copiar", "").trim();
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
        var tooltip = this.getElementsByClassName("copyTooltip")[0];
        tooltip.textContent = "Copiado!";
        tooltip.style.visibility = "visible";
        setTimeout(function(){ 
            tooltip.style.visibility = "hidden"; 
            tooltip.textContent = "Clique para copiar";
        }, 3000);
    });
}

