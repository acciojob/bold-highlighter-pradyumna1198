const  para = document.querySelector('p');
const bTags = para.querySelectorAll('strong');
function highlight() {
    //Write your code here


	for(let i=0;i<btags.length;i++){
		btags[i].style.color='green';
	}
	}

}


function return_normal() {
    //Write your code here
	

  // Change the color of bold words back to black
  for (let i = 0; i < bTags.length; i++) {
    bTags[i].style.color = 'black';
    
}
