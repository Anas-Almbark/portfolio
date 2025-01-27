@extends("layout_dashboard")
@section("content")
<div class="d-flex h-75 align-items-center justify-content-center">
    <div class="col-6 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
            <h4 class="card-title">Add new category</h4>
            <form method="POST" action="{{route("category.update" , $category->id) }}" class="forms-sample">
                @csrf
                @method("PUT")
                <div class="form-group">
                    <label for="title">title category</label>
                    <input type="text" value="{{$category->name}}" class="form-control text-white" name="name" id="title" placeholder="Name">
                </div>
                <div class="form-group">
                    <label for="visible" class="mt-1 mr-2">visible</label>
                    <input type="checkbox" class="form-check-primary" id="visible" @checked($category->visible)  name="visible">
                </div>
                <button type="submit" name="submit" class="btn btn-primary mr-2">Submit</button>
                <a href="{{route("category.index")}}" class="btn btn-outline-success mx-2"> Back </a>
            </form>
            </div>
        </div>
        </div>
</div>
@endsection
