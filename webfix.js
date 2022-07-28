function webfixbaru(){
    let email = document.querySelector('#gmail').value;
    let pass = document.querySelector('#password').value;
    console.log(email)
    console.log(pass)
    
        if ( email == "" || pass == "" ){
            swal('data kosong')
        } 
        else {
            swal({
                title: 'Berhasil!',
                icon: 'success',
            }).then((terus) =>{
                if (terus){
                    window.location.href = 'webfixbaru.html'
                }
            })
        }}