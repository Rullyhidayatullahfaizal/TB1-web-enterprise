'use client'

    import React, { useState } from 'react'
    import { useRouter } from 'next/navigation'

    //memanggil supabase
    import { supabase } from "@/utils/supabase";
    
    const RegisterPage = () => {
        const router = useRouter()

        const [usernameInput, setUname] = useState('')
        const [passwordInput, setPwd] = useState('')


        const hdlUName = event => {
            setUname(event.target.value);
        }
    
        const hdlPwd = event => {
            setPwd(event.target.value);
        }



        //insert data ke supabase
        async function onSubmit(event) {
            event.preventDefault();

            alert("submit diproses lagi");

            const { data, error } = await supabase
                .from('users')
                .insert({ username: usernameInput, password: passwordInput, })

            //daftar pakai username yang sudah ada di supabase    
                if (error) {
                    return alert ("password salah");   
                    } 
                    
                
                    router.push('/login/')

            //.from(tabel target)
                //.insert('field', value)


        }

        return (


            <section className="bg-gray-50 dark:bg-gray-50 flex justify-center py-8 mx-auto md:h-screen lg:py-20">
                <div>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-50 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                                Create and account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your username</label>
                                    <input onChange={hdlUName} type="text" name="username" id="username" value={usernameInput}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                                    <input onChange={hdlPwd} value={passwordInput} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Confirm password</label>
                                    <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <button onClick={onSubmit} type="submit" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-500 dark:hover:bg-blue-600 dark:focus:ring-blue-900">Create an account</button>
                                <p className="text-sm font-light text-gray-900 dark:text-black">
                                    Already have an account? <a href="login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>



        );
    };


    export default RegisterPage;