    const dataform=document.getElementById('dataform');
    let reservationValue=[];

    dataform.addEventListener('submit',event=>  {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const number = document.getElementById("number").value;
        const email = document.getElementById("email").value;
        const fromDate = document.getElementById("fromDate").value;
        const toDate = document.getElementById("toDate").value;
        const roomType = document.getElementById("roomType").value;
        const requirements = document.getElementById("requirements").value;
        const adult = document.getElementById("adult").value;
        const children = document.getElementById("children").value;
        const splReq = document.getElementById("splReq").value;
           
        const value={
            name:name,
            number:number,
            email:email,
            fromDate:fromDate,
            toDate:toDate,
            roomType:roomType,
            requirements:requirements,
            adult:adult,
            children:children, 
            splReq:splReq,
        }

            // const oldValue=localStorage.getItem('formData') 
            
        if ((Date.parse(fromDate) >= Date.parse(toDate))) {
            alert("To Date should be greater than From date");
            return;
        }

        if(reservationValue.some((data=>data.name===name)&&(data=>data.email===email))){
            alert('The value already exists.... Please enter a valid value');
            return;
        }else{
            reservationValue.push(value);
            console.log(reservationValue);
        }
            // const updatedValue=JSON.stringify(reservationValue);
            // localStorage.setItem('reservationValue',updatedValue)
            // const arrValue=localStorage.getItem('reservationValue');

        const sortValues=reservationValue.sort((a, b) => {
            let da = new Date(a.fromDate),
            db = new Date(b.fromDate);
            return da - db;
        });
        console.log(sortValues);


        var tableData=reservationValue.map(datas=>(
        `
        <tr>
            <td>${datas.name}</td>
            <td>${datas.email}</td>
            <td>${datas.number}</td>
            <td>${datas.fromDate}</td>
            <td>${datas.toDate}</td>
            <td>${datas.roomType}</td>
            <td>${datas.requirements}</td>
            <td>${datas.adult}</td>
            <td>${datas.children}</td>
            <td>${datas.splReq}</td>
            </tr>
        `
        )).join('');
        
        var tbody=document.querySelector('#body');
        tbody.innerHTML=tableData;

    });
