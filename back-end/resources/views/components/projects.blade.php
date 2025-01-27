@extends("layout_dashboard")
@section("content")
@include('components.msg')
<div class="my-3 pb-3">
    <a href="{{route("project.create")}}" class="btn btn-outline-success mx-2"> add new project </a>
</div>
<div class="row">
    @forelse ($projects as $project)
    <div class="col-md-6 mb-4">
        <div class="card">
            <div class="w-100 d-inline-block" style="background: url({{ Storage::url($project->img) }}) no-repeat center center; background-size: cover; height: 150px;"></div>            <div class="card-body">
                <span class="py-1 px-3 mb-3 d-inline-block badge-outline-info">{{$project->category->name}}</span>
                <div class="d-flex px-3 align-items-center">
                  <div class="row">
                    <div class="">
                      <div class="d-flex d-sm-block d-md-flex align-items-center">
                        <h2 class="mb-0"> {{$project->title}} </h2>
                      </div>
                      <ul class="my-3 list-group list-group-horizontal" style="list-style: none">
                        <li class="mr-2">
                            <a href="{{$project->url_repo}}" class="btn btn-outline-primary">
                                <i class="fa-brands fa-github"></i> GitHub
                            </a>
                        </li>
                        <li class="mx-2">
                            <a href="{{$project->url_demo}}" class="btn btn-outline-success">
                                <i class="fa-solid fa-eye"></i> Demo
                            </a>
                        </li>
                      </ul>
                      <div class="d-flex align-items-center my-4">
                        <div class="icon icon-box-danger mr-3 py-2 px-3">
                            <form action="{{route("project.destroy" , $project->id)}}" method="POST">
                                @csrf
                                @method("DELETE")
                                <button type="submit" class="btn">
                                    <i class="fa-solid fa-trash text-danger"></i>
                                </button>
                            </form>
                        </div>
                        <div class="icon icon-box-warning py-2 px-3">
                            <form action="{{route("project.edit" , $project->id)}}" method="GET">
                                @csrf
                                <button type="submit" class="btn">
                                    <i class="fa-solid fa-edit text-warning"></i>
                                </button>
                            </form>

                        </div>
                      </div>
                      <h6 class="text-muted font-weight-normal">
                        {{$project->created_at->format('Y-m-d')}}
                      </h6>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    @empty
    <p>No projects found</p>
    @endforelse
</div>
@endsection
