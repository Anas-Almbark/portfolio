<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;


Route::view("/", "layout_dashboard");

Route::resource("project", ProjectController::class);

Route::resource("category", CategoryController::class);
