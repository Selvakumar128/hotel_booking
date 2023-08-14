    const form=document.getElementById("form");
    let formValue=[];

    form.addEventListener('submit',event=>{
    event.preventDefault();
    

      const fname = document.getElementById("fname").value;
      const lname = document.getElementById("lname").value;
      const country = document.getElementById("country").value;
      const subject = document.getElementById("subject").value;
     
      const value={
        fname:fname,
        lname:lname,
        country:country,
        subject:subject
      }

      if(formValue.some((data=>data.fname===fname)||(data=>data.lname===lname))){
          alert('Enter a valid value');
          return;
      } 
      formValue.push(value)
      const updatedValue=JSON.stringify(formValue);
      localStorage.setItem('formValue',updatedValue);
       
      const fValue=JSON.parse(localStorage.getItem("formValue"));

      console.log(fValue);
      
      const cardsContainer=document.getElementById("cardContainer");
    
      fValue.map(values=>{
        const card=document.createElement('div');
        card.classList.add("card");
        card.innerHTML=`<h2>${values.fname}${values.lname}</h2><p>${values.country}</p><p>${values.subject}</p>`
        cardsContainer.appendChild(card)
    })

      
                
});

  const toggle_btn=document.querySelector('.toggle_btn')
  const toggle_btn1=document.querySelector('.toggle_btn i')
  const dropDown =document.querySelector('.drop_down')
  toggle_btn.onclick=function(){
      dropDown.classList.toggle('open')
      const isOpen=dropDown.classList.contains("open")
      toggle_btn1.classList=isOpen
      ?'fa-solid fa-xmark':'fa-solid fa-bars'
    }