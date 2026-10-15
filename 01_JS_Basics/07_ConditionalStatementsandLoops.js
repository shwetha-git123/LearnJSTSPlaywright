let score=85;
let grade,Perf;
if(score>=91 && score<=100)
{
grade="A";
Perf="excellent";
}
else if(score>=81 && score<=90)
{
grade="B";
Perf="VG";
}
else if(score>=71 && score<=80)
{
grade="C";
Perf="Good";
}
else if(score>=61 && score<=70)
{
grade="D";
Perf="Average";
}
else if(score>=51 && score<=60)
{
grade="E";
Perf="Needs Improvement";
}else if(score>=0 && score<=50)
{
grade="F";
Perf="Fail";
}
console.log("Grade=",grade,"Performance=", Perf);

let day
switch(day){
    case "monday":
        console.log("Today is Monday");
        break;
    case "tuesday":
        console.log("Today is Tuesday");
        break;
    case "wednesday":
        console.log("Today is Wednesday");
        break;
    case "thursday":
        console.log("Today is Thursday");
        break;
    case "friday":
        console.log("Today is Friday");
        break;
    case "saturday":
        console.log("Today is Saturday");
        break;
    case "sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid Day");
}

let browser="chromium";
switch(browser){
    case "chromium":
    case "Brave":
    case "edge":
    case "opera":
    console.log("You are using chromium browser");
    break;
    case "firefox":
    console.log("You are using firefox browser");
    break;
    case "safari":
    console.log("You are using safari browser");
    break;  
    default:
    console.log("Invalid browser");
}