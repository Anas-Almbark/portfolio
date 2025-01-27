<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::all();
        return view("components.projects", compact("projects"));
    }
    public function create()
    {
        $categories = Category::all();
        return view("components.addProject", compact("categories"));
    }
    public function store(Request $request)
    {
        $validate =  $request->validate([
            'title' => 'required|string|min:3|max:80',
            "image" => "image|required",
            "url_demo" => "string|required|min:5|max:255",
            "url_repo" => "string|required|min:5|max:255",
            "category_id" => "required",
        ]);
        $project = new Project();
        $project->title = $validate['title'];
        if ($request->hasFile('image')) {
            $project->img = $validate['image']->store("projects_image", "public");
        } else {
            return back()->withErrors(['img' => 'Image upload failed.']);
        }
        $project->url_demo = $validate['url_demo'];
        $project->url_repo = $validate['url_repo'];
        $project->category_id = $validate['category_id'];
        $project->save();
        return redirect()->route("project.index")->with("success", "project added successfully");
    }
    public function show(string $id) {}
    public function edit(Project $project)
    {
        $categories = Category::all();
        return view("components.editProject", compact("project", "categories"));
    }
    public function update(Request $request, Project $project)
    {
        $validate =  $request->validate([
            'title' => 'required|string|min:3|max:80',
            "image" => "image",
            "url_demo" => "string|required|min:5|max:255",
            "url_repo" => "string|required|min:5|max:255",
            "category_id" => "required",
        ]);
        $project->title = $validate['title'];
        if ($request->hasFile('image')) {
            if ($project->img) {
                Storage::disk('public')->delete($project->img);
            }
            $project->img = $validate['image']->store("projects_image", "public");
        }
        $project->url_demo = $validate['url_demo'];
        $project->url_repo = $validate['url_repo'];
        $project->category_id = $validate['category_id'];
        $project->save();
        return redirect()->route("project.index")->with("success", "project updated successfully");
    }
    public function destroy(Project $project)
    {
        $project->delete();
        return redirect()->route("project.index")->with("success", "project deleted successfully");
    }
}
