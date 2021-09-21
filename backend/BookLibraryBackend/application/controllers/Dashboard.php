<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class Dashboard extends CI_Controller {

	 public function __construct() {
        parent::__construct();
         header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        $this->load->helper('url');
        $this->load->database();
       

    }

	public function index(){

		$query=$this->db->query("SELECT count(*) as total_users,(SELECT count(*) from books) as total_books,(SELECT count(*) from book_requests where status='pending') as pending_books,(SELECT count(*) from book_requests where status='assigned') as assigned_books from users where role=2");
			$result = $query->result();
					
			print json_encode($result,JSON_PRETTY_PRINT);
	}

}
