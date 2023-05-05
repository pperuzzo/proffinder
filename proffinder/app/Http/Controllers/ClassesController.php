<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Record;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Redirect;

class ClassesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Valide the data.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function checkData($course = null)
    {
        $validator = Validator::make([], []); // Empty data and rules fields

        if(!isset($course) || empty($course)){
            $validator->errors()->add('class', 'The class field is required.');
            throw new ValidationException($validator);
        }

        if(strlen($course) > 50){
            $validator->errors()->add('class', 'The class field is required.');
            throw new ValidationException($validator);
        }

        $course = str_replace('_', ' ', $course);

        $res = Record::where('Course', '=', $course)->get();
        if (count($res) == 0) {
            $validator->errors()->add('class', 'The selected class is invalid.');
            throw new ValidationException($validator);
        }

        $professors = Record::select('Instructor', 'Course', 'A', 'Total')->where('Course', '=', $course)->groupBy('Instructor')->get();

        $data = [count($professors)];

        foreach ($professors as $key => $value) {
            $a = 0;
            $total = 0;
            foreach ($res as $k => $v) {
                if ($v->Instructor == $value->Instructor){
                    $a += $v->A;
                    $total += $v->Total;
                }
            }
            $percentage = round((($a/$total) *100), 2);

            $data[$key] = array("Instructor" => $value->Instructor, "Percentage" => $percentage);
        }

        $percentages = array_column($data, 'Percentage');
        array_multisort($percentages, SORT_DESC, $data);

        return Inertia::render('Class', [
            'course' => $course,
            'data' => $data,
        ]);
    }
}
