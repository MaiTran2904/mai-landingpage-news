<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\HumanDonationModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class Donation_IndividualController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $individual=HumanDonationModel::all();
        return $individual;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'your_name' => 'required',
            'email' => 'required|regex:/(.+)@(.+)\.(.+)/i',
            'phone' => 'required',
            'money' => 'required',
            'payment_method' => 'required',
            'id_role' => 'required',
        ], [
            'your_name.required' => 'Please enter name',
            'email.required' => 'Please enter email',
            'phone.required' => 'Please enter phone',
            'money.required' => 'Please enter money',
            'payment_method.required' => 'Please choose payment_method',
            'id_role.required' => 'Please choose id_role',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->getMessageBag(),
                'status' => 0,
            ]);
        } else {
            $admin = HumanDonationModel::whereEmail($request->email)->first();
            if ($admin != null) {
                return response()->json([
                    'status' => 200,
                ]); 
            } else {
                return response()->json([
                    'status' => 100,
                ]);
            }
        }
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
}
