<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    // login authentication
    public function login(){
        return view('auth.login');
    }

    // logout authentication
    public function logout(){
        //
    }
}
