// 非同期処理（Promise）
let a = 0;

async function init(){
    try{
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                a = 1;
                reject(a)
            }, 2000);
        })
            console.log(a);
    } catch(e) {
        console.log("catch execute")
    }
    // }).catch((c) => {
    //     console.log('catchが実行', c)
    // })
}
init();

