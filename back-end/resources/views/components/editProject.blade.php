@extends("layout_dashboard")
@section("content")
<div class="col-6 m-auto grid-margin stretch-card">
    <div class="card">
        <div class="card-body">
        <h4 class="card-title">Add new project</h4>
        <form method="POST" action="{{route("project.update" , $project->id)}}" class="forms-sample" enctype="multipart/form-data">
            @csrf
            @method("PUT")
            <div class="form-group">
            <label for="title">title project</label>
            <input type="text" value="{{$project->title}}" class="form-control text-white" name="title" id="title" placeholder="Name">
            </div>
            <div class="form-group">
            <label for="url_demo">Url Demo</label>
            <input type="text" value="{{$project->url_demo}}" class="form-control text-white" name="url_demo" id="url_demo" placeholder="Url demo">
            </div>
            <div class="form-group">
            <label for="url_repo">Url Repo</label>
            <input type="text" value="{{$project->url_repo}}" class="form-control text-white" name="url_repo" id="url_repo" placeholder="Url repo">
            </div>
            <div class="form-group">
            <label for="category_id">category of project</label>
            <select class="form-control text-white" name="category_id">
               @foreach ($categories as $category)
               <option value="{{$category->id}}" @selected($category->id == $project->category_id)> {{$category->name}} </option>
               @endforeach
            </select>
            </div>
            <div class="form-group">
                <label id="image-project">File upload</label>
                <input type="file" name="image" id="image-project" class="file-upload">
            </div>
            @error('img')
            <span class="text-sm my-2 text-danger d-block"> {{$message}} </span>
           @enderror
            <button type="submit" name="submit" class="btn btn-primary mr-2">Submit</button>
            <a href="{{route("project.index")}}" class="btn btn-outline-success mx-3"> Back </a>
        </form>
        </div>
    </div>
    </div>
@endsection
