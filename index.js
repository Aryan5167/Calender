const dt=new Date();
  function renderdate(){
    dt.setDate(1);
    
    const firstdate=dt.getDay();
    // getting the last date of the month 
    var enddate=new Date(
          dt.getFullYear(),
          dt.getMonth()+1,
          0
    ).getDate();
   
    // getting the last date of previous month
    const prevlastdate=new Date(
       dt.getFullYear(),
       dt.getMonth(),
       0
   ).getDate();
   
    var today=new Date();

    // array of month names
    const monthname=["January","February","March","April","May","June","July","August","September","October","November","December"];

   document.getElementById("curryear").innerHTML=dt.getFullYear();
   document.getElementById("currmonth").innerHTML=monthname[dt.getMonth()];
   
   let days="";

   
   for (z=firstdate;z>0;z--)
   {
    days+="<div class='prevdate'>"+(prevlastdate-z+1)+"</div>";
   }
   
   for(let i=1;i<=enddate;i++)
   {
       if(i==today.getDate() && dt.getMonth()==today.getMonth() && dt.getFullYear()==today.getFullYear())
       {
        days += "<div class='today'>"+i+"</div>";  //higlighting the current date
       }
       else{
       days+="<div>"+i+"</div>";
       
       }
   }
   document.getElementsByClassName("days")[0].innerHTML=days; 
   
  
   

 }
//added click function to left arrow
document.querySelector(".prev").addEventListener("click",() =>{  
    dt.setMonth(dt.getMonth()-1);
    renderdate();
});
//added click funtion to right arrow
document.querySelector(".next").addEventListener("click",() =>{
    dt.setMonth(dt.getMonth()+1);
    renderdate();
});

renderdate();
