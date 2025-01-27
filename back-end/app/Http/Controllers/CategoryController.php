<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return view("components.category", compact("categories"));
    }

    public function create()
    {
        return view("components.addCategory");
    }
    public function store(Request $request)
    {
        $validate = $request->validate([
            "name" => "required|string|min:3|max:50",
        ]);
        $category = new Category();
        $category->name = $validate['name'];
        $category->save();
        return redirect()->route("category.index")->with("success", "Category created successfully");
    }

    public function show(string $id) {}

    public function edit(Category $category)
    {
        return view("components.editCategory", compact("category"));
    }
    public function update(Request $request, Category $category)
    {
        $validate = $request->validate([
            "name" => "required|string|min:3|max:50",
        ]);

        $category->name = $validate['name'];
        $category->visible = $request->visible ? 1 : 0;
        $category->save();
        return redirect()->route("category.index")->with("success", "Category updated successfully");
    }
    public function destroy(Category $category)
    {
        $category->delete();
        return redirect()->route("category.index")->with("success", "Category deleted successfully");
    }
}
