@extends('layout_dashboard')
@section('content')
<div class="my-3 pb-3">
    <a href="{{route("category.create")}}" class="btn btn-outline-success mx-2"> add new category </a>
</div>
<div class="row">
    <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
        @forelse ($categories as $category)
        <div class="card mr-5 border">
            <div class="card-body">
              <div class="row">
                <div class="w-auto">
                  <div class="d-flex justify-content-between align-items-center">
                    <h3 class="mb-0 text-sm"> {{$category->name}} </h3>
                        @if($category->visible)
                        <i class='fa-solid fa-check ml-3 px-2 py-1 bg-success'></i>
                        @else
                        <i class='fa-solid fa-xmark ml-3 px-2 py-1 bg-danger'></i>
                        @endif
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center mt-4">
                <div class="icon icon-box-danger mr-3 py-2 px-3">
                    <form action="{{route("category.destroy" , $category->id)}}" method="POST">
                        @csrf
                        @method("DELETE")
                        <button type="submit" class="btn">
                            <i class="fa-solid fa-trash text-danger"></i>
                        </button>
                    </form>
                </div>
                <div class="icon icon-box-warning py-2 px-3">
                  <form action="{{route("category.edit" , $category->id)}}" method="get">
                    @csrf
                    <button type="submit" class="btn">
                        <i class="fa-solid fa-edit text-warning"></i>
                    </button>
                </form>
                </div>
              </div>
            </div>
          </div>
        @empty
          <h1 class="text-white m-auto"> No category Found ! </h1>
        @endforelse

    </div>
  </div>
@endsection
