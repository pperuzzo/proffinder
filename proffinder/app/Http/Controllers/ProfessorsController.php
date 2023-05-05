<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Record;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Redirect;

class ProfessorsController extends Controller
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
    public function checkData($professor = null)
    {
        $validator = Validator::make([], []); // Empty data and rules fields

        if(!isset($professor) || empty($professor)){
            $validator->errors()->add('professor', 'The professor field is required.');
            throw new ValidationException($validator);
        }

        if(strlen($professor) > 50){
            $validator->errors()->add('professor', 'The professor field is required.');
            throw new ValidationException($validator);
        }

        $professor = str_replace('_', ' ', $professor);

        $res = Record::where('Instructor', '=', $professor)->get();
        if (count($res) == 0) {
            $validator->errors()->add('professor', 'The selected professor is invalid.');
            throw new ValidationException($validator);
        }

        $classes = Record::select('Instructor', 'Course', 'SemesterValue')
                                ->where('Instructor', '=', $professor)
                                ->groupBy('Course')
                                ->get();

        $suggestionsDep = Record::select('Instructor', 'Department')
        ->where('Instructor', '!=', $professor)
        ->where('Department', '=', $res[0]->Department)
        ->groupBy('Instructor')
        ->inRandomOrder()
        ->limit(5)
        ->get();

        $suggestions = array('Department' => $suggestionsDep);
        foreach ($classes as $key => $value) {
            $sugg = Record::select('Instructor', 'Course')
            ->where('Instructor', '!=', $professor)
            ->where('Course', '=', $value->Course)
            ->groupBy('Instructor')
            ->inRandomOrder()
            ->limit(5)
            ->get();
            $suggestions=array_merge($suggestions, array($value->Course => $sugg));
        }

        $semesters = Record::select('Instructor', 'Semester', 'SemesterValue')
                                ->where('Instructor', '=', $professor)
                                ->groupBy('Semester')
                                ->orderBy('SemesterValue', 'ASC')
                                ->get();

        return Inertia::render('Professor', [
            'prof' => $professor,
            'data' => $res,
            'suggestions' => $suggestions,
            'classes' => $classes,
            'semesters' => $semesters
        ]);
    }
}

