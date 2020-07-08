var siteName = document.getElementById("SiteName");
var siteURL  = document.getElementById("SiteUrl");
var saveBtn  = document.getElementById("submit_btn");
var addSite  = document.getElementById("addSite");

var submit_btn = document.getElementById("submit_btn");

var wrong_first_input= document.getElementById("wrong_first_input");
var wrong_second_input = document.getElementById("wrong_second_input");


var results =[] ;

var toggle1 =false ;
var toggle2 =false ;

let btnToggle = false;

saveBtn.onclick = function(){

    if(btnToggle === false){
        add();
    }else{
        saveUpdate();
        clearForm();
    }
}


function clearForm(){
    siteName.value = '';
    siteURL.value = '';
}

function checkValid(){

    var name =siteName.value ;
    var url =siteURL.value ;

    checkName(name);
    checkUrl(url);


    if (toggle1===false && toggle2 ===false){

        add();
        wrong_first_input.style.display = 'none' ;
        wrong_second_input.style.display = 'none' ;


    }

    else if (toggle1===true && toggle2 ===false){

        var x = `  <div class="container error">
                      <p>Site Name is required</p>
                   </div>` ;

        wrong_second_input.style.display = 'none'
        wrong_first_input.style.display = 'block' ;
        wrong_first_input.innerHTML=x;

    }

    else if (toggle1===false && toggle2 ===true){

        var x = `  <div class="container error">
                      <p>Site URL is required</p>
                   </div>` ;
        
        wrong_first_input.style.display = 'none' ;
        wrong_second_input.style.display = 'block' ;

        wrong_second_input.innerHTML=x;

    }

    else if (toggle1===true && toggle2 ===true){

        var x = `  <div class="container error">
                      <p>Site Name is required</p>
                   </div>` ;

        var y = `  <div class="container error">
                      <p>Site URL is required</p>
                   </div>` ;

        wrong_first_input.style.display = 'block' ;
        wrong_second_input.style.display = 'block' ;
            
        wrong_first_input.innerHTML=x;
        wrong_second_input.innerHTML=y;


    }


}


function add(){

    var item = {
        siteName : siteName.value ,
        siteURL : siteURL.value 
    }

    results.push(item);
    console.log(results);
    show();

}


var name =siteName.value ;
var url =siteURL.value ;


function checkName(name){

    if ( name==null || name == "" ){
        
        toggle1 =true ;
        
    }
    else {
        
        toggle1 =false ;

    }

}


function checkUrl(url){

    if ( url==null || url == "" ){
        
        toggle2 =true ;
        
    }
    else {
        
        toggle2 =false ;

    }


}


function show(){

    var col ='';
    for( var i = 0 ; i < results.length ; i++){

        col += ` <div class="row py-4">
                    <div class="col-md-6">
                            <h4 > ` + results[i].siteName + ` </h4>
                    </div>

                    <div class="col-md-6  ">
                            <button class ="btn btn-info "  id="visit"  >  <a onclick="window.open(' https://`+results[i].siteURL+`  ', '_blank')"   target="_blank" class='list-unstyled text-white'> Visit </a>    </button>
                            <button class ="btn btn-danger " onclick=delet(`+i+`) type="submit" id="Delete" target="_blank"> Delete </button>
                            <button class ="btn btn-warning " onclick=update(`+i+`) type="submit" id="update" target="_blank"> Update </button>

                    </div> 
                </div>  `

    }

    addSite.innerHTML=col ;
}

function delet(index){
    results.splice(index,1);
    show();
}


var currentIndex ;


function update(index){
    
    btnToggle=true;
    currentIndex = index ;
    siteName.value = results[index].siteName ;
    siteURL.value = results[index].siteURL ;
    submit_btn.innerHTML='update' ;
    
}


function saveUpdate(){
    results[currentIndex].siteName=siteName.value ;
    results[currentIndex].siteURL=siteURL.value ;


     show();
     btnToggle=false ;
     submit_btn.innerHTML='add' ;

     

}










