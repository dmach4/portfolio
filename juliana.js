function abrirMenu(){

    if (Item.style.display == "block")
    {
        Item.style.display ="none";
        navigator.vibrate(2000);
    }
    else
    {
        Item.style.display ="block";
    }
}
