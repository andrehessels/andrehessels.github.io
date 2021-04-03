$("#calendar").evoCalendar({
	theme: 'Midnight Navy',
	sidebarToggler: false,
	eventListToggler: true,
	sidebarDisplayDefault: false,
	eventDisplayDefault: true,
	firstDayOfWeek: 1,
	language: 'nl',
	eventHeaderFormat: "d MM yyyy",
	calendarEvents: [
        {
            "id": "1",
            "name": "3e - FA",
            "description": "Maak C en I, SO H3 E t/m J",
            "date": "April/6/2021",
            "type": "event",
            "color": "#ebae34"
        },
        {
            "id": "2",
            "name": "4e - WI",
            "description": "Maak Voorkennins en 1.1 t/m 1.3",
            "date": "April/6/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "3",
            "name": "5e - AK",
            "description": "Vul de spreadsheet in Classroom voor 9 april in",
            "date": "April/6/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "4",
            "name": "1e - DU",
            "date": "April/7/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "5",
            "name": "2e - BI",
            "date": "April/7/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "6",
            "name": "3e - EN",
            "description": "Maak Grammatica van Unit 10 af",
            "date": "April/7/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "7",
            "name": "1e- NE",
            "date": "April/8/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "8",
            "name": "2e - SK",
            "description": "Lezen 6.1 en maken 2 t/m 9",
            "date": "April/8/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "9",
            "name": "3e - WI",
            "date": "April/8/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "10",
            "name": "4e - MU",
            "date": "April/8/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "11",
            "name": "5e - MEN",
            "date": "April/8/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "12",
            "name": "1e - EN",
            "date": "April/9/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "13",
            "name": "2e - GS",
            "date": "April/9/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "14",
            "name": "3e - NA",
            "date": "April/9/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "15",
            "name": "4e - EC",
            "description": "Maak Import van rijst bedreigt Japan, Europa als handelsblok en Medisch toerisme",
            "date": "April/9/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "16",
            "name": "3e - NL",
            "date": "April/12/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "17",
            "name": "4e - DU",
            "date": "April/12/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "18",
            "name": "3e - FA",
            "date": "April/13/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "19",
            "name": "4e - WI",
            "date": "April/13/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "20",
            "name": "5e - AK",
            "date": "April/13/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "21",
            "name": "1e - DU",
            "date": "April/14/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "22",
            "name": "2e - BI",
            "date": "April/14/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "23",
            "name": "3e - EN",
            "date": "April/14/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "24",
            "name": "1e - NE",
            "date": "April/15/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "25",
            "name": "2e - SK",
            "date": "April/15/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "26",
            "name": "3e - WI",
            "date": "April/15/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "27",
            "name": "4e - MU",
            "date": "April/15/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "28",
            "name": "5e - MEN",
            "date": "April/15/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "29",
            "name": "1e - EN",
            "date": "April/16/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "30",
            "name": "2e - GS",
            "date": "April/16/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "31",
            "name": "3e - NA",
            "date": "April/16/2021",
            "type": "event",
            "color": "#348feb"
        },
        {
            "id": "32",
            "name": "4e - EC",
            "date": "April/16/2021",
            "type": "event",
            "color": "#348feb"
        }
    ]
  });

  window.setInterval(function() {
	if ($(".event-hide")[0] && (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
		document.getElementById("main-content").style.backgroundColor = "#ffffff";
	} else if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
		document.getElementById("main-content").style.backgroundColor = "#534a6d80";
	} else {
		document.getElementById("main-content").style.backgroundColor = "#ffffff";
	}
}, 1);

window.setInterval(function() {
	if ($(".event-indicator")[0]) {
		$('.event-indicator').hide();
	}
}, 1);