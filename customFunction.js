var liffID = '2000189044-QBdJqpnr';

async function main() {
    await liff.init({
        liffId: liffID
    }).then(function () {
        console.log('LIFF init');

        // 這邊開始寫使用其他功能
        // liff.sendMessages([{
        //     type: 'text',
        //     text: 'Hello world'
        // }])

        const btnMessage = document.getElementById('sendButton');
        btnMessage.addEventListener('click', () => {
            
            if(document.querySelector("#account").value == ""){
                alert("未輸入Wotel帳號!!!")
                return;
            }

            let message = "Wotel周年慶活動參與:" + document.querySelector("#account").value;
                
            console.log(message)
            liff.sendMessages([
                {
                    type: 'text',
                    text: message
                }

            ]).then(res => liff.closeWindow())
                .catch(error => console.log(error));
        });

    }).catch(function (error) {
        console.log(error);
    });

}

main();


function openCheckWindow(){
    document.querySelector("#checkWindow").classList.toggle("active");
}