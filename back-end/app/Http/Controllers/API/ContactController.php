<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Jobs\SendEmailContact;
use App\Models\ContactModel;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contact = ContactModel::get();
        return $contact;
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
        $contact = new ContactModel();   
        $contact->email = $request->email;    
        $contact->name = $request->name;        
        $contact->Phone = $request->phone;
        $contact->messages = $request->messages;
        $contact->position = $request->position;
        $contact->save();
        $message = [
            'type' => 'Email thông báo liên lạc',
            'thanks' => 'Cảm ơn ' . $request->name . ' liên lạc với chúng tôi.',
            'content' => 'Chúng tôi sẽ sớm liên hệ lại với bạn.',
        ];
        SendEmailContact::dispatch($message, $request->email)->delay(now()->addMinute(1));     
        return  response()->json(['message' => 'contact created',
        'contact' => $contact]);
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
}
