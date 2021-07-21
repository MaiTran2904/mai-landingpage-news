<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MailNotify extends Mailable
{
    use Queueable, SerializesModels;
    public $data;
    /**
     * Create a new data instance.
     *
     * @return void
     */
 
    public function __construct($data)
    {
        $this->data = $data;
    }
 
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('trunhoangquan73qb@gmail.com')
        ->view('Admin.Page.mails_conmfirm')
        ->subject('ĐĂNG KÝ THAM GIA THÀNH CÔNG');
    }
}
