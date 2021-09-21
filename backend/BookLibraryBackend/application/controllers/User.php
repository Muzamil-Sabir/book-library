<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class User extends CI_Controller {

	 public function __construct() {
        parent::__construct();
         header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        $this->load->helper('url');
        $this->load->database();
       

    }
	public function getUsers()
	{
		
		$query=$this->db->where('role',2)->get("users");
    	$result= $query->result();
		print json_encode($result,JSON_PRETTY_PRINT);
	}
	
	public function login(){

		$username = $this->input->post("username");
		$password = $this->input->post("password");
		$query=$this->db->query("select * from users where email = '".$username."' and password = '".$password."'");
			$result = $query->result();
			if($query->num_rows()){
			$response = array("msg" => "success","result"=>$result);
			}else{
				$response = array("msg" => "Failed","result"=>"Username or Password is Invalid");
			}
		 print json_encode($response,JSON_PRETTY_PRINT);
	}

	public function signup(){
		$req['email'] = $this->input->post("username");
		$req['password'] = $this->input->post("password");
		$req['name'] = $this->input->post("name");
		$req['address'] = $this->input->post("address");
		$req['phone'] = $this->input->post("phone");
		$req['role'] = 2;

		$this->db->where('email', $this->input->post("username"));
			
			$result =$this->db->get('users');
			if($result->num_rows()>0){
				$data = array("data" => "User Already Exist","msg"=>"Failed");
			}else{
		 $response = $this->db->insert('users',$req);
		 $data = array("data" => "Registration Success","msg"=>"success");
		}
		  print json_encode($data,JSON_PRETTY_PRINT);
	}

}
