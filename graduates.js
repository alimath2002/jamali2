let graduateNames=["Shadi Shaaban","Ali Hassan-zadeh","Zeinab Sabouri","Iman Tabatabaee","Roozbeh Kassaiian",
    "Baharaeh Kordi","Mona Rahmani","Payam Aghsaee","Majid Deiri","Maryam Akhavan","Navid Tahvildari","Hamed Haddadzadegan"
,"Suzan Sharifan","Alireza Sheikh","Ali Asghar Marjani","Payam Zekavat","Sommayeh Ghazvini","Rozita Kian","Samaneh Marvi","Farrokh Shoaee"
,"Nayyer Sadeghi","Reza Ghasemizadeh","Hoda Davari","Andisheh Davari","Sima Behzadi","Ali Tohidi","Meysam Fazeli","Elham Sharifi",
"Soheil Nozari","Ammar Safaie","Mohammad Ali Olyaie","Mohammad Ali Tofighi","Ahmad Taheri","Amir Heshmati-Far","Maryam Delbekhah"
,"Fatereh Mousazadeh","Reza Sahebi","Samira Soltani","Mehrdad Jaafarzadeh","Azadeh Mousavi","Arefeh Ghazi-Nezami"];
let gradgender=['f','m','f','m','m','f','f','m','m','f','m','m','f',
    'm','m','m','f','f','f','m','m','m','f','f','f','m','m','f','m','m','m','m','m','m','f','f','m','f','m','f','f'];
let gradyear=["2000","2002","2003","2003","2003","2004","2004","2004","2005","2006","2007","2007","2007","2007","2007",
    "2008","2008","2008","2008","2009","2009","2009","2010","2010","2011","2011","2011","2011",
    "2012","2013","2013","2013","2014","2015","2015","2014","2014","2014",
    "2017","2017","2019","2019"];
    
let thesis=["Effects of bottom topography on selective withdrawal in reservoirs",
    "Scour at toe of vertical breakwaters due to breaking waves"
    ,"unsteady exchange flow with frictional effects",
    "Non-linear effects in selective withdrawal in a reservoir with bottom topography"
    ,"Experimental study of effects of bottom topography on selective withdrawal",
    "Study of effects of lateral contraction on selective withdrawal of a two-layer fluid through a line sink"
    ,"Numerical simulation of excitation of internal waves by surface waves in dam reservoirs",
    "Effects of lateral contraction on selective withdrawal of a stratified fluid through a line sink",
    "Experimental study of flow in stratified reservoirs with irregular geometry",
    "Effects of high sills on flow of stratified flows",
    "Analytical solution of two-dimensional nonlinear interaction of surface and interfacial waves"
    ,"Selective withdrawal through a point sink in a linearly stratified reservoir with topographic effects"
    ,"Selective withdrawal of a two-layer fluid through a point sink with topographic effects",
    "Flood routing using finite volume method and GIS",
    "Three-dimensional modeling of salinity and flow in Urmia lake",
    "Gravity currents in inhomogeneous vegetated areas of lakes"
    ,"Experimental study of vertical variation of vegetation density on vertical mixing"
    ,"Theoretical and experimental study of selective withdrawal of a two-layer fluid over bed topography",
    "Theoretical and experimental study of exchange flow between open water and canopy"
    ,"Experimental study of transverse dispersion in canopies","Nonlinear interaction of a surface wave with harmonic interfacial waves"
    ,"Exchange flow caused by temperature gradient between open water and vegetated area"
    ,"Transverse dispersion in inclined canopy"
    ,"Exchange flow in canopies due to inhomogeneous sun heating and wind"
    ,"Theoretical study of the effects of a diffuse layer on nonlinear interaction of a surface wave with interfacial waves"
    ,"Wind-induced currents in canopies"
    ,"","","","","","","","","","","","","","","","","","","","","","",
    "","","","","","","","","","","","","","","","","","","","","","","","","","","",
    "","","","","","","","","","","","","","","","","","","","","","","","","",
    "","","","","","","","","","","","","","","","","","","",""];

let othernotes=[,"","","","","","","","","","",
    "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
    "","","","","","","","","","","","","","","","","","","","","","","","","","","",
    "","","","","","","","","","","","","","","","","","","","","","","","","",
    "","","","","","","","","","","","","","","","","","","",""];




  
    let a='';
    let b='';
for (let index = 0; index < graduateNames.length; index++) {
   
   
    
a='';

    a=a+'<div>'+graduateNames[index]+'</div>'; 
    a=a+'<div>'+gradyear[index]+'</div>'; 
    a=a+'<div>'+thesis[index]+'</div>'; 
    b=b+'<div>'+a+'</div>'; 

document.getElementById('graduates').innerHTML=b;


}


    
