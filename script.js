//event listner for the button
document.getElementById('start-loop').addEventListener('click', function(){

    //initialize an array
    let numbers=[];

    //intialize a variable for the loop
    let count=0;

    //use a while loop to populate the array
    while(count <10){
        //perform operations (in this case, square each number)
        let squared=count*count;

        //add the squared number to the array
        numbers.push(squared);
        
        
        //increment the counter
        count++;
    }
    //display the array in the o/p div
    const outputDiv=document.getElementById('array-output');
    //outputDiv.textContent=`Generated Array: [${numbers.join(', ')}]`;
    outputDiv.textContent = `Generated Array: [${numbers.join(', ')}]`;
});
console.log("Script Loaded");