function abrirMenu(){
    if (Item.style.display == "block")
    {
        Item.style.display ="none";
        navigator.vibrate(500);
    }
    else
    {
        Item.style.display ="block";
    }
}
