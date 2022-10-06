
function validFormFieldInput(data) {
    const taskdate = document.querySelector('#taskdate');
    const date = taskdate.value;
    console.log("date: " + date)

    const taskdesc = document.querySelector('#taskdesc');
    const desc = taskdesc.value;
    console.log("desc: " + desc)

    const taskname = document.querySelector('#taskname');
    const name = taskname.value;
    console.log("name: " + name)

    const taskassign = document.querySelector('#taskassign');
    const assign = taskassign.value;
    console.log("assign: " + assign)

    const radioButtons = document.querySelectorAll('input[name="prior"]');
    let selectedprior;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedprior = radioButton.value;
            break;
        }
    }
}




