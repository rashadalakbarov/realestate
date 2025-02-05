<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

 
// Route::get('/', [AdminController::class, 'index'])->name('login');
Route::match(['get', 'post'], '/', [AdminController::class, 'login'])->name('login');

Route::controller(OrderController::class)->prefix('admin')->name('admin.')->group(function(){
    Route::get('/logout', 'logout')->name('logout');
});