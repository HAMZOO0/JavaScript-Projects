function createCard(title, views, monthsOld, duration) {

    // document.querySelector(".image").thumbnail;
    document.querySelector(".duration").innerHTML=duration;
    if(views > 1000 && views < 99999)
    {
        document.querySelector(".view").innerHTML=(views/1000)+'K';
    }

    else if(views > 99999 && views < 9999999)
    {
        document.querySelector(".view").innerHTML=(views/10000)+'M';
        
    }

    else
    {
        document.querySelector(".view").innerHTML=views;

    }


    document.querySelector(".time").innerHTML=monthsOld+" months ago";
    document.querySelector(".title").innerHTML=title;

}


createCard("Introduction to Backend | Sigma Web Dev video #2", 560000, 7, "31:22" )
