let text = document.querySelector('input')
let generate = document.querySelector('#generate');
let download = document.querySelector('#download')
let img = document.querySelector('img')



generate.addEventListener('click', () =>{

    let qrUrl = `http://api.qrserver.com/v1/create-qr-code/?data=${text.value}&size=100x100`

    let decodeText = text.value
    if(text.value == ''){
        alert('Input Required')
        img.src = ''
    }else{
     generate.textContent = 'Generating QR-Code...'
     img.setAttribute('src', qrUrl)
     console.log(img)
     
     img.addEventListener('load', () => {
        generate.textContent = 'Generate'
        text.value = ''
     })
     download.addEventListener('click', () => {
        
         download.setAttribute('download', qrUrl)
        download.href = qrUrl
        document.body.appendChild(download);
                download.click();
        console.log(download)
     })
    }  
})

