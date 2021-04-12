
document.addEventListener('DOMContentLoaded', function () {
    var modeSwitch = document.querySelector('.mode-switch');
  
    modeSwitch.addEventListener('click', function () {                     
      document.documentElement.classList.toggle('dark');
      modeSwitch.classList.toggle('active');
    });
    
    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');
    var projectsList = document.querySelector('.project-boxes');
    
    listView.addEventListener('click', function () {
      gridView.classList.remove('active');
      listView.classList.add('active');
      projectsList.classList.remove('jsGridView');
      projectsList.classList.add('jsListView');
    });
    
    gridView.addEventListener('click', function () {
      gridView.classList.add('active');
      listView.classList.remove('active');
      projectsList.classList.remove('jsListView');
      projectsList.classList.add('jsGridView');
    });
    
    document.querySelector('.messages-btn').addEventListener('click', function () {
      document.querySelector('.messages-section').classList.add('show');
    });
    
    document.querySelector('.messages-close').addEventListener('click', function() {
      document.querySelector('.messages-section').classList.remove('show');
    });
  });

  function getMonth() {
  var month = new Array(12);
  month[0]="Januari";
  month[1]="Februari";
  month[2]="Maart";
  month[3]="April";
  month[4]="Mei";
  month[5]="Juni";
  month[6]="Juli";
  month[7]="Augustus";
  month[8]="September";
  month[9]="Oktober";
  month[10]="November";
  month[11]="December";

  const d = new Date();
  var now = new Date()
  var firstDayOfWeek = new Date(now.setDate(now.getDate() - now.getDay()+1));
  const options = {  year: 'numeric', month: 'short', day: 'numeric' };
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  } else {
    document.getElementById("date").innerHTML = "Huidige week: " + firstDayOfWeek.toLocaleDateString('nl-NL', options);
  }
  }

function getWork() {
    var obj = [{
        "lessonname": "Aardrijkskunde",
        "deadline": "12 April 2021",
        "title": "Voorbereiding Basisles 2",
        "teacher": "ALB",
        "color": "#d1ffdc"
      }, {
        "lessonname": "Duits",
        "deadline": "12 April 2021",
        "title": "Opdracht 21 t/m 26 blz. 67",
        "teacher": "STC",  
        "color": "#ccfdff"
      }, {
        "lessonname": "Wiskunde",
        "deadline": "13 April 2021",
        "title": "Maak 1.4 t/m 1.6 en 2.1 t/m 2.3",
        "teacher": "SCE",
        "color": "#affadb"
      }, {
        "lessonname": "Engels",
        "deadline": "14 April 2021",
        "title": "Grammar p. 59 en ReadTheory",
        "teacher": "ZWA",
        "color": "#e6ccff"
      }, {
        "lessonname": "Nederlands",
        "deadline": "15 April 2021",
        "title": "Opdracht 1 op blz. 222: 3, 6, 9, 13, 15 en 18",
        "teacher": "JAG",
        "color": "#ffb5df"
      }, {
        "lessonname": "Economie",
        "deadline": "16 April 2021",
        "title": "Loonkosten per product, Bitterblond en Lonen lage lonen én presentaties",
        "teacher": "HAR",
        "color": "#ffe4ab"
      }
    ];
    
    obj.forEach(function(x) {
      var entry = "<div class='project-box-wrapper'> <div class='project-box' style='background-color: " + x.color + ";'> <div class='project-box-header'> <span>" + x.deadline + "</span> <div class='more-wrapper'> <button class='project-btn-more'> <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-more-vertical'> <circle cx='12' cy='12' r='1' /> <circle cx='12' cy='5' r='1' /> <circle cx='12' cy='19' r='1' /></svg> </button> </div> </div> <div class='project-box-content-header'> <p class='box-content-header'>" + x.title +"</p> <p class='box-content-subheader'>" + x.lessonname +"</p> </div> <div class='project-box-footer'> <div class='participants'> <img src='https://www.skyward.com/NewSkywardSite/media/Library/Images/Background_Images/Blogs/Educator/2019/September/Google-Classroom.png' alt='source'> </div> <div class='days-left' style='color: #4067f9;'>" + x.teacher + "</div> </div> </div> </div>";
      document.getElementById("pbox").innerHTML += entry;
    });
}