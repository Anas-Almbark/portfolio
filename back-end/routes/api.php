<?php

use App\Http\Controllers\api\projectController;
use Illuminate\Routing\Route;

Route::apiResource('projects', [ProjectController::class]);
