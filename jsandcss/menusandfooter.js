  document.getElementById('headercontent').innerHTML = 
  `

  <img src="../images/head.jpg" alt="SUT-civil" style="position: absolute;bottom: 0%;width: 100%;position: fixed;z-index: -3;" id="backwebimage">
  
  <div  
  id="blurerfoot">
  </div>
  
  <div style="color: white;">
    <div id="menupage" style="position: absolute;right: 0%;width: 74%;
    height: 100%;background:linear-gradient(to bottom ,rgb(82, 82, 238), rgb(11, 11, 99)); z-index: 4;display: none;
    position: fixed;font-size: 25px;" class="menulittle">
    <div style="display: flex;align-items: center;justify-content: center;align-content: center;">
      <h1 style="text-align: center;">
        Dr. Mirmosadegh jamali
      </h1>
  
    </div>
  <div onclick="openspcmenu(1)" onmousemove="openspcmenu(1)">
    About
    <div class="aboutmenue1 ; aboutmenuall" style="display: none;">
      <a href="../index.html" style=" display: block;width: 100%;height: 100%;"> Professor Jamali</a>
    </div>
    
  </div>
  
  <div onclick="openspcmenu(2)" onmousemove="openspcmenu(2)">
    publication
    <a href="../index.html#InternationalJournalPapers" style=" display: block;width: 100%;height: 100%;">
    <div class="aboutmenue2 ; aboutmenuall" style="display: none;">
      International Journal Papers
    </div></a>
    <a href="../publication/research.html" style=" display: block;width: 100%;height: 100%;"> 
    <div class="aboutmenue2 ; aboutmenuall" style="display: none;">
      Research
    </div></a>
    <a href="../index.html#SelectedInternationalConferencePapers" style=" display: block;width: 100%;height: 100%;"> 
      <div class="aboutmenue2 ; aboutmenuall" style="display: none;">
        Conference papers
      </div></a>
    
  </div>
  <div onclick="openspcmenu(3)" onmousemove="openspcmenu(3)">
    people
    <a href="../index.html#GraduateStudents" style=" display: block;width: 100%;height: 100%;">
    <div class="aboutmenue3 ; aboutmenuall" style="display: none;">
      Graduate Students
    </div></a>
   
    
  </div>
  <div onclick="openspcmenu(4)" onmousemove="openspcmenu(4)">
    Courses
    <a href="../courses/fluidmechanic.html" style=" display: block;width: 100%;height: 100%;">
    <div class="aboutmenue4 ; aboutmenuall" style="display: none;">
       Fluid Mechanics
    </div></a>
    <a href="../courses/hydrulics.html" style=" display: block;width: 100%;height: 100%;">
    <div class="aboutmenue4 ; aboutmenuall" style="display: none;">
       Hydraulics
    </div></a>
    <a href="../courses/Environmentaleng.html" style=" display: block;width: 100%;height: 100%;">
    <div class="aboutmenue4 ; aboutmenuall" style="display: none;">
      Environmental Hydraulics
    </div></a>
    <a href="../courses/creativityeng.html" style=" display: block;width: 100%;height: 100%;">
    <div class="aboutmenue4 ; aboutmenuall" style="display: none;">
       Creativity and Innovation in Engineering
    </div></a>
  
  </div>
  
 
    </div>
  </div>
  
  
    <div style="position: absolute;right: 0%;width: 100%;height:100%; 
    background-color: rgba(5, 4, 4, 0.523); z-index: 3; position: fixed;display: none;"
    onclick="closemenue()" class="menulittle">
  
  
    </div>
  
    <header >
 
<div id="adfhidhcjnjxjxz">
</div>      
  
  <!--     
        <div style=" display: inline;direction: ltr;display: flexbox; text-align: left;
        margin: 10px 10px 4px 10px ;">
      -->
        <div style="display: flexbox; ">
      <img src="../images/OIP.png" alt="sharif" style="width: auto;cursor:pointer;display: inline-block; position: fixed;z-index: 1;
      padding-left: 5px; padding-top: 10px;" 
      id="toplogo">
      
 
      
      <div style="text-align: right;">
        <a href="../index.html" style="color: black;">
        <h2 id="corpname" style="padding: 20px;background: linear-gradient(to left,rgb(41, 124, 240),rgb(38, 228, 180)); color: aliceblue;
        font-size: 38px;font-family: boldedde;">
            Sharif University of Technology
            
          </h2>
     
        </a>
     
        
      </div>

 
  
    <div class="overnav" style="padding:10px;direction: rtl;padding-right:5px;background: linear-gradient(to left,rgb(41, 124, 240),rgb(38, 228, 180));color: aliceblue;
    font-size: 30px;padding-right:20px ;padding-bottom:14px ;">
      Department of Civil Engineering
  
  </div>
  <div class="overnav">
    
  </div>
  
  
  
     
  </div>  
            
  
  
  <script type="text/javascript"> 

var offsets = document.querySelector("body").getBoundingClientRect();
    var userview = offsets.top;
    var pageweidth =offsets.width;


if (pageweidth<700) {

  
document.getElementById('corpname').textContent="Sharif University";
document.getElementsByClassName('overnav')[0].textContent="Civil Engineering";

}

  </script>
  
  
    
  
   <script type="text/javascript">
  
    function down(){


      

        let m=document.getElementsByClassName('navbut');

        for (let index = 0; index < m.length; index++) {
        m[index][0].selected='true';
        
    }




    
  
  
  if(userview > -130  & pageweidth>560 &  document.getElementsByClassName('overnav')[0].style.display=="block"  ){
  
  let a=130+userview*0.4;
  document.getElementById('toplogo').style.height =a+'px';
  
  
  }else{ 
    document.getElementById('toplogo').style.height =80+'px';
  }




    }

    </script>
  
  <div  class="navcontainer" style="background-color: white;">
   
  
  
  <div style="height: 90px;background: rgb(255, 255, 255);width: 100%; "  class="navcontainer" id="mainnavcontiner">
    
  
  <div style="background-color: rgb(255, 255, 255);direction: rtl;" id="minimenue">
    <img style="cursor: pointer;" onclick="openmenue()" width="48" height="48" src="https://img.icons8.com/color/48/menu--v1.png" alt="menu--v1"/>
  </div>
  
   <nav id="navigation">
    

  <div  style="height: 75px;padding-top:0px;padding-bottom:0px;width: 0px;" id="removeonphone">
     
    
  </div>


   
    <!-- Navigation button -->
    <button class="nav-button" style="z-index:71;">
      Courses
      <!-- Dropdown menu -->
      <div class="dropdown-menu" style="z-index: 171;">
        <a href="../courses/fluidmechanic.html" style="z-index: 71;"> Fluid Mechanics</a>
        <a href="../courses/hydrulics.html" style="z-index: 71;"> Hydraulics</a>
        <a href="../courses/Environmentaleng.html" style="z-index: 71;"> Environmental Hydrodynamics </a>
        <a href="../courses/creativityeng.html" style="z-index: 71;"> Creativity and Innovation in Engineering</a>
      </div>
    </button>



<button class="nav-button" style="z-index:71;">
    <a href="../index.html#GraduateStudents" style="color: unset; padding:20px 20px;display: inline-block;">  Graduate Students </a>
    </button>
    


 <button class="nav-button" style="z-index:71;">
      publication
      <!-- Dropdown menu -->
      <div class="dropdown-menu" style="z-index: 171;">
        <a href="../index.html#InternationalJournalPapers" style="z-index: 71;"> International Journal Papers </a>
        <a href="../index.html#SelectedInternationalConferencePapers" style="z-index: 71;"> Conference Papers</a>
        <a href="../publication/research.html" style="z-index: 71;"> Research And Studies </a>
      </div>
    </button>

 
  
   
  
  
  
  
  </nav>
  
  
     
  <div id="navborder"
  style="height: 5px;background:linear-gradient(to right ,rgba(20, 205, 97, 0.963),rgba(43, 94, 205, 0.985));z-index: 1;width: 100%;">
  
  </div>
     
  </div>
  
  
   
  
  
  </header>
  
  
   
    ` 

    function openmenue(){

      document.getElementsByClassName('menulittle')[0].style.display="block";
      document.getElementsByClassName('menulittle')[1].style.display="block";
      
      
      }
      
      function closemenue(){
          
          document.getElementsByClassName('menulittle')[0].style.display="none";
          document.getElementsByClassName('menulittle')[1].style.display="none";
      
      }
      
      
      
      function openspcmenu(ai){
      
          let array2= document.getElementsByClassName('aboutmenuall');
      
          for (let index = 0; index < array2.length; index++) {
              array2[index].style.display="none";
              
          }
          
      
      let array= document.getElementsByClassName('aboutmenue'+ai);
      
      for (let index = 0; index < array.length; index++) {
           array[index].style.display="block";
          
      }
      
      
      }
      
      
  
  
  function down(){    

      let m=document.getElementsByClassName('navbut');

      for (let index = 0; index < m.length; index++) {
      m[index][0].selected='true';
      
  }



var offsets = document.getElementById('navigation').getBoundingClientRect();
    var top = offsets.top;
    var offsets = document.querySelector("body").getBoundingClientRect();
    var userview = offsets.top;
    var pageweidth =offsets.width;

    if(top < 3 & pageweidth>560){
      
      document.getElementById('corpname').style.display="none";
      document.getElementsByClassName('overnav')[0].style.display="none";
      document.getElementsByClassName('overnav')[1].style.display="none";
      document.getElementById('mainnavcontiner').style.position="fixed";
      

    }
    if(userview > -10  & pageweidth>560){
  
   document.getElementById('corpname').style.display="block";
   document.getElementsByClassName('overnav')[0].style.display="block";
   document.getElementsByClassName('overnav')[1].style.display="block";
  
  document.getElementById('navigation').style.position="relative";
  document.getElementById('mainnavcontiner').style.position="relative";  
  document.getElementById('navborder').style.zIndex="42";
  
  }

if(userview > -130  & pageweidth>560 &  document.getElementsByClassName('overnav')[0].style.display=="block"  ){
  
  let a=130+userview*0.54;
  document.getElementById('toplogo').style.height =a+'px';
  
  
  }else{ 
    document.getElementById('toplogo').style.height =75+'px';
  }

    }
  

  

