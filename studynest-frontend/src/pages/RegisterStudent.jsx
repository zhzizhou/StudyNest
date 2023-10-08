import React from 'react';
import { useState } from 'react';

export const RegisterStudent = () => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);
<<<<<<< HEAD

  const handleCheckboxChange = (checkboxNumber) => (event) => {
    switch (checkboxNumber) {
      case 1:
        setIsChecked1(event.target.checked);
        break;
      case 2:
        setIsChecked2(event.target.checked);
        break;
      case 3:
        setIsChecked3(event.target.checked);
        break;
      case 4:
        setIsChecked4(event.target.checked);
        break;
      case 5:
        setIsChecked5(event.target.checked);
        break;
      default:
        break;
    }
  };
=======
    const [isChecked6, setIsChecked6] = useState(false);
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    const handleCheckboxChange = (checkboxNumber) => (event) => {
        switch (checkboxNumber) {
            case 1:
                setIsChecked1(event.target.checked);
                break;
            case 2:
                setIsChecked2(event.target.checked);
                break;
            case 3:
                setIsChecked3(event.target.checked);
                break;
            case 4:
                setIsChecked4(event.target.checked);
                break;
            case 5:
                setIsChecked5(event.target.checked);
                break;
            case 6:
                setIsChecked6(event.target.checked);
                break;
            default:
                break;
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the form from submitting initially

        if (password !== retypePassword) {
            alert('Passwords do not match. Please re-enter.');
            return; // Stop form submission
        }

        // Add code to submit the form or perform other actions here

        // Example: You can submit the form using fetch or any other method
        const response = await fetch("https://mercury.swin.edu.au/it000000/formtest.php", {
            method: 'POST'
        })
        if (response.ok) {
            console.log("Successful")
        }
        else { console.log("Failed") }
    };


>>>>>>> main
    return (
        <div class="bg-[#f7f7f7]">
            <nav>
                <a href="studynest-frontend/src/pages/Home.jsx" class="text-[#587BB4]" >&lt; Back to Homepage</a>
            </nav>
<<<<<<< HEAD
            <div class ="mx-10 px-32">
                <h1 class="text-5xl font-effra text-[#525252] mx-1">Enroll and Start Learning Now!</h1>
            </div>
            <div class="bg-[#f7f7f7] h-screen flex flex-col items-center">
                <div className="border border-solid border-blue-500 w-4/5 h-3/4 bg-[#ffffff] mt-3 rounded-3xl">
                    <div class="px-6 py-3">
                        <form method="post" action="http://mercury.swin.edu.au/it000000/formtest.php">
                            <h2 class="text-2xl font-effra text-[#525252]">Personal Details</h2><br/>
=======
            <div class="mx-10 px-32 mb-3">
                <h1 class="text-5xl font-effra text-[#525252] mx-1">Enroll and Start Learning Now!</h1>
            </div>
            <div class="bg-[#f7f7f7] h-screen flex flex-col items-center">
                <div className= "w-4/5 h-3/4 bg-[#ffffff] mt-3 rounded-3xl">
                    <div class="px-6 py-3">

                        <form method="post" action="http://mercury.swin.edu.au/it000000/formtest.php" onSubmit={handleSubmit}>
                            <h2 class="text-2xl font-effra text-[#525252]">Personal Details</h2>
>>>>>>> main
                            <div class="my-[2rem]">
                                <div class="flex flex-row justify-around">
                                    <input type="text" name="userName" placeholder='User Name' id="firstName" maxlength="20" required="required" pattern="^[A-Za-z]+$" class="w-5/12 text-center shadow-lg py-2 px-4 rounded-full">
                                    </input>
<<<<<<< HEAD
                            
                        
                                    <input type="text" name="dob" id="dob" placeholder='Date of Birth' class="shadow-lg py-2 px-4 rounded-full text-center w-5/12 "></input> 
                                </div>
                                <br/><br/>
                                <div class="flex flex-row justify-around">
                                    <input type="text" name="password" id="password" placeholder='Password' required="required"
                                        pattern="^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[@#$%^&+=!])(?!.*\s).{8,}$" class="w-5/12 shadow-lg py-2 px-4 rounded-full text-center"></input>
                                    <input type="text" name="repassword" id="repassword" placeholder='Re-type Password' required="required"
                                        pattern="^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[@#$%^&+=!])(?!.*\s).{8,}$" class="w-5/12 shadow-lg py-2 px-4 rounded-full text-center"></input>
                            
                                </div>
                            </div>
                            
                                
                            


                            <h2 class="text-2xl font-effra text-[#525252] mb-[2rem]">Subjects</h2><br/>
                            <div class="flex flex-row justify-around gap-[10px] mb-20">
                                <p><label class={`bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full w-1/2 ${isChecked1 ? "bg-[#176AE6] text-white" : 'bg-[ffffff]'}`} for="art">Art</label>
                                    <input type="checkbox" id="art" name="subjects[]" value="art" style={{ display: "none" }} checked={isChecked1} onChange={handleCheckboxChange(1)}></input>
                                </p>
                                <p><label class={`bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ${isChecked2 ? "bg-[#176AE6] text-white" : 'bg-[ffffff]'}`} for="biology">Biology</label>
                                    <input type="checkbox" id="biology" name="subjects[]" value="biology" style={{ display: "none" }} checked={isChecked2} onChange={handleCheckboxChange(2)}></input>
                                </p>
                                <p><label class={`bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ${isChecked3 ? "bg-[#176AE6] text-white" : 'bg-[ffffff]'}`} for="chemistry">Chemistry</label>
                                    <input type="checkbox" id="chemistry" name="subjects[]" value="chemistry" style={{ display: "none" }} checked={isChecked3} onChange={handleCheckboxChange(3)}></input>
                                </p>
                                <p><label class={`bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ${isChecked4 ? "bg-[#176AE6] text-white" : 'bg-[ffffff]'}`} for="computerscience">Computer Science</label>
                                    <input type="checkbox" id="computerscience" name="subjects[]" value="computerscience" style={{ display: "none" }} checked={isChecked4} onChange={handleCheckboxChange(4)}></input>
                                </p>
                                <p><label class={`bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ${isChecked5 ? "bg-[#176AE6] text-white" : 'bg-[ffffff]'}`} for="economics">Economics</label>
                                    <input type="checkbox" id="economics" name="subjects[]" value="economics" style={{ display: "none" }} checked={isChecked5} onChange={handleCheckboxChange(5)}></input>
                                </p>
                            </div>
                            
                            <div class = "text-center">
                            <input type="submit" id="submit" value="Create" class="bg-[ffffff] bg-[#176AE6] text-[#ffffff]  hover:bg-[#363e94] shadow-lg px-4 rounded-full w-1/4 h-9 text-center ml-10"></input>
                            </div>                        
=======


                                    <input type="text" name="dob" id="dob" placeholder='Date of Birth' pattern='^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\d{4}$' class="shadow-lg py-2 px-4 rounded-full text-center w-5/12"></input>
                                </div>
                                <br />
                                <div class="flex flex-row justify-around">
                                    <input type="text" name="password" id="password" placeholder='Password' required="required" onChange={(e) => setPassword(e.target.value)}
                                        class="w-5/12 shadow-lg py-2 px-4 rounded-full text-center"></input>
                                    <input type="text" name="repassword" id="repassword" placeholder='Re-type Password' required="required" onChange={(e) => setRetypePassword(e.target.value)}
                                        class="w-5/12 shadow-lg py-2 px-4 rounded-full text-center"></input>

                                </div>
                            </div><br />





                            <h2 class="text-2xl font-effra text-[#525252] mb-[2rem]">Subjects</h2>
                            <div class="flex flex-row justify-around gap-[10px] mb-5">
                                <label class={`w-80 text-center bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ${isChecked1 ? "bg-[#176AE6] text-white" : 'bg-[ffffff]'}`} for="art">Art</label>
                                <input type="checkbox" id="art" name="subjects[]" value="art" style={{ display: "none" }} checked={isChecked1} onChange={handleCheckboxChange(1)}></input>

                                <label class={`w-80 text-center bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full  ${isChecked2 ? "bg-[#176AE6] text-white" : 'bg-[ffffff]'}`} for="biology">Biology</label>
                                <input type="checkbox" id="biology" name="subjects[]" value="biology" style={{ display: "none" }} checked={isChecked2} onChange={handleCheckboxChange(2)}></input>

                                <label class={`w-80 text-center bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full  ${isChecked3 ? "bg-[#176AE6] text-white" : 'bg-[ffffff]'}`} for="chemistry">Chemistry</label>
                                <input type="checkbox" id="chemistry" name="subjects[]" value="chemistry" style={{ display: "none" }} checked={isChecked3} onChange={handleCheckboxChange(3)}></input>

                            </div>
                            <div class="flex flex-row justify-around gap-[10px] mb-12">

                                <label class={`w-80 text-center bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ${isChecked4 ? "bg-[#176AE6] text-white" : 'bg-[ffffff]'}`} for="computerscience">Computer Science</label>
                                <input type="checkbox" id="computerscience" name="subjects[]" value="computerscience" style={{ display: "none" }} checked={isChecked4} onChange={handleCheckboxChange(4)}></input>

                                <label class={`w-80 text-center bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ${isChecked5 ? "bg-[#176AE6] text-white" : 'bg-[ffffff]'}`} for="economics">Economics</label>
                                <input type="checkbox" id="economics" name="subjects[]" value="economics" style={{ display: "none" }} checked={isChecked5} onChange={handleCheckboxChange(5)}></input>


                                <label class={`w-80 text-center bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ${isChecked6 ? "bg-[#176AE6] text-white" : 'bg-[ffffff]'}`} for="mathematics">Mathematics</label>
                                <input type="checkbox" id="mathematics" name="subjects[]" value="mathematics" style={{ display: "none" }} checked={isChecked6} onChange={handleCheckboxChange(6)}></input>

                            </div>

                            <div class="text-center">
                                <input type="submit" id="submit" value="Create" class="bg-[ffffff] bg-[#176AE6] text-[#ffffff]  hover:bg-[#363e94] shadow-lg px-4 rounded-full w-1/4 h-9 text-center"></input>
                            </div>
>>>>>>> main
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterStudent