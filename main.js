const userRegistration = document.querySelector('.form-click>a');
const todoInput = document.querySelector('.todo-list-box input');
const Ullist = document.querySelector('.todo-list-lists');

let localArr = [];
// let newarr = [];
// //전체로직
// //session storage key값 가져오기
// //session storage key값 배열로 변환 후, pop하여 value값 목록 순서대로 출력.
// let firstParse;
// let SecondParse;

// firstParse = JSON.parse(sessionStorage.getItem('key'));
// console.log('first parsing', firstParse);

// for (let elem of firstParse) {
//     SecondParse = JSON.parse(elem);
//     console.log(SecondParse);


//         let ID = elem.id;
//         let eachList = document.createElement('li');
//         let removeIcon = document.createElement('img');
//         let inputText;


//         eachList.setAttribute('class', 'false');
//         eachList.setAttribute('id', ID);
//         removeIcon.setAttribute('id', ID);

//         //중첩 이벤트 리스너
//         eachList.addEventListener('click', function () {
//             let node = document.getElementById(ID);

//             if (node.getAttribute('class') === 'false') {
//                 node.style.textDecoration = 'line-through';
//                 node.setAttribute('class', 'true');

//             } else {
//                 node.style.textDecoration = 'none';
//                 node.setAttribute('class', 'false');
//             }
//         })
//         removeIcon.addEventListener('click',
//             function () {
//                 let node = document.getElementById(ID);
//                 sessionStorage.removeItem(ID);///////////////////////////////// session storage안에 있는 해당 ID를 지우는 법. 
//                 node.remove();
//             }

//         )


//         inputText = document.createTextNode(SecondParse.value);
//         eachList.appendChild(inputText);
//         eachList.appendChild(removeIcon);

//         Ullist.insertBefore(eachList, Ullist.firstChild);

//         removeIcon.style.width = '10px';
//         removeIcon.style.height = '10px';

//         removeIcon.setAttribute('src', 'img/red_x.png');
//         eachList.style.cursor = 'pointer';
//         eachList.style.padding = '3px';
//         eachList.style.border = '1px solid black';
//         eachList.style.borderRadius = '5px';
//         eachList.style.backgroundColor = '#FFF700';
//         eachList.style.marginBottom = '3px';
// }






//이벤트리스너
todoInput.addEventListener('keypress',
    function (e) {
        if (e.key !== 'Enter') return;

        let randomId = Math.random();
        let eachList = document.createElement('li');
        let removeIcon = document.createElement('img');
        let inputText;


        eachList.setAttribute('class', 'false');
        eachList.setAttribute('id', randomId);
        removeIcon.setAttribute('id', randomId);

        //중첩 이벤트 리스너
        eachList.addEventListener('click', function () {
            let node = document.getElementById(randomId);

            if (node.getAttribute('class') === 'false') {
                node.style.textDecoration = 'line-through';
                node.setAttribute('class', 'true');

            } else {
                node.style.textDecoration = 'none';
                node.setAttribute('class', 'false');
            }
        })
        removeIcon.addEventListener('click',
            function () {
                let node = document.getElementById(randomId);
                sessionStorage.removeItem(randomId);
                node.remove();
            }

        )


        inputText = document.createTextNode(e.target.value);
        eachList.appendChild(inputText);
        eachList.appendChild(removeIcon);

        Ullist.insertBefore(eachList, Ullist.firstChild);

        removeIcon.style.width = '10px';
        removeIcon.style.height = '10px';

        removeIcon.setAttribute('src', 'img/red_x.png');
        eachList.style.cursor = 'pointer';
        eachList.style.padding = '3px';
        eachList.style.border = '1px solid black';
        eachList.style.borderRadius = '5px';
        eachList.style.backgroundColor = '#FFF700';
        eachList.style.marginBottom = '3px';
        e.target.value = '';

        localArr.push(JSON.stringify({ id: randomId, value: inputText.textContent }));
        localStorage.setItem('id', JSON.stringify(localArr));

    }



)

// 로컬스토리지에 있는 'key'값 파싱해서 다시 객체 배열로 받아오기.
let newarr = JSON.parse(localStorage.getItem('id'));
console.log(newarr);
let newobj = [];
for (let elem of newarr) {
    newobj.push(JSON.parse(elem));

}
console.log(newobj);


//새로고침 후 다시 ul안의 li들 그리기.
for (let element of newobj) {
    let originalID = element.id;
    let eachList = document.createElement('li');
    let removeIcon = document.createElement('img');
    let inputText;


    eachList.setAttribute('class', 'false');
    eachList.setAttribute('id', originalID);
    removeIcon.setAttribute('id', originalID);

    //중첩 이벤트 리스너
    eachList.addEventListener('click', function () {
        let node = document.getElementById(originalID);

        if (node.getAttribute('class') === 'false') {
            node.style.textDecoration = 'line-through';
            node.setAttribute('class', 'true');

        } else {
            node.style.textDecoration = 'none';
            node.setAttribute('class', 'false');
        }
    })
    removeIcon.addEventListener('click',
        function (event) {

            let newarr7 = newobj.filter((e) => e.id != event.target.id);
            //stringify한 객체들을 넣을 배열
            let newnewarr = [];
            for (let elem of newarr7) {
                newnewarr.push(JSON.stringify(elem));
            }
            JSON.stringify(newnewarr);
            localStorage.setItem('id', JSON.stringify(newnewarr));

            //    x를 누르고 localstorage안에 있는 key 값, 즉 배열 객체의 일부 수정 후 업데이트를 어떻게 하는가?
            let node = document.getElementById(event.target.id);
            node.remove();
            // typeof 문제였다. console.log를 통한 확인 작업. 
            // console.log(newobj[0].id);
            // console.log(typeof(newobj[0].id));
            // console.log(event.target.id);
            // console.log(typeof(event.target.id));
            

       



            // let newarr2 = newobj.filter((e)=> e.id!==event.target.id)

            //파싱된 객체 배열에서, originalID값을 뺀 배열을 JSON에 수정.


        }

    )


    inputText = document.createTextNode(element.value);
    eachList.appendChild(inputText);
    eachList.appendChild(removeIcon);

    Ullist.insertBefore(eachList, Ullist.firstChild);

    removeIcon.style.width = '10px';
    removeIcon.style.height = '10px';

    removeIcon.setAttribute('src', 'img/red_x.png');
    eachList.style.cursor = 'pointer';
    eachList.style.padding = '3px';
    eachList.style.border = '1px solid black';
    eachList.style.borderRadius = '5px';
    eachList.style.backgroundColor = '#FFF700';
    eachList.style.marginBottom = '3px';
}





