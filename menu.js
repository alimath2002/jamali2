
function openmenue(){

document.getElementsByClassName('menulittle')[0].style.display="block";
document.getElementsByClassName('menulittle')[1].style.display="block";


}

function closemenue(){
    
    document.getElementsByClassName('menulittle')[0].style.display="none";
    document.getElementsByClassName('menulittle')[1].style.display="none";

}

document.getElementById('adfhidhcjnjxjxz').innerHTML=`
<div style="background-color: rgb(50, 38, 61); text-align: center;color: rgb(151, 71, 71) ;display: flex;bottom: 0%;position: fixed;width: 100%; justify-content: center;" >
        <p> © Copy Right Civil Engineering Department <a  href="https://alimath2002.github.io/alimath2002/" style="text-decoration:none; color: white;"> Ali M. Sepehr</a> 2025</p>
    </div>`;

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



