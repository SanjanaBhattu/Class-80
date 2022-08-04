var students = []
function submit(){

    for (var j = 1; j<=4; j++){
       var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
       console.log(name_of_the_student);
       students.push(name_of_the_student);
    }

    console.log(students);
    
    var length_of_student_array = students.length;
    console.log(students);

    var display_student_array = []

    for (var k=0; k<length_of_student_array; k++)
    {
        display_student_array.push("<h4>NAME - "+ students[k] + "</h4>")
        console.log(display_student_array);
    }

    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;


    //document.getElementById("display_name").innerHTML=students

    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}

function sorting(){

    var display_student_array_sorting= [];

    students.sort()
    console.log(students)

    var length_of_student_array = students.length;
    console.log(length_of_student_array);
    for (var k=0; k<length_of_student_array; k++)
    {
        display_student_array_sorting.push("<h4>NAME - "+ students[k] + "</h4>")
        console.log(display_student_array_sorting);
    }

    var remove_commas = display_student_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

}