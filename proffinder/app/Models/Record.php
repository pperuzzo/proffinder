<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Record extends Model
{
    protected $table = 'records';
    public $fillable = ['Department, Subject, Course, Instructor, A, B, C, D, F, IX, NP, P , RD, W, Total Semester, Year'];
}
