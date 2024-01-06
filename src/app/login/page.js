'use client'

import React, { useClient, useEffect, useState } from 'react'
import { supabase } from "@/utils/supabase";
import { useRouter } from 'next/navigation';


//memanggil supabase

const LoginPage = () => {
    //define state : format [namaState, fungsiUbahState] = useState(default [])
    const router = useRouter()
    const [username, setUname] = useState('');
    const [password, setPwd] = useState('');

   

    const hdlUName = event => {    
        setUname(event.target.value);
    }

    const hdlPwd = event => {
        setPwd(event.target.value);
    }

    


    //cara akses api via libary supabase
    async function onSubmit(e) {
        e.preventDefault()
            const { data, error } = await supabase
                .from('users')
                .select('id')
                .eq('username', username)
                .eq('password', password)
                .single()

            //fungsi if
                if (!data) {
                return alert ("password salah");   
                
                } 
            //    
                
                router.push("/home");

                //Aray

                //.from(tabel target)
                //    .insert('field', value)

           
           
        //alert("");


        
    }

    return (


        <section class="bg-gray-50 dark:bg-gray-50 flex justify-center py-8 mx-auto md:h-screen lg:py-20">
            <div>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-50 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                            Sign in tou you account
                        </h1>
                        
                        <form onSubmit={onSubmit} class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your username</label>
                                <input onChange={hdlUName} value={username} type="username" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                                <input onChange={hdlPwd} value={password} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <button type="submit" class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-500 dark:hover:bg-blue-600 dark:focus:ring-blue-900">Sign in</button>
                            <p class="text-sm font-light text-gray-900 dark:text-black">
                                Don't have an account yet? <a href="register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};


export default LoginPage;