const form=document.getElementById("expenseForm");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const data={
employee_name:employee_name.value,
employee_email:employee_email.value,
vendor:vendor.value,
amount:Number(amount.value),
category:category.value,
expense_date:expense_date.value
};

const response=await fetch("https://codesbykerryb.app.n8n.cloud/webhook/submit-expense",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

});

document.getElementById("status").innerHTML=
response.ok
?"✅ Expense submitted successfully!"
:"❌ Submission failed";

form.reset();

});