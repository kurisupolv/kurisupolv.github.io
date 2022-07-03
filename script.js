document.getElementById("monthAndYear").innerHTML = sessionStorage.getItem("selectedMonth");
function generate_year_range(start, end) {
    var years = "";
    for (var year = start; year <= end; year++) {
        years += "<option value='" + year + "'>" + year + "</option>";
    }
    return years;
}


today = new Date();
currentMonth = sessionStorage.getItem("selectedMonth");
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");


createYear = generate_year_range(2022,2023);
document.getElementById("year").innerHTML = createYear;

var calendar = document.getElementById("calendar");

var lang = calendar.getAttribute('data-lang');

var months = "";
var days = "";

var monthDefault = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

var dayDefault = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];

if (lang == "en") {
    months = monthDefault;
    days = dayDefault;
} else {
    months = monthDefault;
    days = dayDefault;
}


var $dataHead = "<tr>";
for (dhead in days) {
    $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
}
$dataHead += "</tr>";

document.getElementById("thead-month").innerHTML = $dataHead;


monthAndYear = document.getElementById("monthAndYear");

currentMonth = sessionStorage.getItem("selectedMonth")?parseInt(sessionStorage.getItem("selectedMonth"))-1:new Date().getMonth();
showCalendar(currentMonth, currentYear);



function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    var firstDay = ( new Date( year, month ) ).getDay();

    tbl = document.getElementById("calendar-body");

    
    tbl.innerHTML = "";

    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;
	let fiere = [
					{
						'name':'RiminiComix (RN)',
						'inizio': "2022-07-14",
						'fine':"2022-07-17"
					},
					{
						'name':'Comicon (NA)',
						'inizio': "2023-04-28",
						'fine':"2023-05-01"
					},
					{
						'name':'Romics (ROMA)',
						'inizio': "2022-04-07",
						'fine':"2022-04-10"
					},
					{
						'name':'Naoniscon (PN)',
						'inizio': "2022-05-08",
						'fine':"2022-05-08"
					},
					{
						'name':'Falcomics (AN)',
						'inizio': "2022-05-13",
						'fine':"2022-05-15"
					},
					{
						'name':'Milano Novegro (MI)',
						'inizio': "2022-05-14",
						'fine':"2022-05-15"
					},
					{
						'name':'TrapaniComix (TR)',
						'inizio': "2022-05-20",
						'fine':"2022-05-22"
					},
					{
						'name':'Ludicomix (FI)',
						'inizio': "2022-05-28",
						'fine':"2022-05-29"
					},
					{
						'name':'EtnaComics (CT)',
						'inizio': "2022-06-01",
						'fine':"2022-06-05"
					},
					{
						'name':'TorinoComics (TO)',
						'inizio': "2022-06-10",
						'fine':"2022-06-12"
					},
					{
						'name':'FantasyDay (NA)',
						'inizio': "2022-06-18",
						'fine':"2022-06-19"
					},
					{
						'name':'Nerd Show (BO)',
						'inizio': "2022-06-25",
						'fine':"2022-06-26"
					},
					{
						'name':'San Beach Comix (AP)',
						'inizio': "2022-07-02",
						'fine':"2022-07-03"
					},
					{
						'name':'VarchiComix (AR)',
						'inizio': "2022-07-02",
						'fine':"2022-07-03"
					},
					{
						'name':'Alecomics (AL)',
						'inizio': "2022-09-03",
						'fine':"2022-09-04"
					},
					{
						'name':'Fantaexpo (SA)',
						'inizio': "2022-09-08",
						'fine':"2022-09-11"
					},
					{
						'name':'Festa dell\'unicorno (FI)',
						'inizio': "2022-07-29",
						'fine':"2022-07-31"
					},
					{
						'name':'Pescara Comix (PE)',
						'inizio': "2022-09-09",
						'fine':"2022-09-11"
					},
					{
						'name':'Modena Nerd (MO)',
						'inizio': "2022-09-10",
						'fine':"2022-09-11"
					},
					{
						'name':'Romics (ROMA)',
						'inizio': "2022-10-06",
						'fine':"2022-10-09"
					},
					{
						'name':'LuccaComics (LU)',
						'inizio': "2022-10-28",
						'fine':"2022-11-01"
					},
					{
						'name':'Milan Games Week (MI)',
						'inizio': "2022-11-25",
						'fine':"2022-11-27"
					},
					{
						'name':'Xmas Comics (TO)',
						'inizio': "2022-12-03",
						'fine':"2022-12-04"
					},
				];
				
	
    var date = 1;
    for ( var i = 0; i < 6; i++ ) {
        
        var row = document.createElement("tr");

        
        for ( var j = 1; j < 8; j++ ) {
            if ( i === 0 && j < firstDay ) {
                cell = document.createElement( "td" );
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");
                cell.setAttribute("data-date", date);
                cell.setAttribute("data-month", month + 1);
                cell.setAttribute("data-year", year);
                cell.setAttribute("data-month_name", months[month]);
                cell.className = "date-picker";
				let monthSum="";
				 if((month+1) <=9){
					 monthSum = month+1;
					monthSum= "0"+monthSum;
				 }else{
					monthSum = month+1;
				 }
				 
				 let innerHtmlString = "<span>" + date +" ";
				 fiere.forEach((fiera)=>{
					
					 let currentDateTime = new Date(year,monthSum-1,date);
					 let fieraInizioSplit = fiera.inizio.split("-");
					 let fieraInizioDate = new Date(fieraInizioSplit[0],fieraInizioSplit[1]-1,fieraInizioSplit[2]);
					 let fieraFineSplit = fiera.fine.split("-");
					 let fieraFineDate = new Date(fieraFineSplit[0],fieraFineSplit[1]-1,fieraFineSplit[2]);
					 
					 if(fieraInizioDate.getTime() <= currentDateTime.getTime() && fieraFineDate.getTime() >= currentDateTime.getTime()){

						innerHtmlString+= "<br>"+"<label class='event'>"+fiera.name+"</label>";
					 }
				 })
				
				 innerHtmlString+="</span>";
                cell.innerHTML = innerHtmlString;
				
                if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
                    cell.className = "date-picker selected";
                }
                row.appendChild(cell);
                date++;
            }
		 


        }

        tbl.appendChild(row);
    }

}

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}
