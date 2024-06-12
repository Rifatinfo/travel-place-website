
const allBtn = document.getElementsByClassName('add-btn');
let count = 0;
for(const btn of allBtn){
    btn.addEventListener('click', function(e) {
       count = count + 1;
      const placeName = e.target.parentNode.parentNode.childNodes[1].innerText;
      const price = e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText
      
      const selectedContainer = document.getElementById('selected-place-container');

    

      const p = document.createElement('p');
      p.innerText = placeName ; 
      const p2 = document.createElement('p');
      p2.innerText = price ;

     e.target.parentNode.parentNode.parentNode.style.backgroundColor = 'gray';
     e.target.setAttribute('disabled', true)


     const budget = document.getElementById('budget').innerText;
     const convertedBudget = parseInt(budget);

     if(convertedBudget - parseInt(price) <0){
      return  alert('low budget earn more');

     }

     document.getElementById('budget').innerText = convertedBudget - parseInt(price);

      selectedContainer.appendChild(p);
      selectedContainer.appendChild(p2);

     

    
    //   get by total cost 
   
    
    addTotalCost ('total-cost',parseInt(price) ) ;
    
 
    //   get by grand total 

    addGrandTotal();




       setInnerText('card-count', count);
    })
}

function addTotalCost (id, value){
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);

    const sum = convertedTotalCost + value;
    document.getElementById(id).innerText = sum;

    setInnerText(id,sum);
}

function addGrandTotal(category){

    const totalCost = document.getElementById('total-cost').innerText;
    const convertedTotalCost = parseInt(totalCost);
    if(category == 'bus'){
        setInnerText('grand-total',convertedTotalCost + 100);
    }
    else if(category == 'train'){
        setInnerText('grand-total',convertedTotalCost - 200);
    }
    else if(category == 'flight'){
        setInnerText('grand-total',convertedTotalCost + 500);
    }
    else{
        setInnerText('grand-total',convertedTotalCost);
    }


   

    // setInnerText('grand-total',convertedTotalCost);
}


function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}