function showHint(str) {
    if (str.length == 0) { 
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "../hw8/gethint.php?q=" + str, true);
        xmlhttp.send();
    }
};

function getTime()
  {
  var xmlHttp;
  try
    {
    // Firefox, Opera 8.0+, Safari
    xmlHttp=new XMLHttpRequest();
    }
  catch (e)
    {
    // Internet Explorer
    try
      {
      xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
      }
    catch (e)
      {
      try
        {
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
      catch (e)
        {
        alert("Your browser does not support AJAX!");
        return false;
        }
      }
    }
    xmlHttp.onreadystatechange=function()
      {
      if(xmlHttp.readyState==4)
        {
        document.myForm.outTime.value=xmlHttp.responseText;
        }
      }
    xmlHttp.open("GET","../../php/gettime.php",true);
    xmlHttp.send(null);
  };

function getDate1()
  {
  var xmlHttp;
  try
    {
    // Firefox, Opera 8.0+, Safari
    xmlHttp=new XMLHttpRequest();
    }
  catch (e)
    {
    // Internet Explorer
    try
      {
      xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
      }
    catch (e)
      {
      try
        {
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
      catch (e)
        {
        alert("Your browser does not support AJAX!");
        return false;
        }
      }
    }
    xmlHttp.onreadystatechange=function()
      {
      if(xmlHttp.readyState==4)
        {
        document.myForm.outDate1.value=xmlHttp.responseText;
        }
      }
    xmlHttp.open("GET","../../php/getdate1.php",true);
    xmlHttp.send(null);
};

function getDate2()
  {
  var xmlHttp;
  try
    {
    // Firefox, Opera 8.0+, Safari
    xmlHttp=new XMLHttpRequest();
    }
  catch (e)
    {
    // Internet Explorer
    try
      {
      xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
      }
    catch (e)
      {
      try
        {
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
      catch (e)
        {
        alert("Your browser does not support AJAX!");
        return false;
        }
      }
    }
    xmlHttp.onreadystatechange=function()
      {
      if(xmlHttp.readyState==4)
        {
        document.myForm.outDate2.value=xmlHttp.responseText;
        }
      }
    xmlHttp.open("GET","../../php/getdate2.php",true);
    xmlHttp.send(null);
  };

function getInfo() {
  getTime();
  getDate1();
  getDate2();
};

function getVote(int) {
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("poll").innerHTML=this.responseText;
    }
  }
  xmlhttp.open("GET","../../php/getvote.php?vote="+int,true);
  xmlhttp.send();
};

$( function() {
  $( "#datepicker" ).datepicker();
} );

function getState(stateCode) {
  var stcode = stateCode.toUpperCase();
  $.get("../../php/getstate.php", {"stcode": stcode}, function (result) {
      var stateInfo = result.split(', ');
      document.stateForm.stateName.value = stateInfo[0];
      document.stateForm.stateCapital.value = stateInfo[1];
      document.stateForm.statePop.value = stateInfo[2];
  });
};   